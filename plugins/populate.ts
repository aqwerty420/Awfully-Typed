import { env } from 'process';
import ts from 'typescript';
import * as tstl from 'typescript-to-lua';

const basePopulate = 'awful.Populate(\n    {\n';
const endPopulate = `    },\n    ${env.PROJECT_NAME},\n    getfenv(1)\n)`;
const toReplace = 'return ____exports';
const toRemoveNoPopulate = 'local ____exports = {}\n';

interface PopulateElement {
  name: string;
  file: string;
}

class Populated {
  private elements: PopulateElement[] = [];

  public add(name: string, file: string): void {
    this.elements.push({ name, file });
  }

  public get(name: string): PopulateElement | undefined {
    return this.elements.find((element) => element.name === name);
  }
}

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

    const populated = new Populated();

    for (const file of result) {
      let toPopulate = '';
      const exports = file.code.match(/^____exports\..* = .*$/gm);

      if (exports != null) {
        for (const export_ of exports) {
          const vareValue = export_.split(' ')[0];
          const vareName = vareValue.split('____exports.')[1];

          const alreadypopulated = populated.get(vareName);
          if (alreadypopulated) {
            console.warn(
              `Element '${vareName}' is populated in '${alreadypopulated.file}' and '${file.outputPath}'`
            );
          }
          populated.add(vareName, file.outputPath);
          toPopulate += `        ${vareName} = ${vareValue},\n`;
        }
      }

      const replacement =
        toPopulate === '' ? '' : basePopulate + toPopulate + endPopulate;
      file.code = file.code.replace(toReplace, replacement);

      if (toPopulate === '') {
        file.code = file.code.replace(toRemoveNoPopulate, '');
      }
    }
  },
};

export default plugin;
