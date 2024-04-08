// function FunctionComponent() {
//   return <h1>함수형 컴포넌트</h1>;
// }
// export default FunctionComponent;

//--------------------------------------------------
import React from "react";
import ig from "../assets/ig.png";
export default function FunctionComponent() {
  const text = "hi React";
  const name = "zaya";
  const show = true;
  const handleClick = () => {
    alert("클릭했다!!");
  };
  const textStyle = { backgroundColor: "beige", color: "red" }; //객체
  const checkUser = () => {
    if (name === "zaya") {
      return "Wasssssup?";
    } else if (name === "lily") {
      return "dfds";
    } else {
      return "나가주세요";
    }
  };
  return (
    <>
      {/* {
        1. 하나의 최상위 부모 요소로 감싸서 return
            -virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으로 비교할 수 있도록 컴포넌트 내부에는
            하나의 DOM 트리 구조로 이루어져야 한다고 React가 정함
            -div ,section, article, header, footer 등 
            최상위 부요 요소는 어떤 요소이든 상관 없음
            -불필요한 태그를 만들지 않기 위해 <></>와 같은 태그를 감싸는 경우도 많음
            (Fragment 단축 문법)-> React에서 제공해 주는 것
            
    } */}
      <div>함수형 컴포넌트 1</div>
      <div>함수형 컴포넌트 2</div>
      {/* {
        JS 문법 사용 
      } */}
      <div>인사는 {text}</div>
      {/* {
        JS 문법 사용 (삼황 연산자를 사용한 조건부 렌더링 ver.간단)
      } */}
      <h3>{name === "zaya" ? `hi ${name}` : "누누.....세ㅔㅔ요?..."}</h3>

      {/* {
        JS 문법 사용 (위에서 함수를 만들어 사용)
      } */}
      <h3>{checkUser()}</h3>
      {/* {
        JS 문법 사용 (저건부 렌더링 &&)
      } */}
      <h3>{show && "엄청 오래만이시네요"}</h3>
      {/* {
        JS 문법 사용 (inline style=> style 속성으로 객체 전달)
      } */}
      <div style={{ backgroundColor: "red", color: "beige" }}>wow</div>
      <div style={textStyle}>omg</div>
      {/* {
        class and on click
      } */}
      <div className="text-css">JSX에서 css 사용하기(className)</div>

      <button onClick={handleClick}>버튼2(위 함수)</button>
      <img src="/logo192.png" />
      <img src={ig}></img>
    </>
  );
}
