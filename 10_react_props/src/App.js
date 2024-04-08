import FuncProps from "./components/FuncProps";
import ClassProps from "./components/ClassProps";
import PracProps from "./components/PracProps";
import "./App.css";

function App() {
  const sayHi = () => {
    alert("안녕?");
  };

  return (
    <div className="App">
      {/* <FuncProps weather='sunny' feeling='happy' /> */}

      {/* defaultProps 사용 */}
      {/* <FuncProps feeling={true} /> */}

      {/* PropTypes 사용 */}
      {/* props로 전달하는 값이 문자열인 경우에는 ''(따옴표)로 감싸 전달 */}
      {/* 이외의 데이터 타입은 {}(중괄호)로 감싸 전달 */}
      {/* <FuncProps weather='sunny' feeling='exciting' /> */}

      {/* props.children */}
      {/* 문자열 전달 */}
      {/* <FuncProps>안녕?</FuncProps> */}

      {/* 함수 전달 */}
      {/* <FuncProps>{sayHi}</FuncProps> */}

      {/* 요소 전달 */}
      {/* <FuncProps>
        <div>안녕안녕</div>
        <div>자니?</div>
      </FuncProps> */}

      {/* <ClassProps drink="americano" payment="card" price={4000}></ClassProps>
      <ClassProps drink="latte" payment="cash"></ClassProps> */}
      <PracProps></PracProps>
    </div>
  );
}

export default App;
