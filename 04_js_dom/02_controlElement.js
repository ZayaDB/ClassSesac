/*
  1. 태그 내부 content 다루기
  - innerText : 요소 안의 텍스트를 가져오거나 수정
  - innerHTML : 요소 안의 코드를 가져오거나 수정
*/
let div1 = document.getElementById("div1");
console.log(div1);
console.log(div1.innerText);
console.log(div1.innerHTML);

// 해당 요소 내부의 텍스트 변경
div1.innerText = "여기는 첫 번째 div 태그이면서 js에서 수정이 있었습니다.";

// 해당 요소 내부에 태그를 작성해도 태그 적용 안됨
div1.innerText =
  "여기는 첫 번째 div 태그이면서 js에서 <strong>수정</strong>이 있었습니다.";

// innerText, innerHTML : 남는 공백 문자 제거
div1.innerHTML =
  "       여기는 첫 번째 div 태그이면서 js에서 수정이 있었습니다.     ";

// 해당 요소 내부의 html 변경
div1.innerHTML =
  "여기는 첫 번째 div 태그이면서 innerHTML을 사용해 수정했습니다.";

// 해당 요소 내부에 태그 작성하면 적용 됨
div1.innerHTML =
  "여기는 첫 번째 div 태그이면서 <strong>innerHTML을 사용해 수정</strong>했습니다.";

div1.innerHTML = "<ul><li>1</li><li>2</li><li>2</li></ul>";

// ===================================================================
// 2. 속성 접근
// 요소 속성 가져오기
// 요소.getAttrbute('속성명')
// 요소 속성 수정
// 요소.setAttrbute('속성명', '속성값')

let naver = document.getElementById("naver");
console.log(naver);

// a태그의 href 속성값 가져오기
console.log(naver.getAttribute("href"));

let imgEl = document.getElementById("beach");

console.log(imgEl.getAttribute("src"));
console.log(imgEl.src); // 점 접근법

// 속성 수정
naver.setAttribute("href", "https://www.google.co.kr/");
imgEl.setAttribute("src", "./img/beach2.jpg");

naver.href = "https://github.com/"; // 점 접근법

// ===================================================================
// 3. 스타일 변경
let flowers = document.querySelectorAll("#flower li");
for (let li of flowers) {
  // style 속성 지정
  // li.style.backgroundColor = 'skyblue';
  // li.style.color = 'green';

  // 클래스 추가
  li.classList.add("changeStyle");
}

// 클래스 목록 가져오기
console.log(flowers[0].classList);
// 클래스 지우기
flowers[0].classList.remove("changeStyle");
// 클래스 가지고 있는지 여부 확인 -> t/f -> 조건문에서 사용
console.log(flowers[0].classList.contains("changeStyle"));
// 클래스 토글하기 -> 해당 클래스가 있으면 제거, 없으면 추가
flowers[0].classList.toggle("changeStyle");
flowers[1].classList.toggle("changeStyle");

// ===================================================================
// 4. 부모 자식 노드
const parentEl = document.querySelector("#flower"); // ul
const childEl = document.querySelector("#flower .pink"); // ul > li.pink

// 자식 노드 접근하기
console.log(parentEl.children); // ul의 자식 li들 유사배열로 불러옴
console.log(parentEl.children[2]);
// 자식 요소에 접근하려면 배열 접근 방식을 따름
// 자식이 하나여도 동일

// 부모 노드 접근
// 요소 자체에 접근
console.log(childEl.parentNode); // childEl의 부모를 선택

// 형제 노드 접근
// 위 노드 접근
console.log(childEl.previousElementSibling); // 앞 형제 요소가 없기 때문에 null
console.log(childEl.parentNode.children[2].previousElementSibling);
// 아래 노드 접근
console.log(childEl.nextElementSibling);

// ===================================================================
// 요소 생성, 추가, 삭제
const container = document.querySelector(".container");
// 요소 생성
const pEl = document.createElement("p");
pEl.innerHTML = "새로 만들어진 p태그";
pEl.style.fontSize = "30px";
pEl.id = "append-p";

console.log(pEl);

// pEl 요소 html에 삽입
// append: 선택된 요소의 자식 요소로 매개변수 요소가 삽입됨
// 마지막 자식 요소로 추가됨
// 여러 자식 요소 한 번에 삽입 가능
container.append(pEl);

const pEl2 = document.createElement("p");
pEl2.innerHTML = "새로 만들어진 두 번째 p태그";
container.append(pEl2);

// createElement를 사용해 만든 요소는 여러번 삽입해도 한 번만 들어감
container.append(pEl, pEl2, pEl2, pEl2);

// div 3개 "안녕"
for (let i = 0; i < 3; i++) {
  // for문 안에서 반복되는 동일한 이름의 변수 생성 가능
  // 왜냐하면 해당 스코프를 돌 때마다 새로운 newDiv 변수가 생성되는 것이고
  // 해당 newDiv 변수는 스코프를 돌면 사라짐
  const newDiv = document.createElement("div"); // 지역 변수
  newDiv.innerHTML = "안녕";
  container.append(newDiv);
}
