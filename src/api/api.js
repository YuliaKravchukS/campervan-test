import axios from "axios";
export const instance = axios.create({
  baseURL: "https://mockapi.io/clone/66b31b0f7fba54a5b7eb6a78/adverts",
});

export const requestAdverts = async () => {
  const { data } = await instance.get();
  return data;
};
