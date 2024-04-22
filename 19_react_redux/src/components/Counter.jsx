import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  //store에서 관리되는 state를 가져오는 Hook
  const number = useSelector((state) => state);
  console.log(number);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux를 사용해 store에서 관리되는 state 가져오기 , 사용하기</h2>
      <div>전역 관리되는 state 값:{number}</div>
      <br />
      <div> 전역 관리되는 state가 변경하기</div>
      <br />
      <button onClick={() => dispatch({ type: "increament" })}>+ 1</button>
      <button onClick={() => dispatch({ type: "decreament" })}>- 1</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
