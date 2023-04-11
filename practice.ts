type SuperPrint = {
  // // 3 call signatures of concrete type
  // (arr: number[]): void;
  // (arr: boolean[]): void;
  // (arr: string[]): void;

  // <generic Type name> : typescript know that this
  // call signature is going to receive generic
  // <TypePlaceholder>(arr : TypePlaceholder[]) : void
  <T>(arr: T[]): T;
};

// const SuperPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => console.log(i));
// };
const SuperPrint: SuperPrint = (arr) => arr[0];

// SuperPrint([1, 2, 3, 4]);
// SuperPrint([true, false, true]);
// SuperPrint(['asdf']);
// //err before but now it's ok
// SuperPrint([1, 2, true, false]);

const a = SuperPrint([1, 2, 3, 4]);
const b = SuperPrint([true, false, true]);
const c = SuperPrint(['asdf']);
//err before but now it's ok
const d = SuperPrint([1, 2, true, false]);
