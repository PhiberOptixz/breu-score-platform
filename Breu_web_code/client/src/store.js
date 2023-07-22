import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/authSlice";
import believability from "./features/believabilitySlice";
import reliability from "./features/reliabilitySlice";
import recruiterAuthSlice from "./features/recruiterAuthSlice";
import corporateAuthSlice from "./features/corporateAuthSlice";
import recruiterSlice from "./features/recruiterSlice";
import corporateSlice from "./features/corporateSlice";
import adminAuthSlice from "./features/adminAuthSlice";
import adminSlice from "./features/adminSlice";
import candidateSlice from "./features/candidateSlice";

export const store = configureStore({
  reducer: {
    auth,
    believability,
    reliability,
    corporateAuth: corporateAuthSlice,
    recruiterAuth: recruiterAuthSlice,
    recruiterSlice,
    corporateSlice,
    adminAuthSlice,
    adminSlice,
    candidateSlice,
  },
});
