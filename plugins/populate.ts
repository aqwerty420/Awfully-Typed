import { env } from 'process';
import ts from 'typescript';
import * as tstl from 'typescript-to-lua';

const basePopulate = 'awful.Populate(\n    {\n';
const endPopulate = `\n    },\n    ${env.PROJECT_NAME},\n    getfenv(1)\n)`;

const toReplace = 'return ____exports';

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

    const distPath = emitHost.getCurrentDirectory() + '\\dist\\';

    for (const file of result) {
      if (!file.code.includes(toReplace)) continue;

      const filePath = file.outputPath
        .replace(distPath, '')
        .replace('.lua', '');

      file.code = file.code.replace(
        toReplace,
        `${basePopulate}        ["${filePath}"] = ____exports,${endPopulate}`
      );
    }
  },
};

export default plugin;
