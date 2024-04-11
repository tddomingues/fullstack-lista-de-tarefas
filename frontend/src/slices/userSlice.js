import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../service/userService";

const initialState = {
  user: {},
  loading: false,
  error: null,
  sucess: false,
};

export const updateProfile = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    const token = thunkAPI.getState().user.user.token;
    console.log(token);

    const res = await authService.updateProfile(data, token);

    if (res["error"]) {
      thunkAPI.rejectWithValue(res["error"]);
    }

    return res;
  },
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.sucess = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
