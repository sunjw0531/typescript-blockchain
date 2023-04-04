// typescript infer the type (Implicit Types)
let a = 'hello';
// specify the type (Explicit Types)
let b: boolean = true;

let c: number[] = [];
c.push(1);

const player = {
  name: 'paul',
};
player.name = 'zxcv';
// type error
player.hello();
