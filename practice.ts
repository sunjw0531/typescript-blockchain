function superPrint<V>(a: V[]) {
  return a[0];
}

type Player<T> = {
  name: string;
  extraInfo: T;
};

// extend
// type manPlayer = Player<{favFood : string}>
type manExtra = {
  favFood: string;
};
type manPlayer = Player<manExtra>;
const man: manPlayer = {
  name: 'man',
  extraInfo: { favFood: 'ramen' },
};

const man1: Player<null> = {
  name: 'man1',
  extraInfo: null,
};

type A = Array<number>;
let a: A = [1, 2, 3, 4];

function printAllNumbers(arr: Array<number>) {}

// in react
useState<number>();
