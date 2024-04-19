import "../styles/basicCss.css";

export default function BasicCss() {
  /* 배경색 남색, 글자색 분홍색, 글자 두께 두껍게, 정렬 가운데 정렬 */
  const divStyle = {
    backgroundColor: "navy",
    color: "pink",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <>
      <h1>일반 CSS 사용</h1>

      {/* 배경색 분홍색, 글자색 남색, 글자 크기 25px, 정렬 오른쪽 정렬 */}
      <div
        style={{
          backgroundColor: "pink",
          color: "navy",
          fontSize: 25,
          textAlign: "right",
        }}
      >
        인라인 스타일 적용 (style에 직접 작성)
      </div>
      {/* 배경색 남색, 글자색 분홍색, 글자 두께 두껍게, 정렬 가운데 정렬 */}
      <div style={divStyle}>인라인 스타일 적용 (style에 객체 변수 전달)</div>

      <br />
      <h3>css 파일 사용해서 스타일링</h3>
      <div className="box">.box</div>

      <div className="container">
        <div className="item item1">.item.item1</div>
        <div className="item">.item</div>
      </div>
    </>
  );
}
