// object type definition
type Words = {
  [key: string]: string;
};
// let dict : Words ={'potato' : 'food', 'pizza' : 'food'}

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  update(newWord: Word) {
    return this.words[newWord.term]
      ? (this.words[newWord.term] = newWord.def)
      : console.log('No word');
  }
  // static method
  static hello() {
    return 'hello';
  }
}

class Word {
  // readonly protects term and def from trying to change
  constructor(public readonly term: string, public readonly def: string) {}
}

const food = new Word('kimchi', '김치');
food.def = 'readonly때문에 변경이 안됨';
const dict = new Dict();

dict.add(food);
// words = {'kimchi' : '김치'}

dict.def('kimchi');
// 김치

const newFoodDef = new Word('kimchi', '새로운 김치');
dict.update(newFoodDef);

Dict.hello();
