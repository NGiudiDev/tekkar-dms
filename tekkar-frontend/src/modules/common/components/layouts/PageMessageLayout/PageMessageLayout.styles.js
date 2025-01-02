import styled from "styled-components";

export const TextWrapper = styled("div")({
  maxWidth: "350px",
});

export const Wrapper = styled("div")((props) => ({
  alignItems: "center", 
  display: "flex",
  flexDirection: "column",
  height: props.$isFullScreen ? "100%" : "auto",
  justifyContent: "center",
  width: "100%",
}));

export const Styles = {
  TextWrapper,
  Wrapper,
};