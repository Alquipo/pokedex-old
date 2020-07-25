import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#f1f1f1" }}>
        <Route path="/" exact component={Home} />
        <Route path="/pokedex" exact component={Pokedex} />
        <Route path="/pokemon/:pokemonIndex" exact component={Pokemon} />
      </div>
    </BrowserRouter>
  );
}

export default App;
