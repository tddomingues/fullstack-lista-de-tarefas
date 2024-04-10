import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { userService } from "../service/userService";

const user = localStorage.getItem("user");

const initialState = {
  user: user ? user : null,
  error: null,
  loading: false,
  sucess: false,
};

export const register = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    const res = await userService.registerRequest(data);

    if (res["error"]) {
      return thunkAPI.rejectWithValue(res["error"]);
    }

    if (res.userId) {
      localStorage.setItem("user", res.userId);
    }

    return res;
  },
);

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  const res = await userService.loginRequest(data);

  if (res["error"]) {
    return thunkAPI.rejectWithValue(res["error"]);
  }

  if (res.userId) {
    localStorage.setItem("user", res.userId);
  }

  return res;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  // extraReducers: {
  //   [register.fulfilled]: (state, action) => {
  //     state.user = action.payload; //dado enviado no dispatch
  //   },
  // },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.sucess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.sucess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
        state.sucess = false;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.sucess = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.payload;
        state.sucess = false;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
