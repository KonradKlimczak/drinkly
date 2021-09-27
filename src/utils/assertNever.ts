export const assertNever = (_impossible: never): never => {
  throw new Error('This code should not be reachable');
};
