import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { DaDisgraca } from "../interfaces/theme";
import { useAppSelector } from "../store/store";
import { theme } from "../styles/theme";

export function MyThemeProvider({ children }: DaDisgraca) {
  const { themeDefault } = useAppSelector();

  return (
    <ThemeProvider theme={theme(themeDefault.name)}>{children}</ThemeProvider>
  );
}
