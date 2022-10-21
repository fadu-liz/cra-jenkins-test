import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <h2>Jenkins Test</h2>
        <div className="link">
          <a href="http://10.16.11.93/">개발 서버로 이동</a>
        </div>
        <div className="link">
          <a href="http://10.17.26.8:1234/">원격 서버로 이동</a>
        </div>
      </div>
    </div>
  );
}

export default App;
