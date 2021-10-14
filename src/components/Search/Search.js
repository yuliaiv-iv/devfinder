import React, { useState, useContext } from "react";
import "./Search.css";
import { SearchIcon } from "../Icons/Search";
import ThemeContext from "../../contexts/ThemeContext";

function Search({ getUser, error }) {
  const [searchedUser, setSearchedUser] = useState("");
  const { dark } = useContext(ThemeContext);

  const handleInputSearch = (e) => {
    setSearchedUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(searchedUser);
  };

  return (
    <form className={`form ${dark ? "form_dark" : ""}`} onSubmit={handleSubmit}>
      <SearchIcon className="form__icon" />
      <input
        onChange={handleInputSearch}
        value={searchedUser}
        className="form__input"
        placeholder="Search GitHub username…"
      />
      {error ? <p className="form__error">No results</p> : null}
      <button className="form__button">Search</button>
    </form>
  );
}

export default Search;
