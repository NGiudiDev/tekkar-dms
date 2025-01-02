import styled from "styled-components";

const ContentWrapper = styled("div")({
  margin: "auto",
  maxWidth: "750px",
  padding: "32px 16px",
  width: "100%",
});

const TopbarWrapper = styled("div")({
  backgroundColor: "#DCDCDC",
  clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
  height: "180px",
  position: "relative",
});

export const Styles = {
  ContentWrapper,
  TopbarWrapper,
};