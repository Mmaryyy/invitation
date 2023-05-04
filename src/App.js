import React from "react";
import "./styles/variable.css";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div>글씨체가 적용되고 있나요</div>
    </div>
  );
}

export default App;
