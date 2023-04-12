// generic type
type SuperPrint = <T>(arr: T[]) => T;

const SuperPrint: SuperPrint = (arr) => arr[0];

const a = SuperPrint([1, 2, 3, 4]);
const b = SuperPrint([true, false, true]);
const c = SuperPrint(['asdf']);
//err before but now it's ok
const d = SuperPrint([1, 2, true, false]);
// err
d.toUpperCase();

/////////////////////////////////////
// any has problem
type SuperPrint1 = (arr: any[]) => any;
const SuperPrint1: SuperPrint1 = (a) => a[0];
const e = SuperPrint1([1, 2, true, false]);
// problem here, typescript do not return the error
e.toUpperCase();

/////////////////////////////////////
// multi generic
type SuperPrint2 = <T, M>(a: T[], b: M) => T;
const SuperPrint2: SuperPrint2 = (a) => a[0];
const f = SuperPrint2([1, 2, 3, 4], 'x');
