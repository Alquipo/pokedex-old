import React, { useState, useEffect } from "react";
import api from "../../services/api";
import PokemonCard from "../PokemonCard";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await api.get(`/pokemon`);

      console.log(response.data.results);
      setPokemons(response.data.results);
      setIsLoading(false);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="row">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default PokemonList;
