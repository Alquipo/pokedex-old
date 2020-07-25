import React from "react";

import "./styles.css";

import NavBar from "../../components/NavBar";
import PokemonComponent from "../../components/Pokemon";

function Pokemon() {
  return (
    <div className="pokedex-container">
      <NavBar />
      <div id="container">
        <PokemonComponent />
      </div>
    </div>
  );
}

export default Pokemon;
