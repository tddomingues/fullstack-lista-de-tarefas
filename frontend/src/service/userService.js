import { fetchConfig } from "../utils/config";

const BASE_URL = "http://localhost:3000/api/users";

const fetchUpdateProfile = async (data, token) => {
  const res = await fetch(BASE_URL + "/update", fetchConfig("PUT", data, token))
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const fetchGetUser = async (token) => {
  const res = await fetch(BASE_URL + "/user", fetchConfig("GET", null, token))
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const fetchGetUsers = async (token) => {
  const res = await fetch(BASE_URL + "/users", fetchConfig("GET", null, token))
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

export const authService = {
  fetchUpdateProfile,
  fetchGetUser,
  fetchGetUsers,
};
