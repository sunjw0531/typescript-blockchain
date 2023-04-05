// optional type
type Player = {
  name: string;
  age?: number;
};

const player: Player = {
  name: 'paul',
};

const playerJohn: Player = {
  name: 'john',
  age: 12,
};

// function return type
function playerMaker(name: string): Player {
  return {
    name,
  };
}

const playerMaker2 = (name: string): Player => {
  return { name };
};

const zon = playerMaker('zon');
zon.age = 12;
