import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import api, { getPokemonImageUrl2 } from "../../services/api";

import { Pokeball } from "../Spinner";
import { Badge, ProgressDiv } from "./styles";

import "./styles.css";

const Pokemon = () => {
  const [pokemon, setPokemom] = useState([]);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imagePokemon, setImagePokemon] = useState("");

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
          name: name.replace(/-/g, " "),
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
            .join(" / "),
          id: id,
          weight: weight / 10,
          height: height / 10,
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
            description: flavor_text_entries
              .filter((flavor) => flavor.language.name === "en")
              .map((flavor) => flavor.flavor_text),

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

      await setImagePokemon(getPokemonImageUrl2(pokemon.id));

      setIsLoading(false);
    };

    loadPokemonData();
  }, [params.pokemonIndex, pokemon.id]);

  const baseStatsName = [
    "HP",
    "Attack",
    "Defense",
    "Sp. Attack",
    "Sp. Defense",
    "Speed",
  ];

  return isLoading ? (
    <Pokeball />
  ) : (
    <div className="col-12 fadeIn">
      <h1
        className="text-center text-uppercase Section-Heading"
        style={{ paddingBottom: "3rem" }}
      >
        {pokemon.name}
      </h1>

      <div
        className="row justify-content-center"
        style={{ position: "relative", paddingBottom: "3rem" }}
      >
        <div className="col-lg-3 col-md-2 bioDiv d-flex flex-wrap justify-content-center">
          <div className="inner">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="text-right font-weight-bold">ID</td>
                  <td># {pokemon.id}</td>
                </tr>
                <tr>
                  <td className="text-right font-weight-bold">Height</td>
                  <td style={{ whiteSpace: "nowrap" }}>{pokemon.height} Mt</td>
                </tr>
                <tr>
                  <td className="text-right font-weight-bold">Weight</td>
                  <td style={{ whiteSpace: "nowrap" }}>{pokemon.weight} Kg</td>
                </tr>
                <tr>
                  <td className="text-right font-weight-bold">Abilities</td>
                  <td>
                    <span className="abilities">
                      <Badge
                        className={`ability ${pokemon.types[0]} text-uppercase`}
                        role="button"
                        style={{
                          whiteSpace: "nowrap",
                          display: "inline-block",
                          boxShadow: "none",
                        }}
                      >
                        {pokemon.abilities}
                      </Badge>
                      {console.log(pokemon.abilities)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-right font-weight-bold"
                    style={{ verticalAlign: "middle" }}
                  >
                    Type
                  </td>
                  <td>
                    <div className="row" style={{ flexWrap: "nowrap" }}>
                      {pokemon.types.map((type) => (
                        <Badge className={`icon ${type} text-capitalize`}>
                          <span className="text-white font-weight-bold">
                            {type}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-5 d-flex flex-wrap align-items-center">
          <div className="image-container">
            <img
              alt=""
              className="Image img-fluid mx-auto my-auto d-block fadeInOut"
              src={imagePokemon}
              style={{
                zIndex: "100 !important",
                maxWidth: "85%",
                height: "auto",
                paddingTop: "10px",
              }}
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-2 statDiv my-auto mx-auto d-flex flex-wrap justify-content-center">
          <div className="inner">
            <table className="table table-borderless">
              {pokemon.baseStats.map((stat, index) => (
                <tr key={index}>
                  <td
                    className="text-right font-weight-bold"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {baseStatsName[index]}
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated rounded-sm"
                        role="progressbar"
                        aria-valuenow=""
                        aria-valuemin="0"
                        aria-valuemax="255"
                        style={{ width: `${stat}%` }}
                      >
                        <span>{stat}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* <div className="card mt-5">
        <div className="card-header">
          <div className="row">
            <div className="col-7">
              <div className="float-right">
                {pokemon.types.map((type) => (
                  <Badge key={type} className={`badge badge-pill mr-1 ${type}`}>
                    {type}
                  </Badge>
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
              <h4 className="mx-auto" style={{ textTransform: "capitalize" }}>
                {pokemon.name}
              </h4>
              {pokemon.baseStats.map((stat, index) => (
                <div key={index} className="row align-items-center">
                  <div className="col-12 col-md-3">
                    <strong>{baseStatsName[index]}</strong>
                  </div>

                  <div className="col-12 col-md-9 ">
                    <div className="progress" style={{ height: "20px" }}>
                      <ProgressDiv
                        className="progress-bar progress-bar-striped progress-bar-animated rounded-sm "
                        style={{ width: `${stat}%` }}
                        aria-valuenow=""
                        aria-valuemin="0"
                        aria-valuemax="255"
                      >
                        <span className="text-right font-weight-bold">
                          {stat}
                        </span>
                      </ProgressDiv>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-1">
              <div className="col">
                <p className="p-2">{pokemonSpecies.description[6]}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-body">
          <h5 className="card-little text-center">Profile</h5>
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
        <div className="card-footer text-muted">
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
    </div> */

export default Pokemon;
