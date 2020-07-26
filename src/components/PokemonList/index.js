import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Spinner } from "../Spinner";
import { Pagination } from "semantic-ui-react";
import PokemonCard from "../PokemonCard";

import { App, PaginationContainer } from "./styles";
// import "./styles.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPokemon] = useState(807);
  const [pokemonPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      await api
        .get(`/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`)
        .then((response) => {
          setPokemons(response.data.results);
        });
    };
    fetchPokemons();

    setIsLoading(false);
  }, [currentPage, pokemonPerPage]);

  const onPaginationClick = (e, pageInfo) => {
    setCurrentPage(pageInfo.activePage * pokemonPerPage - pokemonPerPage);
  };

  const totalPage = Math.ceil(totalPokemon / pokemonPerPage);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <PaginationContainer>
        <Pagination
          defaultActivePage={1}
          totalPages={totalPage}
          onPageChange={onPaginationClick}
        />
      </PaginationContainer>

      <App>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </App>
    </>
  );
};

export default PokemonList;
