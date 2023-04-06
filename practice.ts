// readonly
type Player = {
  readonly name: string;
  age?: number;
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const zon = playerMaker('zon');
zon.age = 12;

// readonly error
zon.name = 'on';

// tuple
const player: [string, number, boolean] = ['paul', 1, true];
const player2: readonly [string, number, boolean] = ['paul', 1, true];

// undefined, null, any
let a: undefined = undefined;
let b: null = null;
let c: any[] = [];
let d: any = true;
c + d; // not error
a + b; // error
