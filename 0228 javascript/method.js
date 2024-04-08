//문자열에서 사용 가능한 속성과 메서드
//length,toUpperCase(),toLowerCase,trim(),split(),indexof(),replace(),replaceAll(),slice(),repeat
//지금까지 우리가 직점 함수를 만들어 사용
let str = "Strawberry Moon";
let src2 = "    strawberry moon";
console.log(str[1]);
console.log(str[0]);
console.log(str[0] + str[3]);
console.log(str[0] + str[3]);
console.log(str[0] + str[3]);

let msg = "Happy birthday";
let userId = "    user123";

//charAt(n): 인자로 받은 숫자 n 인덱스 번호에 대한 문자열 하나 반환

let fruit = "applemango";

console.log(fruit.indexOf("apple")); //0
console.log(fruit.indexOf("mango")); //5
console.log(fruit.indexOf("e")); //4
console.log(fruit.indexOf("z")); //-1

console.log(fruit.charAt("8")); // g
console.log(fruit.charAt("5")); // m
console.log(fruit[5]); // m
console.log(fruit.slice(5)); //mango
console.log(fruit.slice(3, 6)); //lem
console.log(fruit.slice(-1)); //o
console.log(fruit.slice(-3)); //ngo
console.log("fruit의 값에 대한 변화가 있는지 학인", fruit);

let msg2 = "Wow! it's so amazing !!!";
console.log(msg2.replace("Wow", "OMG"));
console.log(msg2.replaceAll("Wow", "OMG"));
console.log("msg2의 값에 변화가 있는지 확인", msg2);

//2024.2.28->2024-02-28로 바뀌기
let date = "2024.02.28";
console.log(date.replaceAll(".", "-"));
console.log("2024.02.28".replaceAll(".", "-"));

console.log("HelloWorld".repeat(5));
console.log(date.split(".")); //인자로 받은 문자열을 기준으로 나누어 배열로 반환
console.log(date.split("")); //모든 글자를 하나씩 나누어 배열로 반환

let splitedDate = date.split(".");
console.log(typeof splitedDate);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "panda", "dog", "capybara"];

arr1[5] = 6;
console.log(arr1);

arr1[7] = 8; //중간에 빈 값(empty)생길 수 있음
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];

arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr2.unshift("bear");
console.log(arr2);

arr2.shift();
console.log(arr2);

//includes

console.log(arr2.includes("quakka"));

//indexof():문자열과 마찬가지로 해당 요소의 인덱스를 반환
console.log(arr2.indexOf("capybara"));

//length-> 속성이므로 괄호 작성
console.log(arr2.length); //4

//reverse(): 배열의 순서로 뒤집음
arr2.reverse();
console.log(arr2);

//join(): 배열을 인자의 문자열 기준으로 합쳐 문자열로 변환
//원래 배열을 변경시키지 않음
console.log(arr2);
console.log(arr2.join()); //인자 작성하지 않으면 배열 안의 컴마까지 문자열로 변환
console.log(typeof arr2.join());
console.log(arr2.join("")); //빈 문자열 작성 시 모든 요소가  붙어서 문자열로 변환
console.log(arr2.join("그리고"));
console.log(arr2);

//배열에서의 반복문
//for
let arr3 = [1, 2, 3, 4, 5];
let alphabets = ["a", "b", "c", "d", "e", "f"];
console.log("for를 사용한 배열에서의 반복");
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

//for of
//여기서 number은 for of 문에서 내가 지어준 변수명
//무엇을 의미하는지 알 수 있도록 작성
//index 번호로 순환하는 것이 아니라 배열 요소에 직접 접근
console.log("for of를 사용한 배열에서의 반복");
for (let number of arr3) {
  console.log(number);
}

for (let alpha of alphabets) {
  console.log(alpha);
}

//foreach
//매개변수 3개를 받는 배열의 반복을 위한 메서드 (=함수)
//매개변수 이름은 마음대로 지어도 상관 없지만 순서에 따른 의미는 항상 동일-> 순서 중요
/*
arr.forEach(function(요소를 지치ㅣㅇ할 별명[, 인덱스를 지칭 할 별명[, arr를 지칭할 별명]])*/

console.log("for Each를 사용한 배열에서의 반복");
arr3.forEach(function (num, idx) {
  console.log("num:", num);
  console.log("idx:", idx);
});

//++---------------------------------------------------------------------------------------\
/*
    filter
    조건을 만족하는 요소들을 '배열로 ' 반환
    arr2의 오소 중 길이기 52ㅏ 이상인 요소만 모아 새로운 배열 만들기

*/
let newArr2 = arr2.filter(function (animal) {
  return animal / length >= 3;
});
console.log(newArr2);
console.log(arr2); // 원래 배열에 영향을 주지 않음

const words = ["미어캣", "라이거", "유니콘", "드래건", "고질라"];
const newWords = words.filter(function (ani) {
  return ani.charAt(0) === "라" || ani.charAt(0) === "유";
});

console.log(newWords);

//find(): 배열에서 특정 조건을 만족하는 첫 번째 요소 반환

//filter 와 비슷하게 조건 작성하지만 배열을 반환하는 것이 아닌 조건을 처음 만족하는 "값"

let findResult = words.find(function (ani) {
  return ani.charAt(0) === "드";
});
console.log(findResult);

//map():배열 내의 모든 원소에 대해 호촐한 함수의 결과를 모아 새로운 배열 반환
//arr.map(function (value[,index[,arr]]){})
//배열의 모든 원소를 for 문으로 돌려서 바꿀 수 있지만 더 간단히 메소드를 사용해 변경 가능
let nums = [1, 2, 3, 4, 5];
let mapArr = nums.map(function (n) {
  return n * 100;
});
console.log(mapArr);

// 배열에서의 반복 실습
let numArr = [];
for (let i = 0; i < 100; i++) {
  numArr.push(i + 1);
}
//합 구하기

let sum1 = 0;
for (let i = 0; i < numArr.length; i++) {
  sum1 = sum1 + numArr[i];
}
console.log(sum1);

//2. for of문

let sum2 = 0;
//numArr 배열에 있는 모든 요소를 num이라고 지칭하면서 반복한다
for (let num of numArr) {
  sum2 = sum2 + num;
  //sum2 += num;
}
console.log(sum2);

//3.forEach문

let sum3 = 0;
numArr.forEach(function (num) {
  sum3 = sum3 + num;
});
console.log(sum3);
