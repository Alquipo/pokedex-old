import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 12rem auto;
  background: #444;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border-top: 0.5px solid #cebf7b;
  border-bottom: 0.5px solid #cebf7b;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out all;

  &:hover {
    transform: scale(1.05);
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
  background: #cebf7b;
  width: 3rem;
  color: #333;
  padding: 0.1rem;
  font-weight: 700;
  position: absolute;
  border-radius: 0 0 10px 0;
  top: 0;
  left: 0;
`;

export const CardName = styled.h1`
  text-transform: capitalize;
  color: #fff;
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
  color: #dbca80;
`;
