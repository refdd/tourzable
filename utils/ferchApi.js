import axios from "axios";

export const baseUrl = "https://new.tourzable.com/api";
export const fetchApi = async (url, token) => {
  const { data } = await axios
    .get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
