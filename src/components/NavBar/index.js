import React from "react";

import { NavBarStyles } from "./styles";

const NavBar = () => {
  return (
    <div>
      <NavBarStyles className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          Pokedex
        </a>
      </NavBarStyles>
    </div>
  );
};

export default NavBar;
