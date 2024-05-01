const url = "http://localhost:3000/api/tasks";
import { fetchConfig } from "../utils/config";

const postCreateTask = async (data, user) => {
  const res = await fetch(
    url + "/newTask",
    fetchConfig("POST", data, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const getTasksByUser = async (user) => {
  const res = await fetch(
    url + "/usertasks",
    fetchConfig("GET", user.userId, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

export const taskService = { postCreateTask, getTasksByUser };
