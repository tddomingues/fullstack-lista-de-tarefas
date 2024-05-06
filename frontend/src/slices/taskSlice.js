import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskService } from "../service/taskService";

const initialState = {
  tasks: [],
  task: {},
  loading: false,
  error: null,
  success: false,
};

export const createTask = createAsyncThunk(
  "task/createTask",
  async (data, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;

    const res = await taskService.fetchCreateTask(data, user);

    if (res.error) {
      return thunkAPI.rejectWithValue(res);
    }

    return res;
  },
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async ({ data, id }, thunkAPI) => {
    const { user } = thunkAPI.getState().auth;
    const res = await taskService.fetchUpdateTask(data, id, user);

    if (res.error) return thunkAPI.rejectWithValue(res);

    return res;
  },
);

export const getTasksByUser = createAsyncThunk(
  "task/getTasksByUser",
  async (_, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;

    const res = await taskService.fetchGetTasksByUser(user);

    if (res.error) {
      return thunkAPI.rejectWithValue(res);
    }

    return res;
  },
);

export const getTask = createAsyncThunk(
  "task/getTask",
  async (id, thunkAPI) => {
    const { user } = thunkAPI.getState().auth;

    const res = await taskService.fetchGetTask(id, user);

    if (res.error) {
      return thunkAPI.rejectWithValue(res);
    }

    return res;
  },
);

export const getTaskBySearch = createAsyncThunk(
  "task/getTaskBySearch",
  async (search, thunkAPI) => {
    const { user } = thunkAPI.getState().auth;

    const res = await taskService.fetchGetTaskBySearch(search, user);

    if (res.error) {
      return thunkAPI.rejectWithValue(res);
    }

    return res;
  },
);

export const getTasksDoneCollaboratively = createAsyncThunk(
  "task/getTasksDoneCollaboratively",
  async (_, thunkAPI) => {
    const { user } = thunkAPI.getState().auth;

    const res = await taskService.fechGetTasksDoneCollaboratively(user);

    if (res.error) return thunkAPI.rejectWithValue(res);

    return res;
  },
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id, thunkAPI) => {
    const { user } = thunkAPI.getState().auth;
    const res = await taskService.fetchDeleteTask(id, user);

    if (res.error) return thunkAPI.rejectWithValue(res);

    return res;
  },
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.success = true;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.success = false;
      })
      .addCase(getTasksByUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTasksByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasksByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.task = {};
      })
      .addCase(getTasksDoneCollaboratively.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTasksDoneCollaboratively.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasksDoneCollaboratively.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.tasks = [];
      })
      .addCase(updateTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.task = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload.error;
        state.task = {};
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getTaskBySearch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTaskBySearch.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
        state.success = true;
      })
      .addCase(getTaskBySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        state.success = false;
      });
  },
});

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
