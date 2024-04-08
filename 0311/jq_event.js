// $(".container").click((event) => {
//   console.log("event", event); //event 객체
//   console.log("event.target", event.target); //event 가 발생한 요소 (자기 자신)
//click 했을 때 배경색 변경
//$(event.target).css("background-color", "skyblue");
// });
// mouseover-> 해당 요소에 마우스가 올라갔을 때 실행

// $(".container").mouseover(() => {
//   console.log("마우스 올라감");
// });

// //mouseout- -> 해당 요소에 마우스가 나가갔을 때 실행
// $(".container").mouseout(() => {
//   console.log("마우스 나감");
// });

//hover 이벤트 -> css에서 더 많이 작성
// mouseover,mouseout를 한번에 지정
//첫번째 인자인 콜백함수 mouseover일 때 실행할 코드 작성
//두번째 인자인 콜백함수 mouseout일 때 실행할 코드 작성
// $(".container").hover(
//   () => {
//     console.log("hover 이벤트에서 마우스 올라감");
//   },
//   () => {
//     console.log("hover 이벤트에서 마우스 나감");
//   }
// );

// //scroll 이벤트
// $(".container").scroll(() => {
//   console.log("scroll");
// });

//키보드 이벤트
//keydown event: 선택한 요소에서 키보드를 누르는 이벤트가 발생할 경우
//키보드를 누르고 있는 동안에도 계속 이벤트 발생
//실시간 입력을 처리하거나 특수 키 (ex.화살표 키,enter 키 등)을 감지하는데 사용
//keyup event:  선택한 요소에서 키보드를 떼는 이벤트가 발생할 경우
//키보드를 누르고 있는 동안에도 계속 이벤트 발생하지 않음
//사용자가 입력을 완료하거나 특정 키를 놀렀다가 뗄 때 필요한 동작 처리하는 데 사용

//keydown
// $("input[name=pw]").keydown((e) => {
//   console.log("event", e);
//   console.log("event", e.key);
//   if (e.key === "Enter") {
//     console.log("Enter 입력 했습니다");
//     console.log(e.target.value);
//   }
// });

//keyup 이벤트
//on(): 이벤트를 걸겠다.addEventListener와 비슷
$("input[name=pw]").on("keyup", (e) => {
  console.log("e.key", e.key);
  if (e.key === "Enter") {
    console.log(e.target.value);
  }
});
