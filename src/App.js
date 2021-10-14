import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import * as users from "./utils/githubApi";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = (data) => {
    users
      .searchUser(data)
      .then((result) => {
        setUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      <Search getUser={getUser} />
      <Profile user={user} />
    </div>
  );
}

export default App;
