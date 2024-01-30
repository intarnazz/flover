const API_URL = import.meta.env.VITE_API_URL;

export async function GetFlovers() {
    return await fetch(`${API_URL}api/GetFlovers`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  