import React, { useState } from "react";
import "./Search.css";
import { SearchIcon } from "../Icons/Search";
// import * as users from "../../utils/githubApi";

function Search({ getUser }) {
  const [searchedUser, setSearchedUser] = useState("");

  const handleInputSearch = (e) => {
    setSearchedUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(searchedUser);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <SearchIcon className="form__icon" />
      <input
        onChange={handleInputSearch}
        value={searchedUser}
        className="form__input"
        placeholder="Search GitHub username…"
      />
      <button className="form__button">Search</button>
    </form>
  );
}

export default Search;
