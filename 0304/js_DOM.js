/*
요소 선택
    -   query selector('css 선택자')
    -   query selectorAll('css 선택자')
    -   getElementById('id값')
    -   getElementsByClassName('class값')
    -   getElementsByTagName('태그명')

*/

//document 객체
console.log(document); //html 문서 전체
console.log(document.documentElement); //html 문서 전체의 모든 element(요소)들을 가지고 있을 수 있음
console.log(document.head); //head 태그 내부에 있는 문서 element들
console.log(document.body); //body 태그 내부에 있는 문서 element들
console.log(document.URL);
console.log(document.domain);

//1.getElementById

console.log("getElementById");
console.log(document.getElementById("green"));
console.log(document.getElementById("gold"));

//2.getElements
console.log("getElementsByClassName");
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));
// 3.getElementsByTagName
console.log("getElementsByTagName");
console.log(document.getElementsByTagName("div"));

//4.querySelector
//css에서 사용했던 선택자 이용해 요소 선택
//해당 css 선택자 중에서 일치하는 첫 번째 요소만 선택됨->하나만 선택
console.log("querySelector");
console.log(document.querySelector("#green"));
console.log(document.querySelector(".pink"));
console.log(document.querySelector("div.pink"));
console.log(document.querySelector("body pink"));
console.log(document.querySelector("div.pink")[2]);

//5.querySelectorAll
//해당 css 선택자 중에서 일치하는 모든 요소 선택됨
console.log("querySelectorAll");
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("div.pink"));
console.log(document.querySelectorAll(".others"));

//Nodelist와 HTMLCollection
//getElementBy~~ -> HTMLCollection -> js애서 노드를 생성하거나 삭제하는 변경 감지
//querySelectorAll -> Nodelist -> 변경 감지 못함
//HtmlCollection,Nodelist-> 유사 배열

//유사 배열
//length 속성을 가짐
//[i]로 점근 가능->index으로 접근 가능
//표준 객체 메서드 사용 불가(map)
//하지만 forEach는 사용 가능
//for of 문으로 pink 클래스 모두 출력하기
console.log("for of 문으로 pink 클래스 모두 출력하기");
let pinks = document.querySelectorAll(".pink"); //pink class를 가진 모든 요소 배열로 지정
for (let el of pinks) {
  console.log(el);
}
