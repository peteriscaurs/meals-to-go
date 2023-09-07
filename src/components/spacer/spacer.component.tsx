import styled from "styled-components/native";
import { Theme } from "../../infrastructure/theme";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

type SizeVariant = typeof sizeVariant;

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

type PositionVariant = typeof positionVariant;

const getVariant = (
  position: keyof PositionVariant,
  size: keyof SizeVariant,
  theme: Theme,
) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

interface SpacerProps {
  position: keyof PositionVariant;
  size: keyof SizeVariant;
  theme: Theme;
}

export const Spacer = styled.View<SpacerProps>`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
