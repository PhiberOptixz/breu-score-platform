import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//register candidate action
export const registerCandidate = createAsyncThunk(
  "registerCandidate",
  async (data, { rejectWithValue }) => {
    const response = await axios.post("/api/auth/registerCandidate", data);
    try {
      const result = await response.data;
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

//candidate sign-in
export const candidateSignIn = createAsyncThunk(
  "candidateSignIn",
  async (data, { rejectWithValue }) => {
    const response = await axios.post("/api/auth/candidateSignIn", data);
    try {
      const result = await response.data;
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
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
  extraReducers: {
    [registerCandidate.pending]: (state) => {
      state.loading = true;
    },
    [registerCandidate.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [registerCandidate.rejected]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [candidateSignIn.pending]: (state) => {
      state.loading = true;
    },
    [candidateSignIn.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [candidateSignIn.rejected]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export default auth.reducer;
