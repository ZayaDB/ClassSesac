import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">홈으로</Link>
          <br />
          <Link to="/board">게시판</Link>
          <br />
          <Link to="/profile">프로필</Link>
        </nav>
      </header>
    </>
  );
}
