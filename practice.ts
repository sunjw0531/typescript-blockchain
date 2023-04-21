type PlayerA = {
  firstName: string;
};

type PlayerAA = PlayerA & {
  lastName: string;
};

const playerA: PlayerAA = {
  firstName: "man",
  lastName: "asdf",
};

interface PlayerB {
  firstName: string;
}

interface PlayerBB extends PlayerB {
  lastName: string;
}
interface PlayerBB {
  a: string;
}
const playerB: PlayerBB = {
  firstName: "men",
  lastName: "asdfqwe",
  a: "a",
};

class User implements PlayerA {
  constructor(public firstName: string) {}
}

class User1 implements PlayerB {
  constructor(public firstName: string) {}
}
