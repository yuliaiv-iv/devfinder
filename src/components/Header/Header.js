import React, { useContext } from "react";
import "./Header.css";
import { Moon } from "../Icons/Moon";
import { Sun } from "../Icons/Sun";
import ThemeContext from "../../contexts/ThemeContext";

function Header() {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1 className="header__title">devfinder</h1>
      <button className="header__switch" onClick={() => toggle()}>
        <h3 className="header__mode">{dark ? "light" : "dark"}</h3>
        {dark ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}

export default Header;
