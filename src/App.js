import React from "react";
import './App.css'
import Exprince from "./Component/Exprience/Exprince";
import Intro from "./Component/intro/Intro";
import Navber from "./Component/Navber/Navber";
import Services from "./Component/Services/Services";
import Work from "./Component/Works/Work";

function App() {
  return (
    <div className="App">
        <Navber />
        <Intro />
        <Services />
        <Exprince />
        <Work />
    </div>
  );
}

export default App;
