import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    listPokemons: [],
    totalPokemons: [],
    pokemonsSort: [],
    types: [],
    detail: [],
  },
  // REDUCERS DE LA APP
  reducers: {
    //carga los pokemons al estado global.
    setPokemons: (state, action) => {
      state.listPokemons = action.payload;
      state.totalPokemons = action.payload;
      state.pokemonsSort = action.payload;
    },
    clearFilters: (state, action) => {
      const allPokemons = state.totalPokemons;
      return {
        ...state,
        listPokemons: allPokemons,
      };
    },
    //Filtra dependiendo el tipo de pokemon seleccionado.
    filterByTypes: (state, action) => {
      const allPokemons = state.totalPokemons;
      const pokemonsFiltered =
        action.payload === "All"
          ? allPokemons
          : allPokemons.filter(
              (el) =>
                el.types.includes(action.payload) ||
                el.types.map((el) => el.name).includes(action.payload) // para filtrar los pokemons creados
            );
      if (pokemonsFiltered.length) {
        return {
          ...state,
          listPokemons: pokemonsFiltered,
        };
      } else {
        return alert("Pokemons not found");
      }
    },
    //Filtra los pokemons creados o los obtenidos de la API.
    filterCreated: (state, action) => {
      const allPokemons = state.totalPokemons;
      const filteredCreated =
        action.payload === "exis"
          ? allPokemons.filter((el) => !el.createdInDb)
          : allPokemons.filter((el) => el.createdInDb);
      return {
        ...state,
        listPokemons: filteredCreated,
      };
    },
    //Ordenamiento de A-Z y Z-A
    orderAZ: (state, action) => {
      const allPokemons = state.pokemonsSort;
      let sortedArrByAz =
        action.payload === "asc"
          ? allPokemons.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : allPokemons.slice().sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        listPokemons: sortedArrByAz,
      };
    },
    //Ordenamiento por ataque.
    orderByAttack: (state, action) => {
      const allPokemons = state.pokemonsSort;
      const orderAttack =
        action.payload === "min"
          ? allPokemons.slice().sort((a, b) => {
              if (a.attack > b.attack) return 1;
              else if (b.attack > a.attack) return -1;
              else return 0;
            })
          : allPokemons.slice().sort((a, b) => {
              if (b.attack > a.attack) return 1;
              else if (a.attack > b.attack) return -1;
              else return 0;
            });
      return {
        ...state,
        listPokemons: orderAttack,
      };
    },
    //Setea el estado con el name del pokemon.
    getPokemonByName: (state, action) => {
      return {
        ...state,
        listPokemons: action.payload,
      };
    },
    //Get Types
    getPokemonTypes: (state, action) => {
      return {
        ...state,
        types: action.payload,
      };
    },
    //Post Pokemon
    postPokemon: (state, action) => {
      axios
        .post("https://juliandev-back.herokuapp.com/pokemons", action.payload)
        .then((response) => response)
        .catch((error) => console.log(error));
      return {
        ...state,
      };
    },
    //Get detail
    getPokeDetail: (state, action) => {
      return {
        ...state,
        detail: [action.payload],
      };
    },
    //Clear Detail
    clearDeail: (state, action) => {
      // action.payload = "";
      return {
        ...state,
        detail: [],
      };
    },
  },
});

//exportar las actions.
export const {
  setPokemons,
  filterByTypes,
  filterCreated,
  clearFilters,
  orderAZ,
  orderByAttack,
  getPokemonByName,
  getPokemonTypes,
  postPokemon,
  getPokeDetail,
  clearDeail,
} = pokemonSlice.actions;

//exportar el reducer del slice.
export default pokemonSlice.reducer;

//llamado al backend.
export const getAllPokemons = () => {
  return (dispatch) => {
    axios
      .get("https://juliandev-back.herokuapp.com/pokemons")
      .then((response) => {
        dispatch(setPokemons(response.data));
      })
      .catch((error) => console.log(error));
  };
};

//Llamado al backend para obtener el pokemon por nombre.
//createAsyncThunk es la forma que remplaza al redux thunk en la nueva version de redux toolkit.
export const searchPokemonByName = createAsyncThunk(
  "name/searchPokemonByName",
  async (name, { dispatch }) => {
    try {
      const pokeData = await axios.get(
        `https://juliandev-back.herokuapp.com/pokemons?name=${name}`
      );
      return dispatch(getPokemonByName(pokeData.data));
    } catch (error) {
      return alert("Pokemon Not Found");
    }
  }
);

//Get pokemons types desde el backend.
export const getTypes = () => {
  return (dispatch) => {
    axios
      .get("https://juliandev-back.herokuapp.com/types")
      .then((response) => {
        dispatch(getPokemonTypes(response.data));
      })
      .catch((error) => console.log(error));
  };
};

//Get pokemon por ID.
export const getDetail = (id) => {
  return (dispatch) => {
    axios
      .get(`https://juliandev-back.herokuapp.com/pokemons/${id}`)
      .then((response) => {
        dispatch(getPokeDetail(response.data));
      })
      .catch((e) => console.log(e));
  };
};
