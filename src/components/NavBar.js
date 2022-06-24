import React from "react";
import { Link } from "react-router-dom";
import jbLogo from "../assets/images/JB.png";
import SearchBar from "./SearchBar";

import { NavBarContainer, BotonNav } from "../elements/Home";

const NavBar = ({ handlerInput, handlerSubmit, name, setPage }) => {
  return (
    <NavBarContainer>
      <SearchBar
        handlerInput={handlerInput}
        handlerSubmit={handlerSubmit}
        name={name}
        setPage={setPage}
      />
      <BotonNav>
        <Link to={"/create"}>Create Pokemon</Link>
      </BotonNav>
      <BotonNav>
        <Link to={"/"}>Landing Page</Link>
      </BotonNav>

      <figure>
        <img src={jbLogo} alt="Imagen Logo JulianDev" />
      </figure>
    </NavBarContainer>
  );
};

export default NavBar;
