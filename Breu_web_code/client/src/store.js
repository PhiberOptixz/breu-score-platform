import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/authSlice";
import believability from "./features/believabilitySlice";

export const store = configureStore({
  reducer: {
    auth,
    believability,
  },
});
