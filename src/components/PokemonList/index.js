import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Spinner from "../Spinner";
import { Pagination } from "semantic-ui-react";

import PokemonCard from "../PokemonCard";

import "./styles.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonPagination, setPokemonPagination] = useState({
    currentPage: 0,
    offset: 0,
  });

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await api.get(
        `/pokemon?limit=25&offset=${pokemonPagination.currentPage * (25 / 2)}`
      );

      setPokemons(response.data.results);
      setIsLoading(false);
    };

    fetchPokemons();
  }, [pokemonPagination.currentPage]);

  const onPaginationClick = (_, data) => {
    if (data.activePage === 1) {
      setPokemonPagination({ currentPage: 0 });
    } else {
      setPokemonPagination({ currentPage: data.activePage });
    }
  };

  console.log(pokemonPagination);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="pagination-container">
        <Pagination
          defaultActivePage={1}
          totalPages={32}
          onPageChange={onPaginationClick}
        />
      </div>

      <div className="row">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
