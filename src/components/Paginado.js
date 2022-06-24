import React from "react";
// import "./styles/Paginado.css"
import { PaginadoContainer } from "../elements/Home";

const Paginado = ({ pokemonPerPage, allPokemons, paginado }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginadoContainer >
      <ul>
        {pageNumbers &&
          pageNumbers.map((number, index) => (
            <li key={index}>
              <button onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </PaginadoContainer>
  );
};

export default Paginado;
