import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/pokedex" exact component={Pokedex} />
      </div>
    </BrowserRouter>
  );
}

export default App;
