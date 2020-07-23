import React from "react";

import "./styles.css";

import NavBar from "../../components/NavBar";
import Dashboard from "../../components/Dashboard";

function Pokedex() {
  return (
    <div className="pokedex-container">
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default Pokedex;
