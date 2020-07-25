import React, { useState, useEffect } from "react";
import { getPokemonImageUrl } from "../../services/api";
import axios from "axios";

import Spinner from "../Spinner";

import { Sprite, Card, StyledLink } from "./styles";

const PokemonCard = ({ pokemon }) => {
  const [imagePokemon, setImagePokemon] = useState("");
  const [pokemonId, setPokemonId] = useState("");

  useEffect(() => {
    const loadIdPokemon = async () => {
      await axios.get(pokemon.url).then((response) => {
        setPokemonId(response.data.id);
      });
    };

    loadIdPokemon();

    setImagePokemon(getPokemonImageUrl(pokemonId));
  }, [pokemon.url, pokemonId]);

  if (pokemonId > 807) {
    return <div></div>;
  } else {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${pokemonId}`}>
          <Card className="card">
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              src={imagePokemon}
            ></Sprite>

            <div className="card-body mx-auto">
              <h6 className="card-title ">
                <strong> #{pokemonId} </strong>
                {pokemon.name
                  .toLowerCase()
                  .split(" ")
                  .map(
                    (letter) =>
                      letter.charAt(0).toUpperCase() + letter.substring(1)
                  )
                  .join(" ")}
              </h6>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
};

export default PokemonCard;
