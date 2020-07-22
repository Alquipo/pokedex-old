import React, { useState, useEffect } from "react";

import { Sprite } from "./styles";

const PokemonCard = ({ pokemon }) => {
  const [imagePokemon, setImagePokemon] = useState("");
  const [pokemonIndex, setPokemonIndex] = useState("");

  useEffect(() => {
    const pokeIndex = pokemon.url.split("/")[pokemon.url.split("/").length - 2];

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;

    setImagePokemon(imgUrl);
    setPokemonIndex(pokeIndex);
  }, [pokemon.url]);

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div className="card">
        <h5 className="card-header">{pokemonIndex}</h5>
        <Sprite
          className="card-img-top rounded mx-auto mt-2"
          src={imagePokemon}
        ></Sprite>
        <div className="card-body mx-auto">
          <h6 className="card-title ">
            {pokemon.name
              .toLowerCase()
              .split(" ")
              .map(
                (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
