import { useState } from "react";
export default function PracState() {
  const [number, setNumber] = useState(0);
  //   return (
  //     <>
  //       <div>{number}</div>
  //       <button onClick={() => setNumber((prevNum) => prevNum + 2)}>+2</button>
  //       <button onClick={() => setNumber((prevNum) => prevNum - 1)}>-1</button>
  //     </>
  //   );

  <hr />;

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 2);
  };
  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
      <div>
        {number}
        {number > 7 ? "💕" : "🌹"}
      </div>
    </div>
  );
}
