import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle({
  "*": {
    margin: 0,
    padding: 0,
  },
  "#root": {
    minHeight: "100vh",
  }
});