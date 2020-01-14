import styled from "@emotion/styled";

const BadgeRound = styled.div(props => ({
  backgroundColor: props.theme.colors.primary,
  border: props.theme.border.white,
  borderRadius: props.theme.radius.fiftypercent,
  color: props.theme.colors.gray,
  fontSize: props.theme.font.tenpix,
  position: "absolute",
  bottom: "10px",
  left: "10px",
  textAlign: "center",
  width: props.theme.width.thirtypix
}));

export default BadgeRound;