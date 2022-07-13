import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themeOption } from "../../interfaces/theme";

interface initialStateType {
  name: themeOption;
}
function find(): themeOption {
  const theme = window.localStorage.getItem("theme");
  if (theme != "dark" || theme != "light" ) return "light";
  if (theme) return theme as themeOption;
  return "dark";
}
const initialState: initialStateType = {
  name: find(),
};
export const themeDefault = createSlice({
  name: "theme",
  initialState,
  reducers: {
    alterTheme: (state, action: PayloadAction<{ name: themeOption }>) => {
      state.name = action.payload.name;
      window.localStorage.setItem("theme", action.payload.name);
    },
    invertTheme: (state) => {
      if (state.name === "dark") {
        state.name = "light";
        window.localStorage.setItem("theme", "light");
        return;
      }
      if (state.name === "light") {
        state.name = "dark";
        window.localStorage.setItem("theme", "dark");
        return;
      }
      console.log(state.name);
    },
  },
});
export const { alterTheme, invertTheme } = themeDefault.actions;
export default themeDefault.reducer;
