import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { authService } from "../service/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  //armazena um objeto '{userId, token}' no momento do login ou registro
  user: user ? user : null,
  error: null,
  loading: false,
  sucess: false,
};

export const register = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    const res = await authService.registerRequest(data);

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
  const res = await authService.loginRequest(data);

  if (res["error"]) {
    return thunkAPI.rejectWithValue(res["error"]);
  }

  if (res.userId) {
    localStorage.setItem("user", JSON.stringify(res));
  }

  return res;
});

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.sucess = false;
    },
    logout: (state) => {
      state.user = null;
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

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
