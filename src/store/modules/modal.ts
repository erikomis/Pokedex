import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../../interfaces/modal";

const initialState: ModalState = {
  isModal: false,
  pokemon: {
    id: "",
    name: "",
    abilities: [],
    back_default: "",
    back_shiny: "",
    front_default: "",
    front_shiny: "",
    type: "",
  },
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openIsModal: (state, action) => {
      state.isModal = true;
      state.pokemon = action.payload;
    },
    closeIsmodal: (state) => {
      state.isModal = false;
      state.pokemon = null;
    },
  },
});

export const { closeIsmodal, openIsModal } = modal.actions;
export default modal.reducer;
