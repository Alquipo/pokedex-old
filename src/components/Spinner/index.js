import React from "react";
import spinner from "../../assets/pokeball2.gif";

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
