import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";

//fetch candidates
export const fetchAllCandidates = createAsyncThunk(
  "fetchAllCandidates",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/admin/getAllCandidates");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch weightages
export const fetchAllWeightages = createAsyncThunk(
  "fetchAllWeightages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/weightage/getAllWeightages");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch candidate's B data
export const fetchCandidateBData = createAsyncThunk(
  "fetchCandidateBData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/admin/getCandidateBData/${data}`);
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Add candidate score
export const addScore = createAsyncThunk(
  "addScore",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/admin/addCandidateScore`,
        data.data
      );
      const result = response.data;
      SnackBar.success(response?.data?.message);
      data.navigate("/adminDashboard");
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

export const admin = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    error: null,
    candidateList: [],
    corporateList: [],
    candidateBData: {},
    parameterWeightages: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCandidates.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllCandidates.fulfilled, (state, action) => {
      state.loading = false;
      state.candidateList = action?.payload?.data;
    });
    builder.addCase(fetchAllCandidates.rejected, (state, action) => {
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
    builder.addCase(fetchCandidateBData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCandidateBData.fulfilled, (state, action) => {
      state.loading = false;
      state.candidateBData = action?.payload?.data;
    });
    builder.addCase(fetchCandidateBData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchAllWeightages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllWeightages.fulfilled, (state, action) => {
      state.loading = false;
      state.parameterWeightages = action?.payload?.data;
    });
    builder.addCase(fetchAllWeightages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default admin.reducer;
