import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  Select,
  GrupoInput,
  ContenedorLinkCentrado,
  ContenedorEstadosSelect,
} from "../elements/Formulario";
import Input from "./Input";
import { getTypes, postPokemon } from "../store/slices/pokemons";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const { types } = useSelector((state) => state.pokemons);

  const [pokemon, setPokemon] = useState({ campo: "", valido: null });
  const [life, setLife] = useState({ campo: "", valido: null });
  const [attack, setAttack] = useState({ campo: "", valido: null });
  const [defense, setDefense] = useState({ campo: "", valido: null });
  const [weight, setWeight] = useState({ campo: "", valido: null });
  const [height, setHeight] = useState({ campo: "", valido: null });
  const [speed, setSpeed] = useState({ campo: "", valido: null });
  const [image, setImage] = useState({ campo: "", valido: null });
  const [typesP, setTypesP] = useState({ types: [] });
  const [terminos, setTerminos] = useState(false);
  const [formularioValido, setFormularioValido] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-Z]{4,16}$/, // Letras y de 4 a 16 digitos.
  };

  const validInput = (state, setState) => {
    if (state.campo < 1 || state.campo > 250 || state.campo % 1 !== 0) {
      setState((prevState) => {
        return {
          ...prevState,
          valido: "false",
        };
      });
    } else {
      setState((prevState) => {
        return {
          ...prevState,
          valido: "true",
        };
      });
    }
  };

  const onChangeTerminos = (e) => {
    setTerminos(e.target.checked);
  };

  const onChangeSelect = (e) => {
    if (typesP.types.length > 0) {
      typesP.types.includes(e.target.value)
        ? alert("No puedes volver a seleccionar la misma opcion")
        : setTypesP({
            ...typesP,
            types: [...typesP.types, e.target.value],
          });
    } else {
      setTypesP({
        ...typesP,
        types: [...typesP.types, e.target.value],
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      pokemon.valido === "true" &&
      life.valido === "true" &&
      attack.valido === "true" &&
      defense.valido === "true" &&
      weight.valido === "true" &&
      height.valido === "true" &&
      speed.valido === "true" &&
      terminos
    ) {
      setFormularioValido(true);
      const newPokemon = {
        name: pokemon.campo,
        image: image.campo ? image.campo : "https://i.ibb.co/C7Y1ghL/JBL.png",
        life: life.campo,
        attack: attack.campo,
        defence: defense.campo,
        weight: weight.campo,
        height: height.campo,
        speed: speed.campo,
        types: typesP.types.map((el) => el),
      };
      dispatch(postPokemon(newPokemon));
      setPokemon({ campo: "", valido: null });
      setLife({ campo: "", valido: null });
      setAttack({ campo: "", valido: null });
      setDefense({ campo: "", valido: null });
      setWeight({ campo: "", valido: null });
      setHeight({ campo: "", valido: null });
      setSpeed({ campo: "", valido: null });
      setImage({ campo: "", valido: null });
      setTerminos(false);
      alert("Pokemon Created Successfully!!💥");
      navigate("/home");
    } else {
      setFormularioValido(false);
    }
  };

  const deleteTypes = (e) => {
    setTypesP({
      types: typesP.types.filter((el) => el !== e.target.value),
    });
    console.log(e.target.value);
  };
  return (
    <div className="main">
      <Formulario onSubmit={onSubmit}>
        <Input
          estado={pokemon}
          setEstado={setPokemon}
          tipo="text"
          label="Name"
          placeholder="ej. charmander"
          name="name"
          leyendaE="El nombre tiene que tener de 4 a 16 digitos y solo puede contener letras"
          expresionRegular={expresiones.nombre}
        />

        <Input
          estado={life}
          setEstado={setLife}
          tipo="number"
          label="Life"
          placeholder="ej. 1 - 250"
          name="life"
          leyendaE="Los numeros deben ser solo enteros del 1 al 250."
          funcion={validInput}
        />

        <Input
          estado={attack}
          setEstado={setAttack}
          tipo="number"
          label="Attack"
          name="attack"
          placeholder="ej. 1 -250"
          leyendaE="Los numeros deben ser solo enteros del 1 al 250."
          funcion={validInput}
        />
        <Input
          estado={defense}
          setEstado={setDefense}
          tipo="number"
          label="Defense"
          name="weight"
          placeholder="ej. 1 -250"
          leyendaE="Los numeros deben ser solo enteros del 1 al 250."
          funcion={validInput}
        />
        <Input
          estado={weight}
          setEstado={setWeight}
          tipo="number"
          label="Weight"
          placeholder="ej. 1 - 250"
          name="weight"
          leyendaE="Los numeros deben ser solo enteros del 1 al 250."
          expresionRegular={expresiones.numbers}
          funcion={validInput}
        />
        <Input
          estado={height}
          setEstado={setHeight}
          tipo="number"
          label="Height"
          placeholder="ej. 1 - 250"
          name="height"
          leyendaE="Los numeros deben ser solo enteros del 1 al 250."
          funcion={validInput}
        />
        <Input
          estado={speed}
          setEstado={setSpeed}
          tipo="number"
          label="Speed"
          placeholder="ej. 1 - 250"
          name="speed"
          leyendaE="Los numeros deben ser solo enteros del 1 al 250."
          funcion={validInput}
        />
        <Input
          estado={image}
          setEstado={setImage}
          tipo="text"
          label="Image"
          placeholder="Escriba una URL de la img sino se creara una por default"
          name="image"
        />
        <GrupoInput>
          <Label>Types</Label>
          <Select onChange={onChangeSelect}>
            {types.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </Select>
        </GrupoInput>
        <ContenedorEstadosSelect>
          {typesP.types.map((el, index) => (
            <p key={index}>
              {el}.{" "}
              <button onClick={deleteTypes} value={el}>
                X
              </button>{" "}
            </p>
          ))}
        </ContenedorEstadosSelect>

        <ContenedorTerminos>
          <Label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={terminos}
              onChange={onChangeTerminos}
            />
          </Label>
          Acepto Los Terminos Y Condiciones.
        </ContenedorTerminos>
        {formularioValido === false && (
          <MensajeError>
            <p>
              <b>Error:</b> Por favor rellene el formulario corectamente.
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && (
            <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
          )}
        </ContenedorBotonCentrado>
        <ContenedorLinkCentrado>
          <Boton>
            <Link to="/home">Go Back!!</Link>{" "}
          </Boton>
        </ContenedorLinkCentrado>
      </Formulario>
    </div>
  );
};

export default Form;
