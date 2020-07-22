import React from "react";

import PokemonCard from "../PokemonCard";

const PokemonList = () => {
  return (
    <div className="row">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
};

export default PokemonList;
