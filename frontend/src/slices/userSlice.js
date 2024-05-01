import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../service/userService";

const initialState = {
  user: {},
  loading: false,
  error: null,
  success: false,
  message: null,
};

export const updateProfile = createAsyncThunk(
  "user/updateprofile",
  async (data, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;

    const res = await authService.updateProfile(data, user.token);

    if (res["error"]) {
      return thunkAPI.rejectWithValue(res["error"]);
    }

    return res;
  },
);

export const getUser = createAsyncThunk(
  "user/getuser",
  async (id, thunkAPI) => {
    const user = thunkAPI.getState().auth.user;

    const res = await authService.getUser(id, user.token);

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
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
