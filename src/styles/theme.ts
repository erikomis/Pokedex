import { themeOption } from "../interfaces/theme";

export function theme(theme: themeOption = "light") {
  switch (theme) {
    case "dark":
      return {
        colors: {
          light:"#1F2029",
          dark: "#d3d3d3",
        },
      };
    case "light":
      return {
        colors: {
          light: "#d3d3d3",
          dark: "#1F2029",
        },
      };
  }
}
const seila = theme()
export type Theme = typeof seila;
