import { fetchConfig } from "../utils/config";

const BASE_URL = "http://localhost:3000/api/notes";

const fetchGetNotesByTask = async (user, taskId) => {
  const res = await fetch(
    BASE_URL + "/note/" + taskId,
    fetchConfig("GET", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

const fetchCreateNote = async (user, data) => {
  const res = await fetch(
    BASE_URL + "/createNote",
    fetchConfig("POST", data, user.token),
  )
    .then((res) => {
      location.reload();
      return res.json();
    })
    .catch((err) => err);

  return res;
};

const fetchDeleteNote = async (user, id) => {
  const res = await fetch(
    BASE_URL + "/note/" + id,
    fetchConfig("DELETE", null, user.token),
  )
    .then((res) => res.json())
    .catch((err) => err);

  return res;
};

export const noteService = {
  fetchGetNotesByTask,
  fetchDeleteNote,
  fetchCreateNote,
};
