import React from "react";

import "./styles.css";

import NavBarDetail from "../../components/NavBarDetail";
import PokemonComponent from "../../components/Pokemon";

function Pokemon() {
  return (
    <div className="header-container">
      <NavBarDetail />
      <div id="container-fluid">
        <PokemonComponent />
      </div>
    </div>
  );
}

export default Pokemon;
