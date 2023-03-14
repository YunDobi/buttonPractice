import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./feature/Slices";

export const store = configureStore({
  reducer: {
    user: UserReducer
  },
})