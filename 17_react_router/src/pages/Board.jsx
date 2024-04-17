import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
export default function Board() {
  const navigation = useNavigate();

  return (
    <>
      <Header />
      <div
        onClick={() => {
          //navigation에 인자로 슬래시 없이 어떤 값을 보내면
          navigation("1");
        }}
      >
        1번 게시글 보러 가기
      </div>
      <h1>여기는 Board page component</h1>;
    </>
  );
}
