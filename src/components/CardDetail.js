import React from "react";
import { ContenedorCard, ContenedorImg } from "../elements/Cards";
const CardDetail = ({
  name,
  image,
  types,
  id,
  life,
  attack,
  defense,
  height,
  weight,
  speed,
}) => {
  return (
    <main>
      <ContenedorCard>
        <ContenedorImg>
          <img src={image} alt="Imagen Pokemon" />
        </ContenedorImg>
        <article>
          <h3>ID</h3>
          <h4>{id}</h4>
          <h3>Name</h3>
          <h4>{name}</h4>
          <h3>Life</h3>
          <h4>{life}</h4>
          <h3>Attack</h3>
          <h4>{attack}</h4>
          <h3>Defense</h3>
          <h4>{defense}</h4>
          <h3>Height</h3>
          <h4>{height}</h4>
          <h3>Weight</h3>
          <h4>{weight}</h4>
          <h3>Speed</h3>
          <h4>{speed}</h4>
          <h3>Types</h3>
          <h4>{types}</h4>
        </article>
      </ContenedorCard>
    </main>
  );
};

export default CardDetail;
