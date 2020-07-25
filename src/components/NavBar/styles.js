import styled from "styled-components";

export const NavBarStyles = styled.nav`
  background-color: #fff !important;
`;

export const BackContainer = styled.nav`
  margin-left: 100px;

  a {
    text-decoration: none;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 55px;

    color: gray;

    &:hover {
      color: black;
    }
  }
`;

export const TitleContainer = styled.nav`
  width: 60%;
  text-align: center;

  h1 {
    color: gray;
    /* cursor: pointer; */

    &:hover {
      color: black;
    }
  }
`;
