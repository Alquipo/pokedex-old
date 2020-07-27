import styled from "styled-components";

export const Badge = styled.div`
  &.Normal {
    background-color: #a8a878;
    box-shadow: 0 0 20px #a8a878;
    color: #fff;
  }

  &.Fire {
    background-color: #f08030;
    box-shadow: 0 0 20px #f08030;
    color: #fff;
  }

  &.Water {
    background-color: #6890f0;
    box-shadow: 0 0 20px #6890f0;
    color: #fff;
  }

  &.Electric {
    background-color: #f8d030;
    box-shadow: 0 0 20px #f8d030;
    color: #fff;
  }

  &.Grass {
    background-color: #78c850;
    box-shadow: 0 0 20px #78c850;
    color: #fff;
  }

  &.Ice {
    background-color: #98d8d8;
    box-shadow: 0 0 20px #98d8d8;

    color: #fff;
  }

  &.Ground {
    background-color: #e0c068;
    box-shadow: 0 0 20px #e0c068;

    color: #fff;
  }

  &.Flying {
    background-color: #a890f0;
    box-shadow: 0 0 20px #a890f0;

    color: #fff;
  }

  &.Ghost {
    background-color: #705898;
    box-shadow: 0 0 20px #705898;

    color: #fff;
  }

  &.Rock {
    background-color: #b8a038;
    box-shadow: 0 0 20px #b8a038;

    color: #fff;
  }

  &.Fighting {
    background-color: #c03028;
    box-shadow: 0 0 20px #c03028;

    color: #fff;
  }

  &.Poison {
    background-color: #a040a0;
    box-shadow: 0 0 20px #a040a0;

    color: #fff;
  }

  &.Psychic {
    background-color: #f85888;
    box-shadow: 0 0 20px #f85888;

    color: #fff;
  }

  &.Bug {
    background-color: #a8b820;
    box-shadow: 0 0 20px #a8b820;

    color: #fff;
  }

  &.Dark {
    background-color: #705848;
    box-shadow: 0 0 20px #705848;

    color: #fff;
  }

  &.Steel {
    background-color: #b8b8d0;
    box-shadow: 0 0 20px #b8b8d0;

    color: #fff;
  }

  &.Dragon {
    background-color: #7038f8;
    box-shadow: 0 0 20px #7038f8;

    color: #fff;
  }
`;

export const ProgressDiv = styled.div`
  &.progress-bar {
    /* background-color: white; */
    width: 0;
    height: 20px;
    font-size: 1rem;
    text-align: right;
    transition: width 1s ease-in;
    animation-play-state: running;
  }

  &.progress-bar span {
    padding-right: 4px;
  }
`;
