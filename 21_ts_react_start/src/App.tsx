import React from "react";
import PropsTypes from "./components/PropsTypes";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";

function App() {
  return (
    <div className="App">
      <PropsTypes name="zaya" />
      <UseState />
      <UseRef />
    </div>
  );
}

export default App;
