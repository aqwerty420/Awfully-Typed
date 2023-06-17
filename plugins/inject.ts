import { env } from 'process';
import ts from 'typescript';
import * as tstl from 'typescript-to-lua';

const toInject = `local Unlocker, awful, ${env.PROJECT_NAME} = ...`;

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
      file.code = `${toInject}${file.code}`;
      file.code = file.code.replace(
        `return require("${env.PROJECT_NAME}", ...)\n`,
        `require("${env.PROJECT_NAME}", ...)\n`
      );
    }
  },
};

export default plugin;
