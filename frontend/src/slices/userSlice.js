import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

export const register = createAsyncThunk("user/register", async () => {});

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {},
});

export default userSlice.reducer;
