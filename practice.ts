abstract class User {
  constructor(
    // private do not allow to use the field outside of the class
    private firstName: string,
    private lastName: string,
    // public nickname: string
    // protected allow to use the field in class and sub classes.
    // protected nickname : string
    private nickname: string
  ) {}
  // abstract method
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // private getFullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
}

class Player extends User {
  getNickName(): void {
    // cannot
    console.log(this.nickname);
  }
}

const man = new Player('man', 'las', 'nick');

man.getFullName();
