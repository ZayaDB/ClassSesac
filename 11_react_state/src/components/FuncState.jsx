// export default function FuncState() {
//   let apple = "사과";
//   const inEng = () => {
//     const content = document.querySelector(".state ");
//     content.innerText = "apple";
//     apple = "apple";
//     //.state 요소를 찾아 해당 요소의 content를 apple 바꾸기
//     console.log(apple); //apple이 콘솔창에 찍히도록 함수 작성
//   };

//import { useState } from "react";

//   return (
//     <>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>이 컴포넌트는 vanilla JS로 작성</div>
//       <button onClick={() => inEng()}>영어로 바뀌기</button>
//       <div className="state">{apple}</div>
//     </>
//   );
// }

// //-------------------------------------------------------------
// import { useState } from "react";
// export default function FuncState() {
//   //const[state 변수명,state를 변경시키는 setter 함수]=useState(state의 초기값)
//   //useState를 사용해 state 선언 시 state와 state를 변경시키는 setter 함수를 배열로 반환
//   //해당 state와 setter 함수를 구조 분해 할당 하여 변수에 저장하고 바로 사용
//   const [apple, setApple] = useState("사과");
//   const [number, setNumber] = useState(0);
//   return (
//     <>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>
//       <div>이 컴포넌트는 useState 사용 </div>
//       <button onClick={() => setApple("apple")}>영어로 바뀌기</button>
//       <div>{apple}</div>

//       <hr />

//       <h2>number state를 1씩 증가시키는 버튼 만들기</h2>
//       <div>{number}</div>
//       <button onClick={() => setNumber((prevNum) => prevNum + 1)}>+1</button>
//     </>
//   );
// }

//버튼 클릭 시 apple -> 사과 -> apple->사과

// import { useState } from "react";

// export default function FuncState() {
//   const [apple, setApple] = useState("사과");
//   const [button, setBtn] = useState("한글로 변경");

//   return (
//     <div>
//       <h2>함수형 컴포넌트에서 state 사용하기</h2>

//       <button
//         onClick={() => {
//           if (apple === "apple") {
//             setApple("사과");
//             setBtn("영어로변경");
//           } else {
//             setApple("apple");
//             setBtn("한글로변경");
//           }
//         }}
//       >
//         {button}
//       </button>
//       <div>{apple}</div>
//     </div>
//   );
// }

import { useState } from "react";

export default function FuncState() {
  const [showEnglish, setShowEnglish] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowEnglish(!showEnglish);
        }}
      >
        {showEnglish ? "한글" : "영어"}로 변경
      </button>
      <div>{showEnglish ? "apple" : "사과"}</div>
    </div>
  );
}

<hr />;
