import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import * as users from "./utils/githubApi";

function App() {
  const [user, setUser] = useState("");
  const [error, serError] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = (data) => {
    users
      .searchUser(data)
      .then((result) => {
        setUser(result);
        serError(false);
      })
      .catch((err) => {
        console.log(err);
        serError(true);
      });
  };

  return (
    <div className="App">
      <Header />
      <Search getUser={getUser} error={error} />
      <Profile user={user} />
    </div>
  );
}

export default App;
