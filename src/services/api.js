import axios from "axios";

export const getPokemonImageUrl = (id) =>
  `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

export const getPokemonUrl = (id) => `https://pokeapi.co/api/v2${id}`;

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default api;
