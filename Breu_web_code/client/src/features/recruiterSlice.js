import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";

//fetch recruiter candidates
export const fetchRecruiterCandidates = createAsyncThunk(
  "fetchRecruiterCandidates",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/recruiter/getRecruiterCandidates");
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

//fetch corporate details
export const sendCandidateToCorporate = createAsyncThunk(
  "sendCandidateToCorporate",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        "/api/recruiter/sendCandidateToCorporate",
        data
      );
      SnackBar.success(response?.data?.message);
      return await dispatch(fetchRecruiterCandidates());
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const recruiter = createSlice({
  name: "recruiter",
  initialState: {
    loading: false,
    error: null,
    candidateList: [],
    corporateList: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecruiterCandidates.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecruiterCandidates.fulfilled, (state, action) => {
      state.loading = false;
      state.candidateList = action?.payload?.data;
    });
    builder.addCase(fetchRecruiterCandidates.rejected, (state, action) => {
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

export default recruiter.reducer;
