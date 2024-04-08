import { Component } from "react";

export default class ClassState extends Component {
  //처음 클래스형 컴포넌트가 나왔을 때 state를 사용하는 방법
  //   constructor(props) {
  //     super(props); //Component class에서 props를 상속
  //     this.state = {
  //       banana: "바나나",
  //     };
  //   }
  //현재 클래스형 컴포넌트에서 state를 사용하는 방법\
  //constructor 생성자 함수를 작성하는 대신 state만 바로 작성
  //constructor 생성자 함수를 작성하지 않으면 자동으로 아래 코드 실행됨
  //   constructor(props) {
  //     super(props);
  //   }
  state = {
    banana: "바나나", // banana라는 state를 선언 해당 state의 값으로 '바나나'를 저장
  };

  render() {
    const banana = this.state.banana;
    return (
      <>
        <h2>클래스형 컴포넌트에서 state 사용하기</h2>
        <button onClick={() => this.setState({ banana: "banana" })}>
          영어로 변경
        </button>
        <div>{banana}</div>
      </>
    );
  }
}
