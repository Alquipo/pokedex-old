import axios from "axios";

export const getPokemonImageUrl = (id) =>
  `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default api;
