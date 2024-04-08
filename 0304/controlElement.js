/*
1.태그 내부 content 다루기
    -innerText : 요소 안의 텍스트를 가져와, 입력된 문자열로 변경
    -innerHTML : 요소 안의 코드를 가져오거나 수정
*/
let div1 = document.getElementById("div1");
console.log(div1);
console.log(div1.innerText);
console.log(div1.innerHTML);

//해당 요소 내부의 텍스트 변경
div1.innerText = "여기는 첫번째 div 태그이면서 js에서  수정이 있었습니다";

//innerText, innerHTML: 남는 공백 문자 제거

//해당 요소 내부의 태그를 작성해도 태그 적용 안됨
div1.innerText =
  "여기는 첫번째 div 태그이면서 js에서  <strong>수정</strong>이 있었습니다";

//해당 요소 내부의 html 변경
div1.innerHTML = "여기는 첫번째 div 태그이면서 innerHTML을 사용해 수정했습니다";

//해당 요소 내부의 태그 작성하면 적용 됨
div1.innerHTML =
  "여기는 첫번째 div 태그이면서 innerHTML을  <strong>사용해</strong> 수정했습니다";

div1.innerHTML = "<ul><li>1</li><li>2</li><li>3</li></ul>";

//2. 속성 접근
//요소 속성 가져오기
//요소.setAttribute('속성명')
//요소 속성 수정
//요소.setAttribute('속성명','속성값')

let naver = document.getElementById("naver");
console.log("naver");
//a태그의 href 속성값 가져오기
console.log(naver.getAttribute("href"));

let img = document.getElementById("img1");
console.log(img1.getAttribute("src"));
console.log(img1.src); //점 접근법 1

//속성 수정
naver.setAttribute("href", "http://www.google.com");
img1.setAttribute("src", "./capuchino.jpg");
naver.href = "https://www.youtube.com/"; //점 접근법 2

//3. 스타일 변경
let flowers = document.querySelectorAll("#flower li");
for (let li of flowers) {
  //스타일 속성 지정
  //   li.style.backgroundColor = "skyblue";
  //   li.style.color = "green";

  //class 추가
  li.classList.add("changeStyle");
}

// 클래스 목록 가져오기
console.log(flowers[0]);
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
// 텍스트 삽입 가능
//부모요소.append(추가될 자식 요소)
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

//append 사용해 텍스트 삽입
const p1 = document.createElement("p");
p1.innerHTML = "0306 추기된 p 태그입니다";
container.append(p1, "이건 그냥 텍스트 넣은거예요");

//appendChild()
//선택된 요소에 자식요소로 매개변수 요소가 추가되는데, 가장 뒤에 자식요소로 추가됨
//한번에 하나의 요소만 추가할 수 있음

const p2 = document.createElement("p");
p2.innerText = "appendChild 사용해서 추가할 첫번째 p태그";
const p3 = document.createElement("p");
p3.innerText = "appendChild 사용해서 추가할 두번째 p태그";
const p4 = document.createElement("p");
p4.innerText = "appendChild 사용해서 추가할 세번째 p태그";

container.appendChild(p2);
container.appendChild(p3, p4); //p4는 추가되지 않음 메인 앞에 있는 요소만 출력
container.appendChild(p4);
container.append(p2, p3, p4); //위의 3줄과 동일한 기능

//prepend()
//선택된 요소의 자식으로 추가될 때, 가장 첫 번째 자식으로 추가됨
//append와 반대
const div2 = document.createElement("div");
div2.classList.add("prepend");
div2.innerText = "prepend로 추가한 첫번째 요소";
container.prepend(div2);

const div3 = document.createElement("div");
div3.classList.add("prepend");
div3.innerText = "prepend로 추가한 두번째 요소";
container.prepend(div3);

//before,after
//before : 선택된 요소의 앞에 추가
const h1 = document.querySelector("#h1");
const h3 = document.createElement("h3");
h3.innerText = "before로 추가한 h3";

h1.before(h3);

//after: 선택된 요소의 뒤에 추가됨
const h2 = document.createElement("h2");
h2.innerText = "after로 추가한 h2";
h1.after(h2);

/*
  요소 다루기
    -document.createElement(tag name) : 해당 태그 생성
      -요소를 만드는 것이기 때문에 browser에서는 확인 할 수 없음
    -부모.append(요소) : 해당 요소를 browse의 마지막 자식으로 추가
      -여러개의 요소 한 번에 추가 가능
      -텍스트 추가 가능 -> 부모요소의 content로 들어감
    -부모.appendChild(요소) : 해당 요소를 부모요소의 마지막 자식으로 추가
      -한 번에 하나의 요소만 추가 가능
      -텍스트 추가 불가
    -부모.prepend(요소) : 자식 요소를 부모요소의 첫번째 자식으로 추가 
    -요소.before(추가할 요소) : 선택된 요소의 앞에 추가할 요소 추가     
    -요소.after(추가할 요소) : 선택된 요소의 뒤에 추가할 요소 추가     

     append, appendChild, prepend -> 선택된 요소의 자식으로 인자로 전달한 자식을 추가
  bofore, after -> 선택된 요소의 형제로 인자로 전달한 요소를 추가

 */
//요소 삭제

const deleteDiv = document.querySelector(".container div");
deleteDiv.remove(); //선택한 요소 삭제

const rose = document.querySelector("#flower li:nth-child(2)");
rose.remove();
