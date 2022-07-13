import { Pokedex } from "./pokedex";

export interface ModalState {
  isModal: boolean;
  pokemon: Pokedex | null;
}
