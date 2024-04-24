import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const localVal = useRef<string>("rerendering");
  return (
    <>
      <h2>aa</h2>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>input에 focus</button>
      <div>localVal:{localVal.current}</div>
    </>
  );
}
