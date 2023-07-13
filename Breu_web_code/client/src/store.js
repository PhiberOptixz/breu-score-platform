import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/authSlice";
import believability from "./features/believabilitySlice";
import reliability from "./features/reliabilitySlice";
import recruiterAuthSlice from "./features/recruiterAuthSlice";
import corporateAuthSlice from "./features/corporateAuthSlice";

export const store = configureStore({
  reducer: {
    auth,
    believability,
    reliability,
    corporateAuth: corporateAuthSlice,
    recruiterAuth: recruiterAuthSlice,
  },
});
