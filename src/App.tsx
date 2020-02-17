import React from "react";
import "./App.css";
import Menu from "./Menu";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
      </Router>
    </div>
  );
};

export default App;
