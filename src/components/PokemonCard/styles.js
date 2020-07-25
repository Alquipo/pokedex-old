import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 12rem auto;
  background: #fff;
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
  }

  &.Normal {
    border-color: #6d6d4e;
  }

  &.Fire {
    border-color: #9c531f;
  }

  &.Water {
    border-color: #445e9c;
  }

  &.Electric {
    border-color: #a1871f;
  }

  &.Grass {
    border-color: #4e8234;
  }

  &.Ice {
    border-color: #638d8d;
  }

  &.Ground {
    border-color: #927d44;
  }

  &.Flying {
    border-color: #6d5e9c;
  }

  &.Ghost {
    border-color: #493963;
  }

  &.Rock {
    border-color: #786824;
  }

  &.Fighting {
    border-color: #7d1f1a;
  }

  &.Poison {
    border-color: #682a68;
  }

  &.Psychic {
    border-color: #a13959;
  }

  &.Bug {
    border-color: #6d7815;
  }

  &.Dark {
    border-color: #49392f;
  }

  &.Steel {
    border-color: #787887;
  }

  &.Dragon {
    border-color: #4924a1;
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
