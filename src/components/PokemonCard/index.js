import React, { useState, useEffect } from "react";
import { getPokemonImageUrl } from "../../services/api";
import axios from "axios";

import { Pokeball } from "../Spinner";

import {
  Card,
  StyledLink,
  CardName,
  CardImg,
  CardDetails,
  CardId,
} from "./styles";

const PokemonCard = ({ pokemon }) => {
  const [imagePokemon, setImagePokemon] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadIdPokemon = async () => {
      await axios.get(pokemon.url).then((response) => {
        setPokemonId(response.data.id);
        setPokemonType(response.data.types);
      });
    };

    loadIdPokemon();

    setImagePokemon(getPokemonImageUrl(pokemonId));

    setIsLoading(false);
  }, [pokemon.url, pokemonId]);

  const nameCapitalized = pokemon.name
    .toLowerCase()
    .split("-")
    .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
    .join(" ");

  const pokemonTypeMap = pokemonType
    .map((poke) =>
      poke.type.name
        .toLowerCase()
        .split(" ")
        .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
    )
    .join(" / ");

  console.log(pokemonTypeMap);

  if (isLoading) {
    return <Pokeball />;
  } else if (pokemonId > 807) {
    return <div></div>;
  } else {
    return (
      <StyledLink to={`pokemon/${pokemonId}`}>
        <Card className="card">
          <CardId># {pokemonId}</CardId>
          <CardImg src={imagePokemon} alt={nameCapitalized} />
          <CardName>{nameCapitalized}</CardName>

          <CardDetails>{pokemonTypeMap}</CardDetails>
        </Card>
      </StyledLink>
    );
  }
};

export default PokemonCard;
