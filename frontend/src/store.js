import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import taskSlice from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    task: taskSlice,
  },
});

export default store;
