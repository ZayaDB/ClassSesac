import useToggle from "../hooks/useToggle";
export default function CustomHook() {
  const [isShow, setIsShow] = useToggle();
  return (
    <>
      <h1>custom hook using</h1>
      <button onClick={setIsShow}>useToggle hook using</button>
      {isShow && <div>안녕!</div>}
    </>
  );
}
