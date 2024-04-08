// 1. 전개 구문 ( spread )

//1-1. 배열

const lunchMenu = ["국밥", "치킨마요", "파스타", "돈가스"];
const dinnerMenu = ["라면", "볶음밥", "고기", "파스타"];
console.log(lunchMenu);
console.log(dinnerMenu);
console.log(lunchMenu, dinnerMenu);

for (let dinnerMenu = 0; dinnerMenu < lunchMenu.length; dinnerMenu++) {
  console.log(lunchMenu[dinnerMenu]);
}

lunchMenu.forEach((menu) => {
  console.log(menu);
});

//전체 요소에 접근하고 싶은 경우
// 연산(계산) 등이 필요한 작업이 아닌 경우
// 전개 연산자 사용-> 일일이 요소에 접근하지 않고 사용할 수 있도록 함

console.log(...lunchMenu);
console.log(...[1, 2, 3, 4, 5]);

//배열 합치기
const menu = [...lunchMenu, ...dinnerMenu];
console.log(menu);

const prodData1 = [
  {
    id: 1,
    prod_name: "피크닉",
    pirce: 700,
  },
  {
    id: 2,
    prod_name: "딸기우유",
    pirce: 2000,
  },
  {
    id: 3,
    prod_name: "밀키스",
    pirce: 1100,
  },
];

const prodData2 = [
  {
    id: 4,
    prod_name: "코멧 쿠키",
    pirce: 500,
  },
  {
    id: 5,
    prod_name: "쌀과자",
    pirce: 300,
  },
  {
    id: 3,
    prod_name: "마가레트",
    pirce: 150,
  },
];
console.log(prodData1, prodData2);
const totalData = [...prodData1, ...prodData2];
console.log(totalData);
//---------------------------------------------------------------------------
//1-2. 문자열
// 전개구문을 배열 뿐만 아니라 객체나 문자열도 사용 가능
//for of 문에도 문자열 사용 가능

const str = "fighting!";
console.log(...str);

//1-3. 객체
let me1 = {
  name: "Zaya",
  height: 171,
  married: false,
  friend: null,
};

let me2 = {
  name: "자야",
  like: ["dance", "basketball"],
  pet: {
    name: "Pochita",
    like: ["playing", "eating"],
  },
  greeting: function () {
    console.log(
      `안녕하세요! 제 이름은 ${this.name}이고,키는${this.height}cm입니다`
    );
  },
};
//객체를 합칠 때 동일한 key가 있다면 뒤에 있는 변수 객체의 key의 value가 저장됨
let me = { ...me1, ...me2 };
console.log(me);
me.greeting(); //객체 내부에 value로 저장된 함수 사용 시 점 표기법만 가능

//합치면서 key 추가하기
me = {
  ...me1,
  ...me2,
  status: "hungry",
};
console.log(me);

//----------------------------------------------------------------------------------
//실습
const word1 = "abc";
const word2 = "xyz";
console.log(...word1, ...word2);
const word = [...word1, ...word2];
console.log(word);

//구조 분해 할당
//2-1. 배열의 구조 분해 할당

const icecream = ["민트초코", "엔쵸", "스크류바"];
/*x
const mintchoco = icecream[0];
const ancho = icecream[1];
const screwba = icecream[2];*/

const [mintchoco, ancho, screwba] = icecream;
console.log(mintchoco); //배열에서의 구조분해 할당은 변수의 순서가 매우 중요함

const colors = ["red", "orange", "yellow", "green"];
//중간에 변수에 담아 사용하지 않은 요소가 있는 경우 해당 순서를 생략하고 작성
const [red, orange, , green] = colors;
console.log();

//가장 마지막 요소를 변수에 저장하지 않을 경우 쉼표 없이 생략하면 됨
const [c1, , c3] = colors;
console.log(c1);
console.log(c3);

function addNumber(...num) {
  console.log(num);
  let sum = 0;
  for (let i = 0; i < addNumber.length; i++) {
    addNumber(1, 2, 3, 4, 5, 6);
    sum = addNumber + i;
    console.log(sum);
  }
}
