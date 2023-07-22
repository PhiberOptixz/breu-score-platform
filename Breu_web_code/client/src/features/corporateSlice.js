import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";

//fetch corporate candidates
export const fetchCorporateCandidates = createAsyncThunk(
  "fetchCorporateCandidates",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/corporate/getCorporateCandidates");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch corporate details
export const fetchAllCorporates = createAsyncThunk(
  "fetchAllCorporates",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/corporate/getAllCorporates");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const corporate = createSlice({
  name: "corporate",
  initialState: {
    loading: false,
    error: null,
    candidateList: [],
    corporateList: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCorporateCandidates.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCorporateCandidates.fulfilled, (state, action) => {
      state.loading = false;
      state.candidateList = action?.payload?.data;
    });
    builder.addCase(fetchCorporateCandidates.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchAllCorporates.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllCorporates.fulfilled, (state, action) => {
      state.loading = false;
      state.corporateList = action?.payload?.data;
    });
    builder.addCase(fetchAllCorporates.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default corporate.reducer;
