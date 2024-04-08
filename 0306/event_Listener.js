const btn1 = document.querySelector(".btn-black");
const btn2 = document.querySelector(".btn-pink");
const btn3 = document.querySelector(".btn-red");
const btn4 = document.querySelector(".btn-green");
const container = document.querySelector(".container");

//addEventListener 사용
// btn1: 익명 함수, 함수 표현식 사용해 변수에 저장하지 않고 작성
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭했습니다!");
});

//하나의 요소의 여러 이벤트 등록 가능
//mouseover는 마우스가 해당 요소 위에 올라갔을 때 실행-> 마우스 떼도 계속 적용
//hover는 마우스가 해당 요소 위에 올라갔을 때 적용-> 마우스 떼도 원래대로 돌아감
btn1.addEventListener("mouseover", function () {
  //선택된 요소 자신을 수정하고 싶은 경우 this 키워드 사용
  this.style.backgroundColor = "red";
});

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "green";
  div.innerText = "button 2를 클릭해 추기된 div";
  container.append(div);
});

//btn3 :  함수 선언해서 이벤트 등록
btn3.addEventListener("click", changeColor);
//같은 기능을 재사용 하는 경우에 이렇게 함수를 선언하고, addEventListener에서 불러와 사용
//addEventListener에 함수를 불러올 때 괄호 작성 X
//괄호 작성 시 js를 파싱하면서 해당 코드와 만나면 바로 해당 함수를 실행시켜버림

function changeColor() {
  let divs = document.querySelectorAll(".container div");
  //만약 div 요소가 없다면 alert장 나옴
  if (divs.length !== 0) {
    for (let div of divs) {
      div.style.color = "red";
    }
    //마지막 요소만 배경색 변경
    divs[divs.length - 1].style.backgroundColor = "blue";
  } else {
    alert("버튼 2를 클릭해 div를 추가해주세요");
  }
}

//btn4 : 이벤트 적용된 자기 자신을 선택하는 this 키워드 사용
btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  this.style.backgroundColor = "orange";
  this.style.color = "skyblue";
}

//click 이외에도 다양한 이벤트들 있음

//매개변수 이벤트

//scroll 이벤트는 브라우저 전체에 대해 실행되는 동작이기 때문에
//어떤 요소가 아닌 window에 걸어줌
//console.log(window);
window.addEventListener("scroll", (event) => {
  console.log(event);

  //event.target 은 이벤트가 발생하는 요소
  //여기서는 document 자체를 의미
  console.log(event.target);
  console.log(scrollY);
  if (screenY > 700) {
    document.body.style.backgroundColor = "lightgray";
  }
});

//------------------------------------------------------------------------------

// form 이벤트

const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");

// 폼이 제출되는 이벤트
todoForm.addEventListener("submit", (event) => {
  // 브라우저 상에서 기본적으로 동작하는 이벤트 동작을 제거
  // submit 누르면 새로고침되는데, 이걸 하지 말라고 써주는 것.
  event.preventDefault();
  console.log("submit");

  const todoInput = document.querySelector("input[name=todo");
  console.log(todoInput);
  console.log(todoInput.value); // input 요소의 value를 가져옴

  // input 요소 자체의 value 수정 가능
  //   todoInput.value = '짜잔!';

  // input의 value 변수에 저장
  const todo = todoInput.value;

  //   const newTodo = document.createElement('li');
  //   newTodo.innerText = todo;
  //   newTodo.append(todo);
  //   todos.append(newTodo);

  // 입력창 초기화
  //   todoInput.value = '';

  // 만약 빈 문자열이 들어왔을 때 li로 추가하고 싶지 않다면
  if (todo !== "") {
    const newTodo = document.createElement("li");
    //   newTodo.innerText = todo;
    newTodo.append(todo);

    todos.append(newTodo);

    // 입력창 초기화
    todoInput.value = "";
  }
});

//------------------------------------------------------------------------------

// 변경 이벤트

const changeInput = document.querySelector("#change-input");
changeInput.addEventListener("input", (e) => {
  console.log("changed!");
  const div = document.querySelector(".change-input-value");
  //e: 이벤트 객체
  div.innerHTML = e.target.value;
});
