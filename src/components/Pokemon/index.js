import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import api from "../../services/api";

const Pokemon = () => {
  const [pokemon, setPokemom] = useState({});
  const [pokemonSpecies, setPokemonSpecies] = useState();

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`pokemon/${params.pokemonIndex}`).then((response) => {
      const {
        name,
        types,
        id,
        weight,
        height,
        sprites,
        stats,
        abilities,
      } = response.data;
      setPokemom({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        types: types.map(
          (typeInfo) =>
            typeInfo.type.name[0].toUpperCase() + typeInfo.type.name.slice(1)
        ),
        abilities: abilities.map(
          (abilitiesInfo) =>
            abilitiesInfo.ability.name[0].toUpperCase() +
            abilitiesInfo.ability.name.slice(1)
        ),
        id: id,
        weight: weight / 10,
        height: height / 10,
        // imageUrl: getPokemonImageUrl(id),
        spriteImageUrl: sprites.front_default,
        shinySpriteImageUrl: sprites.front_shiny,
        baseStats: [
          stats[0].base_stat,
          stats[1].base_stat,
          stats[2].base_stat,
          stats[3].base_stat,
          stats[4].base_stat,
          stats[5].base_stat,
        ],
        baseStatsName: [
          stats[0].stat.name,
          stats[1].stat.name,
          stats[2].stat.name,
          stats[3].stat.name,
          stats[4].stat.name,
          stats[5].stat.name,
        ],
        evs: stats
          .filter((stat) => {
            if (stat.effort > 0) {
              return true;
            }
            return false;
          })
          .map((stat) => {
            return `${stat.effort} ${stat.stat.name
              .toLowerCase()
              .split("-")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}`;
          })
          .join(", "),
      });
    });

    api.get(`pokemon-species/${params.pokemonIndex}`).then((response) => {
      const {
        flavor_text_entries,
        gender_rate,
        capture_rate,
        egg_groups,
        hatch_counter,
      } = response.data;
      setPokemonSpecies({
        description: flavor_text_entries.filter((flavor) => {
          if (flavor.language.name === "en") {
            return `${flavor.flavor_text}`;
          }
        }),
        genderRatioFemale: gender_rate * 12.5,
        genderRatioMale: 12.5 * (8 - gender_rate),
        catchRate: Math.round((100 / 255) * capture_rate),
        eggGroups: egg_groups
          .map((group) => {
            return group.name
              .toLowerCase()
              .split(" ")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ");
          })
          .join(", "),
        hatchSteps: 255 * (hatch_counter + 1),
      });
    });
  }, [params.pokemonIndex]);

  console.log(pokemonSpecies);
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.spriteImageUrl} alt="" />
      <h1>{pokemon.evs}</h1>
      <h1>{pokemon.abilities}</h1>
      {/* <h1>{pokemonSpecies}</h1> */}
    </div>
  );
};

export default Pokemon;
