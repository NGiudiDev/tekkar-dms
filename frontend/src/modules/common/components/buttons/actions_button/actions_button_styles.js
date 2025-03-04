import styled from "styled-components";

const Panel = styled("div")({
  marginTop: "8px",
  position: "absolute",
  right: 0,
  top: "100%",
  width: "200px",
});

const Wrapper = styled("div")({
  display: "inline-block",
  position: "relative",
  width: "fit-content",
});

export const Styles = {
	Panel,
	Wrapper,
};