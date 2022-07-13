export interface Pokedex {
  id: string;
  name: string;
  abilities: [];
  type: string;
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}


export interface PokedexState {
  loading: boolean;
  error: boolean;
  pokedex: Pokedex[];
  page: number;
}


export interface PokemonProps {
  pokemon: Pokedex;
}