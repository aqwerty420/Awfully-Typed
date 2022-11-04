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

    for (const file of result) {
      if (!file.code.includes(toReplace)) continue;

      const path = file.outputPath.split('\\');
      const index = path.indexOf('dist');

      const envPath = path
        .slice(index + 1)
        .join('\\')
        .replace('.lua', '')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .replaceAll('\\', '.');

      file.code = file.code.replace(
        toReplace,
        `${basePopulate}        ["${envPath}"] = ____exports,${endPopulate}`
      );
    }
  },
};

export default plugin;
