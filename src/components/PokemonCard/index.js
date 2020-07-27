import React, { useState, useEffect } from "react";
import { getPokemonImageUrl } from "../../services/api";
import axios from "axios";

import { PokeballMini } from "../Spinner";

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
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const loadIdPokemon = async () => {
      await axios.get(pokemon.url).then((response) => {
        setPokemonId(response.data.id);
        setPokemonTypes(response.data.types);
      });

      await setImagePokemon(getPokemonImageUrl(pokemonId));
    };

    loadIdPokemon();

    setIsLoading(false);
  }, [pokemon.url, pokemonId]);

  const nameCapitalized = pokemon.name.split("-")[0];

  const pokemonType = pokemonTypes.map(
    (type) => type.type.name[0].toUpperCase() + type.type.name.slice(1)
  );

  if (isLoading) {
    return <PokeballMini />;
  } else if (pokemonId > 807) {
    return <div></div>;
  } else {
    return (
      <StyledLink to={`pokemon/${pokemonId}`}>
        <Card className={pokemonType[0]}>
          <CardId className={pokemonType[0]}># {pokemonId}</CardId>

          {imageLoading ? <PokeballMini /> : null}
          <CardImg
            loading="lazy"
            onLoad={() => {
              setImageLoading(false);
            }}
            src={imagePokemon}
            alt={nameCapitalized}
            style={imageLoading ? null : { display: "block" }}
          />
          <CardName>{nameCapitalized}</CardName>
          <CardDetails>{pokemonType.join(" / ")}</CardDetails>
        </Card>
      </StyledLink>
    );
  }
};

export default PokemonCard;
