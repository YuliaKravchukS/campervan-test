import axios from "axios";
export const instance = axios.create({
  baseURL: "https://66b31b0f7fba54a5b7eb6a77.mockapi.io",
});

export const requestAdvertsPagination = async ({ page = 1 }) => {
  const { data } = await instance.get("/adverts", {
    params: {
      page: `${page}`,
      limit: 4,
    },
  });
  return data;
};

export const requestAdverts = async () => {
  const { data } = await instance.get("/adverts");
  return data;
};
