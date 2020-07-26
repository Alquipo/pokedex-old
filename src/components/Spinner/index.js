import React from "react";
import pokeball from "../../assets/pokeball.gif";

export const Pokeball = () => {
  return (
    <img
      src={pokeball}
      alt="Loading"
      style={{
        width: "800px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export const PokeballMini = () => {
  return (
    <img
      src={pokeball}
      alt="Loading"
      style={{
        width: "12rem",
        margin: "auto",
        display: "block",
      }}
    />
  );
};
