import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import api from "../../services/api";

import Spinner from "../Spinner";

import "./styles.css";

const Pokemon = () => {
  const [pokemon, setPokemom] = useState([]);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { params } = useRouteMatch();

  useEffect(() => {
    const loadPokemonData = async () => {
      await api.get(`pokemon/${params.pokemonIndex}`).then((response) => {
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
          abilities: abilities
            .map((ability) =>
              ability.ability.name
                .toLowerCase()
                .split("-")
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ")
            )
            .join(", "),
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

      await api
        .get(`pokemon-species/${params.pokemonIndex}`)
        .then((response) => {
          const {
            flavor_text_entries,
            gender_rate,
            capture_rate,
            egg_groups,
            hatch_counter,
          } = response.data;
          setPokemonSpecies({
            // eslint-disable-next-line array-callback-return
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
      setIsLoading(false);
    };

    loadPokemonData();
  }, [params.pokemonIndex]);

  const baseStatsName = [
    "HP",
    "Attack",
    "Defense",
    "Sp. Attack",
    "Sp. Defense",
    "Speed",
  ];

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-5">
              <h5>{pokemon.id}</h5>
            </div>
            <div className="col-7">
              <div className="float-right">
                {pokemon.types.map((type) => (
                  <span key={type} className={`badge badge-pill mr-1 ${type}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src={pokemon.spriteImageUrl}
                alt="Pokemon"
                className="card-img-top rounded mx-auto mt-2"
              />
            </div>
            <div className="col-md-9">
              <h4 className="mx-auto">{pokemon.name}</h4>
              {pokemon.baseStats.map((stat, indice) => (
                <div key={indice} className="row align-items-center">
                  <div className="col-12 col-md-3">{baseStatsName[indice]}</div>

                  <div className="col-12 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${stat}%` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{stat}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-1">
              <div className="col">
                <p className="p-2">
                  {pokemonSpecies.description[0].flavor_text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-body">
          <h5 className="card-litle text-center">Profile</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="float-right">Height: </div>
                </div>
                <div className="col-md-6">
                  <h6 className="float-left">{pokemon.height} Mt</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="float-right">Weight: </div>
                </div>
                <div className="col-md-6">
                  <h6 className="float-left">{pokemon.weight} Kg</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="float-right">Catch Hate: </div>
                </div>
                <div className="col-md-6">
                  <h6 className="float-left">{pokemonSpecies.catchRate}%</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="float-right">Gender Ratio: </div>
                </div>
                <div className="col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${pokemonSpecies.genderRatioFemale}%`,
                        backgroundColor: "#C21858",
                      }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{pokemonSpecies.genderRatioFemale}</small>
                    </div>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${pokemonSpecies.genderRatioMale}%`,
                        backgroundColor: "#1976D2",
                      }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{pokemonSpecies.genderRatioMale}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-6">
                  <h6 className="float-right">Egg Groups:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{pokemonSpecies.eggGroups} </h6>
                </div>
                <div className="col-6">
                  <h6 className="float-right">Hatch Steps:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{pokemonSpecies.hatchSteps}</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-right">Abilities:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{pokemon.abilities}</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-right">EVs:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{pokemon.evs}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          Data From{" "}
          <a
            href="https://pokeapi.co/"
            rel="noopener noreferrer"
            target="_blank"
            className="card-link"
          >
            PokeAPI.co
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
