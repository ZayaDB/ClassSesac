import { useState, useReducer } from "react";

//useReducer Hook
// -reducer: state를 업데이트 하는 열할함
// -dispatch: state를 업데이트 시켜 주기 위한 요구
// -action: 요구의 내용

const reducer = (prevState, action) => {
  console.log("dispatch 호출 시 reducer 동작함");
  console.log(prevState, action);
  //dispatch의 인자로 전달되는 값이 reducer의 action으로 들어옴

  //reducer 함수 내부에는 조건문을 많이 사용함
  //switch나 if else 등등

  switch (action.type) {
    case "deposit":
      return Number(prevState) + Number(action.payload);
    case "widthdraw":
      return Number(prevState) - Number(action.payload);
    case "widthdrawAll":
      return 0;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  //const[state,dispatch]
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>useReducer 사용</h2>
      <div>잔고{money}원</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "widthdraw", payload: number });
        }}
      >
        출금
      </button>

      <button
        onClick={() => {
          dispatch({ type: "widthdrawAll", payload: number });

          setNumber(0);
          alert("당신은 거지 되었다");
        }}
      >
        전액 출금
      </button>
    </>
  );
}
