// unknown
let a: unknown;

if (typeof a === 'number') {
  let b = a + 1;
}

if (typeof a === 'string') {
  let c = a.toUpperCase();
}

// void (nothing return)
function hello() {
  console.log('x');
}

// never (function never return)
function hi(name: string): never {
  throw new Error(name);
}

function helloo(name: string | number) {
  if (typeof name === 'string') {
    name;
  } else if (typeof name === 'number') {
    name;
  } else {
    // never type
    name;
  }
}
