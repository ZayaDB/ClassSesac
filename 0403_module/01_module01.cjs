// commonjs
// 한 번에 module.exports 시키기

const colors = ["pink", "blue", "yellow"];

const sayhi = function () {
  console.log("안녕하세요! 이 함수는 sayhi 함수입니다.");
};

// commonjs 쓰고 있기 때문에 템플릿리터럴 사용하지 않고 바로 쓴다!
function sayName(name) {
  console.log("my name is " + name + " 이 함수는 sayName 함수입니다.");
  sayhi();
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

module.exports = { colors, sayName, Person };
