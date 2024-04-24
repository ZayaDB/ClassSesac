import { count } from "console";
import { useState } from "react";
import { dataTypes } from "../types/todoData";
//types directory 이동해 다른 파일에서도 사용할 수 있게 만듬
// interface dataTypes {
//   id: number;
//   todo: string;
//   done: boolean;
// }

export default function UseState() {
  //count state를 만들기 기본값 0
  const [count, setCount] = useState(0);
  // +1,-1 버튼과 로직 만들기

  //복잡한 데이터를 저장하는 state 사용 시
  const [data, setData] = useState<dataTypes[]>();
  setData([
    {
      id: 1,
      todo: "할 수 있다 외치기",
      done: false,
    },
    {
      id: 2,
      todo: "할 수 있다 ",
      done: false,
    },
    {
      id: 3,
      todo: "할 수 ",
      done: false,
    },
  ]);
  return (
    <>
      <h2>ts react에서 UseState 사용</h2>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
}
