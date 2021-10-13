import React from "react";
import "./Header.css";
import { Moon } from "../Icons/Moon";
import ThemeContext from '../../contexts/ThemeContext';

function Header() {

  const { dark, toggle } = React.useContext(ThemeContext);

  return (
    <header className="header">
      <h1 className="header__title">devfinder</h1>
      <button className="header__switch" onClick={() => toggle()}>
        <h3 className="header__mode">dark</h3>
        <Moon />
      </button>
    </header>
  );
}

export default Header;
