import axios from "axios";
export const instance = axios.create({
  baseURL: "https://66b31b0f7fba54a5b7eb6a77.mockapi.io",
});

export const requestAdverts = async () => {
  const { data } = await instance.get("/adverts");
  return data;
};
