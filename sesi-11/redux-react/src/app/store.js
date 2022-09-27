import { configureStore } from "@reduxjs/toolkit";
// import usersReducer from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});