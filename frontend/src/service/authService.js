import { fetchConfig } from "../utils/config";

const BASE_URL = "http://localhost:3000/api/auth";

const fetchRegister = async (data) => {
  const user = await fetch(BASE_URL + "/register", fetchConfig("POST", data))
    .then((res) => res.json())
    .catch((err) => err);

  return user;
};

const fetchLogin = async (data, token) => {
  const res = await fetch(BASE_URL + "/login", fetchConfig("POST", data, token))
    .then((res) => res.json())
    .catch((err) => err);
  return res;
};

export const authService = {
  fetchLogin,
  fetchRegister,
};
