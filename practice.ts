type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (obj: Config): void;
};
const push: Push = (config) => {
  if (typeof config === 'string') console.log(config);
  else {
    console.log(config.path);
  }
};

// different parameter count
type Add1 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
const add1: Add1 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add1(1, 2);
add1(1, 2, 3);
