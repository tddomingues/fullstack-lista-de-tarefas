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

const updateTask = async (data, id, user) => {
  const res = await fetch(
    url + "/updatetask/" + id,
    fetchConfig("PUT", data, user.token),
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

const getTaskBySearch = async (search, user) => {
  const res = await fetch(
    url + "/searchTask/?search=" + search,
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

  return res;
};

const deleteTask = async (id, user) => {
  const res = await fetch(
    url + "/deleteTask/" + id,
    fetchConfig("DELETE", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

export const taskService = {
  postCreateTask,
  getTasksByUser,
  getTask,
  getTasksDoneCollaboratively,
  updateTask,
  deleteTask,
  getTaskBySearch,
};
