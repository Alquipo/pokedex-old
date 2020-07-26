import React from "react";

import "./styles.css";

import NavBar from "../../components/NavBar";
import PokemonList from "../../components/PokemonList";

function Pokedex() {
  return (
    <div className="pokedex-container">
      <NavBar />
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default Pokedex;
