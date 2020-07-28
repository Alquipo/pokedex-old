import React from "react";
import { Link } from "react-router-dom";

import { NavBarStyles, BackContainer } from "./styles";

const NavBarDetail = () => {
  return (
    <NavBarStyles className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <BackContainer>
        <Link to="/pokedex">
          <h2>
            <i className="arrow circle left icon" />
          </h2>
        </Link>
      </BackContainer>
    </NavBarStyles>
  );
};

export default NavBarDetail;
