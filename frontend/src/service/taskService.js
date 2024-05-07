import { fetchConfig } from "../utils/config";

const BASE_URL = "http://localhost:3000/api/tasks";

const fetchCreateTask = async (data, user) => {
  const res = await fetch(
    BASE_URL + "/createTask",
    fetchConfig("POST", data, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const fetchUpdateTask = async (data, id, user) => {
  const res = await fetch(
    BASE_URL + "/updateTask/" + id,
    fetchConfig("PUT", data, user.token),
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => err);

  return res;
};

const fetchGetTasksByUser = async (user) => {
  const res = await fetch(
    BASE_URL + "/userTasks",
    fetchConfig("GET", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const fetchGetTask = async (id, user) => {
  const res = await fetch(
    BASE_URL + "/task/" + id,
    fetchConfig("GET", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const fetchGetTaskBySearch = async (search, user) => {
  const res = await fetch(
    BASE_URL + "/search/?search=" + search,
    fetchConfig("GET", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const fechGetTasksDoneCollaboratively = async (user) => {
  const res = await fetch(
    BASE_URL + "/collaborationTasks",
    fetchConfig("GET", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const fetchDeleteTask = async (id, user) => {
  const res = await fetch(
    BASE_URL + "/deleteTask/" + id,
    fetchConfig("DELETE", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

export const taskService = {
  fetchCreateTask,
  fetchGetTasksByUser,
  fetchUpdateTask,
  fetchGetTask,
  fetchGetTaskBySearch,
  fechGetTasksDoneCollaboratively,
  fetchDeleteTask,
};
