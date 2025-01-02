import styled from "styled-components";

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
	Grid,
	Row,
};
