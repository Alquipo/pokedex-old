import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
