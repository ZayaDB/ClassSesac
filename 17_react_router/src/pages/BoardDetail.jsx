import { useNavigate } from "react-router-dom";
export default function BoardDetail() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate("/board");
        }}
      >
        게시글
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </button>
      <h1>여기는 Board Detail page component</h1>
    </>
  );
}
