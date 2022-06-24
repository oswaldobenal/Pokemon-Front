import React, { useState, useEffect } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
//Redux
import {
  getAllPokemons,
  filterByTypes,
  filterCreated,
  clearFilters,
  orderAZ,
  orderByAttack,
  searchPokemonByName,
} from "../store/slices/pokemons";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "./Paginado";
//CSS
// import "./styles/Home.css";
import {
  FiltersContainer,
  MainContainer,
  ContainerCards,
  BotonMoviles,
} from "../elements/Home";

import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { listPokemons } = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = listPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [name, setName] = useState("");
  const handlerInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPokemonByName(name));
    setName("");
  };

  function handleFilterByTypes(e) {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
  }

  function handlerFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }

  function handlerClear(e) {
    e.preventDefault();
    dispatch(clearFilters(e.target.value));
  }

  function handlerOrderAZ(e) {
    e.preventDefault();
    dispatch(orderAZ(e.target.value));
  }

  function handlerOrderByAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
  }

  function setPage() {
    setCurrentPage(1);
  }

  return (
    <MainContainer>
      {listPokemons.length >= 1 ? (
        <>
          <NavBar
            handlerInput={handlerInput}
            handlerSubmit={handlerSubmit}
            name={name}
            setPage={setPage}
          />
          <FiltersContainer>
            <button onClick={(e) => handlerClear(e)}>All Pokemons</button>
            <BotonMoviles>
              <Link to="/create">Create Pokemon</Link>
            </BotonMoviles>
            <BotonMoviles>
              <Link to="/">Landing Page</Link>
            </BotonMoviles>
            <select onChange={(e) => handlerFilterCreated(e)}>
              <option value="exis">Existing</option>
              <option value="crea">Created</option>
            </select>
            <select onChange={(e) => handlerOrderAZ(e)}>
              <option value="">Order Alphabetically</option>
              <option value="asc">A-Z</option>
              <option value="des">Z-A</option>
            </select>
            <select onChange={(e) => handlerOrderByAttack(e)}>
              <option value="">Order By Attack</option>
              <option value="max">Max</option>
              <option value="min">Min</option>
            </select>
            <select onChange={(e) => handleFilterByTypes(e)}>
              <option value="All">Filter By Types</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="steel">Steel</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="fairy">Fairy</option>
              <option value="unknown">Unknown</option>
              <option value="shadow">Shadow</option>
            </select>
          </FiltersContainer>
          <Paginado
            pokemonPerPage={pokemonsPerPage}
            allPokemons={listPokemons.length}
            paginado={paginado}
          />
          <ContainerCards>
            {currentPokemons ? (
              currentPokemons.map((el, index) => (
                <Card
                  key={index}
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  types={
                    el.createdInDb
                      ? el.types.map((type) => `${type.name}. `)
                      : el.types.map((type) => `${type}. `)
                  }
                />
              ))
            ) : (
              <h1>Error</h1>
            )}
          </ContainerCards>
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
          <img
            src="https://i.gifer.com/origin/f3/f367083443fba6e9344555f635e1ba4a_w200.webp"
            alt=""
          />
        </div>
      )}
    </MainContainer>
  );
};

export default Home;
