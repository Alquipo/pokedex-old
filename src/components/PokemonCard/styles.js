import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 12rem auto;
  background: #ecf0f1;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  transition: 0.4s ease-in-out all;
  -webkit-transition: 0.4s ease-out;
  -moz-transition: 0.4s ease-out;
  -o-transition: 0.4s ease-out;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    /* box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5); */
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition: color 800ms;
    transition: color 800ms;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ecf0f1;
    border-radius: 100%;
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition: 800ms ease-out;
    transition: 800ms ease-out;
  }
  &:hover:before {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  &.Normal {
    border-color: #6d6d4e;
    &:hover {
      background-color: #a8a878;
    }
  }

  &.Fire {
    border-color: #9c531f;
    &:hover {
      background-color: #f08030;
    }
  }

  &.Water {
    border-color: #445e9c;
    &:hover {
      background-color: #6890f0;
    }
  }

  &.Electric {
    border-color: #a1871f;
    &:hover {
      background-color: #f8d030;
    }
  }

  &.Grass {
    border-color: #4e8234;
    &:hover {
      background-color: #78c850;
    }
  }

  &.Ice {
    border-color: #638d8d;
    &:hover {
      background-color: #98d8d8;
    }
  }

  &.Ground {
    border-color: #927d44;
    &:hover {
      background-color: #e0c068;
    }
  }

  &.Flying {
    border-color: #6d5e9c;
    &:hover {
      background-color: #a890f0;
    }
  }

  &.Ghost {
    border-color: #493963;
    &:hover {
      background-color: #705898;
    }
  }

  &.Rock {
    border-color: #786824;
    &:hover {
      background-color: #b8a038;
    }
  }

  &.Fighting {
    border-color: #7d1f1a;
    &:hover {
      background-color: #c03028;
    }
  }

  &.Poison {
    border-color: #682a68;
    &:hover {
      background-color: #a040a0;
    }
  }

  &.Psychic {
    border-color: #a13959;
    &:hover {
      background-color: #f85888;
    }
  }

  &.Bug {
    border-color: #6d7815;
    &:hover {
      background-color: #a8b820;
    }
  }

  &.Dark {
    border-color: #49392f;
    &:hover {
      background-color: #705848;
    }
  }

  &.Steel {
    border-color: #787887;
    &:hover {
      background-color: #b8b8d0;
    }
  }

  &.Dragon {
    border-color: #4924a1;
    &:hover {
      background-color: #7038f8;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const CardId = styled.span`
  width: 3rem;
  color: #333;
  padding: 0.1rem;
  font-weight: 700;
  position: absolute;
  border-radius: 0 0 10px 0;
  top: 0;
  left: 0;

  &.Normal {
    background-color: #a8a878;
  }

  &.Fire {
    background-color: #f08030;
  }

  &.Water {
    background-color: #6890f0;
  }

  &.Electric {
    background-color: #f8d030;
  }

  &.Grass {
    background-color: #78c850;
  }

  &.Ice {
    background-color: #98d8d8;
  }

  &.Ground {
    background-color: #e0c068;
  }

  &.Flying {
    background-color: #a890f0;
  }

  &.Ghost {
    background-color: #705898;
  }

  &.Rock {
    background-color: #b8a038;
  }

  &.Fighting {
    background-color: #c03028;
  }

  &.Poison {
    background-color: #a040a0;
  }

  &.Psychic {
    background-color: #f85888;
  }

  &.Bug {
    background-color: #a8b820;
  }

  &.Dark {
    background-color: #705848;
  }

  &.Steel {
    background-color: #b8b8d0;
  }

  &.Dragon {
    background-color: #7038f8;
  }
`;

export const CardName = styled.h1`
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 700;
`;

export const CardImg = styled.img`
  width: 150px;
  display: block;
  margin: auto;
`;

export const CardDetails = styled.span`
  font-size: 1.3rem;
  /* color: #f1f1f1; */
`;
