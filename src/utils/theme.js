import { createContext } from "react";

// export const lightTheme = {
//   body: "#F6F8FF",
// };

// export const darkTheme = {
//   body: "#141D2F",
// };

export const themes = {
  light: {
    body: "#F6F8FF",
  },
  dark: {
    body: "#141D2F",
  },
};

export const ThemeContext = createContext(themes.light);
