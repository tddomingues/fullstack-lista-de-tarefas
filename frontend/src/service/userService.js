import { fetchConfig } from "../utils/config";

const url = "http://localhost:3000/api/users";

const updateProfileRequest = async (data, token) => {
  const res = await fetch(url + "/", fetchConfig("PUT", data, token))
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

export const authService = {
  updateProfileRequest,
};
