import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskService } from "../service/taskService";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  success: null,
};

export const createTask = createAsyncThunk(
  "task/createtask",
  async (data, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;

    const res = await taskService.postCreateTask(data, user);

    if (res.error) {
      return thunkAPI.rejectWithValue(res);
    }

    return res;
  },
);

export const tasksByUser = createAsyncThunk(
  "task/tasksbyid",
  async (_, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;

    const res = await taskService.getTasksByUser(user);

    if (res.error) {
      return thunkAPI.rejectWithValue(res);
    }

    return res;
  },
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
      state.success = null;
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
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(tasksByUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(tasksByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(tasksByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
