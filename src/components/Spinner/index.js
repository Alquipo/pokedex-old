import React from "react";
import spinner from "../../assets/pokeball.gif";
import pokeball from "../../assets/pokeball.svg";

export const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading"
      style={{
        width: "800px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export const Pokeball = () => {
  return (
    <img
      src={spinner}
      alt="Loading"
      style={{
        width: "12rem",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export const Pokeball2 = () => {
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
