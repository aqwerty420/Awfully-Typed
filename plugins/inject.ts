import { env } from 'process';
import ts from 'typescript';
import * as tstl from 'typescript-to-lua';

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
      if (!file.outputPath.includes('load'))
        file.code =
          `local Unlocker, awful, ${env.PROJECT_NAME} = ...\n\n` + file.code;
    }
  },
};

export default plugin;
