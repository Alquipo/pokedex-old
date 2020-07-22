import React from "react";

import PokemonList from "../PokemonList";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col">
        <PokemonList />
      </div>
    </div>
  );
};

export default Dashboard;
