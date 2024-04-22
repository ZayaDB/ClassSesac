import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import {
  increament,
  decreament,
  increase,
  decrease,
  reset,
} from "../store/modules/countSlice";
export default function UseToolKit() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <>
      <h2>redux toolkit의 createSlice 사용하기</h2>
      <div>{count}</div>
      <input type="slide" ref={inputRef} />
      <button
        onClick={() => dispatch(increase(Number(inputRef.current.value)))}
      >
        입력값더하기
      </button>
      <button
        onClick={() => dispatch(decrease(Number(inputRef.current.value)))}
      >
        입력값빼기
      </button>
      <button onClick={() => dispatch(increament())}>+1</button>
      <button onClick={() => dispatch(decreament())}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}
