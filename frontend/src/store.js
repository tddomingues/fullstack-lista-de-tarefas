import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import taskSlice from "./slices/taskSlice";
import noteSlice from "./slices/noteSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    task: taskSlice,
    note: noteSlice,
  },
});

export default store;
