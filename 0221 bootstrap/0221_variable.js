console.log("connected!");

// 변수 선언하고 사용하기
/* 
var keyword
1.변수 선언 -> 값 할당
2.변수 선언과 값 할당을 동시에
*/

//변수 선언
var varName; //Undefinde
//변수 할당
varName = "zaya";
//변수 선언과 값 할당을 동시에
var varName2 = "zaya2";
//변수 재할당
varName = "Yuki"; //varName 변수의 값이 변경

console.log(varName);

//var의 이상한 점
// 변수를 동일한 이름으로 재선언 할 수 있음
//변수를 선언하기 전 값을 할당할 수 있음
//장점같아 보일 수 있으나 유지보수할 때 최악임
aa = 123;
console.log(aa);

//let keyword
/*1.변수 선언 -> 값 할당
2.변수 선언과 값 할당을 동시에*/
//변수 선언
let letName;
//값 할당
let letName = "홍길동";

//변수 선언과 값 할당을 동시에
let letName2 = "심청이";
console.log(letName2); //심청이 출력
let letName2 = "심봉사";
console.log(letName2);
