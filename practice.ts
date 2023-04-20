type PlayerA = {
  firstName: string;
};

interface PlayerB {
  firstName: string;
}

class User implements PlayerA {
  constructor(public firstName: string) {}
}

class User1 implements PlayerB {
  constructor(public firstName: string) {}
}
