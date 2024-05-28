import React from "react";
import "./App.css";
import HeaderAndFooter from "./HeaderAndFooter";
import DataOne from "./DataOne";
import DataTwo from "./DataTwo";
import DataThree from "./DataThree";

function App() {
  return (
    <>
      <HeaderAndFooter>
        <div>
          <DataOne />
        </div>
        <div className="page-break">
          <DataTwo />
        </div>
        <div className="page-break">
          <DataThree />
        </div>
      </HeaderAndFooter>
    </>
  );
}

export default App;
