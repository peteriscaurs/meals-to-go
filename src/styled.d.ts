import "styled-components/native";
import { theme } from "./infrastructure/theme";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    fontSizes: typeof theme.fontSizes;
    fontWeights: typeof theme.fontWeights;
    fonts: typeof theme.fonts;
    lineHeights: typeof theme.lineHeights;
    sizes: typeof theme.sizes;
    space: typeof theme.space;
  }
}
