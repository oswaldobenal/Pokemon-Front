import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from "../store/slices/pokemons";
//css
import "./styles/CreatePokemon.css";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const { types } = useSelector((state) => state.pokemons);

  const [input, setInput] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    alert("Pokemon Created Successfully...");
    setInput({
      name: "",
      image: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
    navigate("/home");
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <Link to={"/home"}>
          <button type="submit" className="btn-submit">
            <span>Volver!!</span>
            <div className="dot"></div>
          </button>
        </Link>
        <h1>Create a New Pokemon</h1>
        <form className="form-body" onSubmit={(e) => handleSubmit(e)}>
          <label>
            Name:
            <input
              onChange={handleChange}
              type="text"
              value={input.name}
              name="name"
              placeholder="Insert the name..."
            />
          </label>
          <label>
            Life:
            <input
              onChange={handleChange}
              type="number"
              value={input.life}
              name="life"
              placeholder="1 - 250"
            />
          </label>
          <label>
            Attack:
            <input
              onChange={handleChange}
              type="number"
              value={input.attack}
              name="attack"
              placeholder="1 - 250"
            />
          </label>
          <label>
            Defense:
            <input
              onChange={handleChange}
              type="number"
              value={input.defense}
              name="defense"
              placeholder="1 - 250"
            />
          </label>
          <label>
            Speed:
            <input
              onChange={handleChange}
              type="number"
              value={input.speed}
              name="speed"
              placeholder="1 - 250"
            />
          </label>
          <label>
            Height:
            <input
              onChange={handleChange}
              type="number"
              value={input.height}
              name="height"
              placeholder=" 1 - 250"
            />
          </label>
          <label>
            Weigth:
            <input
              onChange={handleChange}
              type="number"
              value={input.weight}
              name="weight"
              placeholder="1 - 250"
            />
          </label>
          <label>
            Image:
            <input
              onChange={handleChange}
              type="text"
              value={input.image}
              name="image"
              placeholder="Insert a image URL..."
            />
          </label>
          <select onChange={(e) => handleSelect(e)}>
            {types.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>
          <ul>
            <li>{input.types.map((el) => el + " ,")}</li>
          </ul>
          {/* button */}
          <div className="container">
            <button type="submit" className="btn-submit">
              <span>Create</span>
              <div className="dot"></div>
            </button>
            <h1>&#x261D; New Pokemon! &#x261D;</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePokemon;
