const API_URL = "https://animal-api-two.vercel.app/";

const transUrl = (name) => {
  switch (name) {
    case "penguin":
    case "koala":
    case "panda":
      return `${API_URL}${name}`;
    case "all":
      return API_URL;
    default:
      return API_URL;
  }
};

export const request = async (name) => {
  try {
    let res = await fetch(transUrl(name));
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};
