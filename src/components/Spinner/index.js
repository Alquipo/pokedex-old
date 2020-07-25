import React from "react";
import spinner from "../../assets/pokeball.gif";

const Spinner = () => {
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

export default Spinner;
