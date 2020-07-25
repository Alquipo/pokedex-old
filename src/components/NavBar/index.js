import React from "react";
import { Link } from "react-router-dom";

import { NavBarStyles, BackContainer, TitleContainer } from "./styles";

const NavBar = () => {
  return (
    <div>
      <NavBarStyles className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <BackContainer>
          <Link to="/">
            <h2>
              <i className="arrow circle left icon" />
              Voltar para home
            </h2>
          </Link>
        </BackContainer>
        <TitleContainer className="title-container">
          <h1>Escolha seu Pokemon</h1>
        </TitleContainer>
      </NavBarStyles>
    </div>
  );
};

export default NavBar;
