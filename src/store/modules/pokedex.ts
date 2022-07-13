import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pokedex, PokedexState } from "../../interfaces/pokedex";
import { paginatePokedex, pokemonItem } from "../../service/api";

const initialState: PokedexState = {
  loading: false,
  error: false,
  pokedex: [],
  page: 1,
};

export const getPokedex = createAsyncThunk(
  "get/pokedex",
  async (page: number) => {
    try {
      const data = await paginatePokedex(page);
      let pokedex = [];
      for (const pok of data.results) {
        const result = await pokemonItem(pok.url);
        pokedex.push(result);
      }
      const pokemonMap = pokedex.map(
        ({ id, abilities, name, sprites, types }) => {
          return {
            id,
            type: types[0].type.name,
            name,
            abilities: {
              name1: abilities[0]?.ability.name,
              name2: abilities[1]?.ability.name,
            },
            ...sprites,
          };
        }
      );

      return { page, pokedex: pokemonMap };
    } catch (e: any) {
      e.message;
      console.log(e.message);
      return {
        pokedex: [],
        page,
      };
    }
  }
);

export const pokeapi = createSlice({
  name: "pokeapi",
  initialState,
  reducers: {
    orderByName: (state, action) => {
      const test = JSON.parse(JSON.stringify(action.payload));
      test.sort((a: any, b: any) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      state.pokedex = test;
    },
    cache: (state) => {
      const pokemons: [] = JSON.parse(localStorage.getItem("pokemons")!);
      const page = Number(window.localStorage.getItem("page"));
      if (pokemons) {
        state.pokedex = [...pokemons];
      }
      state.page = isNaN(page) || !page ? 1 : page + 1;
    },

    searchPokedex: (state, action) => {
      const pokemons: [] = JSON.parse(localStorage.getItem("pokemons")!);
      const page = Number(window.localStorage.getItem("page"));
      console.log(action.payload);
      if (action.payload) {
        state.pokedex = state.pokedex.filter((item) =>
          item.name.includes(action.payload)
        );
      }
      if (!action.payload) {
        if (pokemons) {
          state.pokedex = [...pokemons];
        }
      }
    },
    typePokedex: (state, action) => {
      const pokemons: [] = JSON.parse(localStorage.getItem("pokemons")!);
      console.log(action.payload);
      if (!action.payload) {
        state.pokedex = [...pokemons];
      }

      if (action.payload) {
        state.pokedex = state.pokedex.filter(
          (item) => item.type === action.payload
        );
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPokedex.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokedex.fulfilled, (state, action) => {
        window.localStorage.setItem(
          "pokemons",
          JSON.stringify(action.payload.pokedex)
        );
        window.localStorage.setItem(
          "page",
          JSON.stringify(action.payload.page)
        );

        state.pokedex = [...action.payload.pokedex];
        state.page = action.payload.page + 1;
        state.loading = false;
        state.error = false;
      })
      .addCase(getPokedex.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { searchPokedex, orderByName, typePokedex, cache } =
  pokeapi.actions;
export default pokeapi.reducer;
