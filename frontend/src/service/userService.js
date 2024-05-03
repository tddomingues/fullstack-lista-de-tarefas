import { fetchConfig } from "../utils/config";

const url = "http://localhost:3000/api/users";

const updateProfile = async (data, token) => {
  const res = await fetch(url + "/update", fetchConfig("PUT", data, token))
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const getUser = async (id, token) => {
  const res = await fetch(url + "/" + id, fetchConfig("GET", null, token))
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const getUsers = async (token) => {
  const res = await fetch(url + "/", fetchConfig("GET", null, token))
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

export const authService = {
  updateProfile,
  getUser,
  getUsers,
};
