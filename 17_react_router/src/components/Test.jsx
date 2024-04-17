import { Link } from "react-router-dom";
export default function Test() {
  return (
    <>
      <a href="/">a 테그 사용한 페이지 전환</a>
      <br />
      <Link to="/" />
      테그 사용한 페이지 전환
      <h1>여기는 테스트 페이지</h1>
    </>
  );
}
