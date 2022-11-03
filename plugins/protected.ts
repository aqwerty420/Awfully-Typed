import { env } from 'process';
import ts from 'typescript';
import * as tstl from 'typescript-to-lua';

const protectedList = [
  'TargetUnit',
  'UseInventoryItem',
  'CastSpellByName',
  'PetAttack',
  'AttackTarget',
  'UseItemByName',
];

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
      for (const protectedFunction of protectedList) {
        file.code = file.code.replace(
          new RegExp(`(${protectedFunction}\\(\\))`, 'g'),
          `${env.PROJECT_NAME}.system.callProtectedFunction("${protectedFunction}")`
        );

        file.code = file.code.replace(
          new RegExp(`(${protectedFunction}\\()`, 'g'),
          `${env.PROJECT_NAME}.system.callProtectedFunction("${protectedFunction}", `
        );
      }
    }
  },
};

export default plugin;
