import styled from "styled-components";

const Wrapper = styled("div")((props) => ({
  alignItems: "center", 
  display: "flex",
  height: props.$isFullHeight ? "100vh" : "100%",
  justifyContent: "center",
  width: "100%",
}));

export const Styles = {
  Wrapper,
};