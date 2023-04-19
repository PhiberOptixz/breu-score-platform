import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";
import setAuthToken from "../common/setAuthToken";

//register candidate action
export const registerCandidate = createAsyncThunk(
  "registerCandidate",
  async (data, { rejectWithValue }) => {
    axios
      .post("/api/auth/registerCandidate", data)
      .then((response) => {
        const result = response.data;
        SnackBar.success(response?.data?.message);
        return result;
      })
      .catch((error) => {
        SnackBar.error(error?.response?.data?.message);
        return rejectWithValue(error?.response?.data);
      });
  }
);

//candidate sign-in
export const candidateSignIn = createAsyncThunk(
  "candidateSignIn",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      axios
        .post("/api/auth/candidateSignIn", data)
        .then(async (response) => {
          const result = response.data;
          // Set token to localstorage
          localStorage.setItem("breuai", JSON.stringify(result.token));
          // Set token to Auth Header
          setAuthToken(result.token);
          SnackBar.success(response?.data?.message);
          return await dispatch(candidateDetails());
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

//candidate details
export const candidateDetails = createAsyncThunk(
  "candidateDetails",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/auth/getCandidateDetails");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const auth = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(registerCandidate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerCandidate.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerCandidate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(candidateSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(candidateSignIn.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(candidateSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(candidateDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(candidateDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(candidateDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default auth.reducer;
