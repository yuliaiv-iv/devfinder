import React, { useState, useLayoutEffect } from "react";
import { lightTheme, darkTheme } from "../utils/theme";

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    } else {
      setDark(false);
      applyTheme(lightTheme);
    }
  }, [dark]);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
