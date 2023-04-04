// ts code
const user = {
  nickname: 'paul',
};

// wrong ts code
user.hello();

// wrong ts code
[1, 2, 3, 4] + false;

// wrong ts code
function divide(a, b) {
  return a / b;
}
divide('adsf');

// wrong ts code
const player = {
  age: 12,
};
player.age = false;
