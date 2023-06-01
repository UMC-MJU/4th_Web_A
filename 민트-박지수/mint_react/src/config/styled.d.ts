import 'styled-components';

/**
 * Augments the `DefaultTheme` interface to include additional color properties.
 * @module styled-components-theme
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    gray_100: string;
    black: string;
    red_500: string;
    blue_300: string;
    blue_500: string;
    blue_600: string;
    blue_900: string;
    blue_800: string;
    pink_100: string;
    pink_200: string;
  }
}
