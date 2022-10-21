import { env } from 'process';
import ts from 'typescript';
import * as tstl from 'typescript-to-lua';

const basePopulate = 'awful.Populate(\n    {\n';

const endPopulate = `    },\n    ${env.PROJECT_NAME},\n    getfenv(1)\n)`;

const plugin: tstl.Plugin = {
  beforeEmit(
    program: ts.Program,
    options: tstl.CompilerOptions,
    emitHost: tstl.EmitHost,
    result: tstl.EmitFile[]
  ) {
    void program;
    void options;
    void emitHost;

    for (const file of result) {
      if (file.outputPath.includes('lualib_bundle.lua')) {
        const matches = file.code.match(/^.*return\s\{[\s\S]*?^.*\}.*\n?/gm);

        if (matches != null) {
          const lastMatch = matches[matches.length - 1];

          const content = lastMatch
            .replace('return {\n', '')
            .replace('}\n', '');

          file.code = file.code.replace(
            lastMatch,
            basePopulate + content + endPopulate
          );
        }
      }
    }
  },
};

export default plugin;
