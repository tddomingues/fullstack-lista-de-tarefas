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
    fetchConfig("GET", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const getTask = async (id, user) => {
  const res = await fetch(
    url + "/task/" + id,
    fetchConfig("GET", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const getTasksDoneCollaboratively = async (user) => {
  const res = await fetch(
    url + "/collaboration",
    fetchConfig("GET", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  console.log(user);

  return res;
};

export const taskService = {
  postCreateTask,
  getTasksByUser,
  getTask,
  getTasksDoneCollaboratively,
};
