import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { noteService } from "../service/noteService";

const initialState = {
  notes: [],
  error: null,
  loading: false,
  success: false,
};

export const getNotesByTask = createAsyncThunk(
  "note/getNotesByTask",
  async (taskId, thunkAPI) => {
    const { user } = thunkAPI.getState().auth;

    const res = await noteService.fetchGetNotesByTask(user, taskId);

    if (res["error"]) {
      return thunkAPI.rejectWithValue(res["error"]);
    }

    return res;
  },
);

export const createNote = createAsyncThunk(
  "note/createNote",
  async (data, thunkAPI) => {
    const { user } = thunkAPI.getState().auth;

    const res = await noteService.fetchCreateNote(user, data);

    if (res["error"]) {
      return thunkAPI.rejectWithValue(res["error"]);
    }

    return res;
  },
);

export const deleteNote = createAsyncThunk(
  "note/deleteNote",
  async (id, thunkAPI) => {
    const { user } = thunkAPI.getState().auth;

    const res = await noteService.fetchDeleteNote(user, id);

    if (res["error"]) {
      return thunkAPI.rejectWithValue(res["error"]);
    }

    return res;
  },
);

export const noteSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotesByTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNotesByTask.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(getNotesByTask.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.notes = [];
      })
      .addCase(createNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createNote.rejected, (state, action) => {
        state.error = action.payload;
        state.success = false;
        state.loading = false;
      })
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.error = action.payload;
        state.success = false;
        state.loading = false;
      });
  },
});

export const { reset } = noteSlice.actions;
export default noteSlice.reducer;
