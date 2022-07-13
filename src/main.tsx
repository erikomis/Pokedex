import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { GlobalStyle } from "./styles/global";
import { MyThemeProvider } from "./provider/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyThemeProvider>
        <GlobalStyle />
        <App />
      </MyThemeProvider>
    </Provider>
  </React.StrictMode>
);
