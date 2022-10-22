import ts from 'typescript';
import * as tstl from 'typescript-to-lua';
import * as fs from 'fs';

const outputPath = 'dist';

const plugin: tstl.Plugin = {
  beforeEmit(
    program: ts.Program,
    options: tstl.CompilerOptions,
    emitHost: tstl.EmitHost
  ) {
    void program;
    void options;
    void emitHost;

    try {
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
      }
      fs.copyFileSync('awful-config.json', outputPath + '/awful-config.json');
    } catch (err) {
      console.error("Error occurred while copying 'awful-config.json'!", err);
      throw err;
    }
  },
};

export default plugin;
