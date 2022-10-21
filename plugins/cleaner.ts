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

    if (env.NODE_ENV != 'production') return;

    for (const file of result) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      file.code = file.code.replaceAll('awful.DevMode = true\n', '');
    }
  },
};

export default plugin;
