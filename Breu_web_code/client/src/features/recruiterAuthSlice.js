import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";
import setAuthToken from "../common/setAuthToken";

//register recruiter action
export const registerRecruiter = createAsyncThunk(
  "registerRecruiter",
  async (data, { rejectWithValue }) => {
    axios
      .post("/api/auth/registerRecruiter", data.values)
      .then((response) => {
        const result = response.data;
        SnackBar.success(response?.data?.message);
        data.navigate("/recruiter-sign-in");
        return result;
      })
      .catch((error) => {
        SnackBar.error(error?.response?.data?.message);
        return rejectWithValue(error?.response?.data);
      });
  }
);

//recruiter sign-in
export const recruiterSignIn = createAsyncThunk(
  "recruiterSignIn",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      axios
        .post("/api/auth/recruiterSignIn", data)
        .then(async (response) => {
          const result = response.data;
          // Set token to localstorage
          localStorage.setItem("breuai", JSON.stringify(result.token));
          // Set token to Auth Header
          setAuthToken(result.token);
          SnackBar.success(response?.data?.message);
          return await dispatch(recruiterDetails());
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

//recruiter details
export const recruiterDetails = createAsyncThunk(
  "recruiterDetails",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/auth/getRecruiterDetails");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//remove recruiter details
export const removeRecruiterDetails = createAsyncThunk(
  "removeRecruiterDetails",
  async (data, { rejectWithValue }) => {
    try {
      return {};
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const auth = createSlice({
  name: "recruiterAuth",
  initialState: {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(registerRecruiter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerRecruiter.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerRecruiter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(recruiterSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(recruiterSignIn.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(recruiterSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(recruiterDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(recruiterDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(recruiterDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(removeRecruiterDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeRecruiterDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    });
    builder.addCase(removeRecruiterDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default auth.reducer;
