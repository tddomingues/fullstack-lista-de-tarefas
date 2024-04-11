const url = "http://localhost:3000/api/users";
import { fetchConfig } from "../utils/config";

const registerRequest = async (data) => {
  const user = await fetch(url + "/register", fetchConfig("POST", data))
    .then((res) => res.json())
    .catch((err) => err);

  return user;
};

const loginRequest = async (data, token) => {
  const res = await fetch(url + "/login", fetchConfig("POST", data, token))
    .then((res) => res.json())
    .catch((err) => err);
  return res;
};

export const authService = {
  registerRequest,
  loginRequest,
};
