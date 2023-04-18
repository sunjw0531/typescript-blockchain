// type shape of an Object
type Player = {
  nickname: string;
  healthBar: number;
};

const man: Player = {
  nickname: 'man',
  healthBar: 10,
};

// type
type Food = string;

const soup: Food = 'delicious';

// type alias(대체명)
type Nickname = string;
type Health = number;
type Friends = Array<string>;
type Player1 = {
  nickname: Nickname;
  healthBar: Health;
};

// type with specific option (concrete type)
type Team = 'red' | 'blue' | 'yellow';
type Health2 = 1 | 5 | 10;
type Player2 = {
  nickname: string;
  team: Team;
  health: Health2;
};
const man2: Player2 = {
  nickname: 'man2',
  team: 'yellow',
  health: 1,
};

//////////////////////////////////////////
// interface only specify the shape of Object
interface Player3 {
  nickname: string;
  team: Team;
  health: Health2;
}

const man3: Player3 = {
  nickname: 'man2',
  team: 'yellow',
  health: 1,
};

// interface extends
interface User {
  readonly name: string;
}
interface Player4 extends User {}
const man4: Player4 = {
  name: 'man4',
};
// err
man4.name = 'asdf';

// if it was a type?
type User1 = {
  name: string;
};
type Player5 = User1 & {};

// interface can stack the different properties in same interfaces
interface User6 {
  name: string;
}
interface User6 {
  lastName: string;
}
interface User6 {
  health: Number;
}
const newUser: User6 = {
  name: 'man',
  lastName: 'hey',
  health: 3,
};
