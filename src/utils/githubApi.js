export const searchUser = (user) => {
  let apiUrl = 'https://api.github.com/users/octocat';
  if (user) apiUrl = `https://api.github.com/users/${user}`;

  return fetch(apiUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Something went wrong: ${res.status}`);
    })
    .then((data) => {
      return data;
    });
};
