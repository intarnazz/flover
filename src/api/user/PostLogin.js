const API_URL = import.meta.env.VITE_API_URL;

export async function PostLogin(login, password) {
  return await fetch(`${API_URL}api/PostLogin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.code == 200) {
        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
      }
    })
    .catch((e) => {
      throw e;
    });
}
