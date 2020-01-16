import styled from "@emotion/styled";

const BadgeRound = styled.div(props => ({
  backgroundColor: props.theme.colors.primary,
  border: props.theme.border.white,
  borderRadius: props.theme.radius.fiftypercent,
  color: props.theme.colors.gray,
  fontSize: props.theme.font.tenpix,
  position: "absolute",
  bottom: 13,
  left: 10,
  textAlign: "center",
  width: props.theme.width.thirteenpix
}));

export default BadgeRound;