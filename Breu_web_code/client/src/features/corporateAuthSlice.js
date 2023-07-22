import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";
import setAuthToken from "../common/setAuthToken";

//register corporate action
export const registerCorporate = createAsyncThunk(
  "registerCorporate",
  async (data, { rejectWithValue }) => {
    axios
      .post("/api/auth/registerCorporate", data.values)
      .then((response) => {
        const result = response.data;
        SnackBar.success(response?.data?.message);
        data.navigate("/corporate-sign-in");
        return result;
      })
      .catch((error) => {
        SnackBar.error(error?.response?.data?.message);
        return rejectWithValue(error?.response?.data);
      });
  }
);

//corporate sign-in
export const corporateSignIn = createAsyncThunk(
  "corporateSignIn",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      axios
        .post("/api/auth/corporateSignIn", data)
        .then(async (response) => {
          const result = response.data;
          const data = {
            token: result.token,
            role: "corporate",
          };
          // Set token to localstorage
          localStorage.setItem("breuai", JSON.stringify(data));
          // Set token to Auth Header
          setAuthToken(result.token);
          SnackBar.success(response?.data?.message);
          return await dispatch(corporateDetails());
        })
        .catch((error) => {
          SnackBar.error(error?.response?.data?.message);
          return rejectWithValue(error?.response?.data);
        });
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//clear corporate info
export const removeCorporateDetails = createAsyncThunk(
  "removeCorporateDetails",
  async (data, { rejectWithValue }) => {
    try {
      return {};
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//corporate details
export const corporateDetails = createAsyncThunk(
  "corporateDetails",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/auth/getCorporateDetails");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const auth = createSlice({
  name: "corporateAuth",
  initialState: {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(registerCorporate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerCorporate.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerCorporate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(corporateSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(corporateSignIn.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(corporateSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(corporateDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(corporateDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(corporateDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(removeCorporateDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeCorporateDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    });
    builder.addCase(removeCorporateDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default auth.reducer;
