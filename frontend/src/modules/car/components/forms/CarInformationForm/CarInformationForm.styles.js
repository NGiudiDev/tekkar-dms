import styled from "styled-components";

const Grid = styled("div")({
  display: "grid",
  gridGap: "24px",
  gridTemplateColumns: "repeat(3, 1fr)",
});

const Row = styled("div")({
  gridRow: "1",
});

export const Styles = {
	Grid,
	Row,
};
