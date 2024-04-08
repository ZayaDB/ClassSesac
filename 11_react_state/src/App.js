import FuncState from "./components/FuncState";
import PracState from "./components/PracState";
import CharactorInfo from "./components/CharactorInfo";
import CharactorContainer from "./components/CharactorContainer";
function App() {
  return (
    <div className="App">
      {/* <FuncState></FuncState>
      <PracState></PracState> */}
      <CharactorInfo />
      <CharactorContainer />
    </div>
  );
}

export default App;
