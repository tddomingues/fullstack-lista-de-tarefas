import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../service/userService";

const initialState = {
  user: {},
  users: [],
  loading: false,
  error: null,
  success: false,
  message: null,
};

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;

    const res = await authService.fetchUpdateProfile(data, user.token);

    if (res["error"]) {
      return thunkAPI.rejectWithValue(res["error"]);
    }

    return res;
  },
);

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  const user = thunkAPI.getState().auth.user;

  const res = await authService.fetchGetUser(user.token);

  return res;
});

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;

    const res = await authService.fetchGetUsers(user.token);

    return res;
  },
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loading = false;
        state.success = true;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
