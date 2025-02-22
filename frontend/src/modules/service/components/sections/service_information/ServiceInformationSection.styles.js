import styled from "styled-components";

//? container to match the size of the ServiceDescriptionInput.
const DescriptionWrapper = styled("div")({
  height: "236px",
  overflow: "auto",
});

const Grid = styled("div")({
  display: "grid",
  gridGap: "24px",
  gridTemplateColumns: "repeat(3, 1fr)",
});

const Row = styled("div")((props) => ({
  gridRow: "1",
  textAlign: props.$center ? "center" : "start",
}));

export const Styles = {
  DescriptionWrapper,
	Grid,
	Row,
};
