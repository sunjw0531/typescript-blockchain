// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Player extends User {
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string) {
//     return `Hello ${name}. My name is ${this.fullName()}`;
//   }
// }

// in javascript, there is no interface code
// but abstract class, there is a class code.
// so interface can reduce the code size
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(
    // cannot use private and protected while using interface
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

function makeUser(user: User): User {
  return {
    firstName: 'man',
    lastName: 'last',
    fullName: () => 'asdf',
    sayHi: (name) => 'adsfasdkjl',
  };
}

makeUser({
  firstName: 'man',
  lastName: 'last',
  fullName: () => 'asdf',
  sayHi: (name) => 'adsfasdkjl',
});
