import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/authSlice";
import believability from "./features/believabilitySlice";
import reliability from "./features/reliabilitySlice";

export const store = configureStore({
  reducer: {
    auth,
    believability,
    reliability,
  },
});
