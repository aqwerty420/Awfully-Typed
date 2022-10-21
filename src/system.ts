// Wrapper for protected functions call.
// Protected functions must be listed in plugins/protected.ts

const callProtectedFunction = (func: string, ...args: unknown[]): unknown => {
  if (Unlocker.type === 'daemonic') {
    return CallProtectedApi(func, ...args);
  } else {
    return Unlocker.Util.Evaluator.CallProtectedFunction(func, ...args);
  }
};

export { callProtectedFunction };
