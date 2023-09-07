import styled from "styled-components/native";
import { Theme } from "../../infrastructure/theme";

const defaultTextStyles = (theme: Theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: Theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: Theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: Theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: Theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme: Theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  title,
  body,
  label,
  caption,
  error,
  hint,
};

interface TextProps {
  theme: string;
  variant: keyof typeof variants;
}

export const Text = styled.Text<TextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
