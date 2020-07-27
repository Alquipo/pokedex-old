import axios from "axios";

const pad = (number, length) => {
  let str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};
// export const getPokemonImageUrl = (id) =>
//   `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

// export const getPokemonImageUrl = (id) =>
//   `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(
//     id,
//     3
//   )}.png`;

// export const getPokemonImageUrl = (id) => `./images/${pad(id, 3)}.png`;
export const getPokemonImageUrl = (id) =>
  `/thumbnails-compressed/${pad(id, 3)}.png`;

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default api;
