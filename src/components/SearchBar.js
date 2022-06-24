import React from "react";
import "./styles/SearchBar.css";

const SearchBar = ({ handlerInput, handlerSubmit, name, setPage }) => {
  return (
    <form onSubmit={handlerSubmit}>
      <input
        className="input-search"
        onChange={handlerInput}
        placeholder="Search a Pokemon..."
        type="text"
        value={name}
      />
      <button onClick={setPage} className="btn-search" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
