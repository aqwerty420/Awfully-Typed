import { env } from 'process';
import * as ts from 'typescript';
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
      const requires = file.code.match(/^.*require.*\n?/gm);
      if (requires != null) {
        for (const require of requires) {
          const elements = require.split(' ');
          const module = elements[1];
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          file.code = file.code.replaceAll(module, env.PROJECT_NAME);
        }
      }
      file.code = file.code.replace(/^.*require.*\n?/gm, '');
    }
  },
};

export default plugin;
