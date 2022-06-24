import React from "react";
import { Link } from "react-router-dom";
import { PokemonCard, CardHead } from "../elements/CardPokemon";

const Card = ({ name, image, types, id }) => {
  return (
    <PokemonCard>
      <Link to={`/detail/${id}`}>
        <CardHead>
          <img src={image} alt="Imagen Pokemon" />
        </CardHead>
        <article>
          <h3>{name}</h3>
          <p>Types: {types}</p>
        </article>
      </Link>
    </PokemonCard>
  );
};

export default Card;
