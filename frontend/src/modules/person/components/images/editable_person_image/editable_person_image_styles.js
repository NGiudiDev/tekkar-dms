import styled from "styled-components";

const IconWrapper = styled("div")((props) => ({
  backgroundColor: props.theme.colors.black._900,
  borderRadius: "50%",
  bottom: 0,
  padding: "4px",
  position: "absolute",
  right: 0,
}));

const Wrapper = styled("div")({
  position: "relative",
  width: "96px",
});

export const Styles = {
	IconWrapper,
  Wrapper,
};