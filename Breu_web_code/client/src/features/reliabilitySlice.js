import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";
import { candidateDetails } from "./authSlice";

//fetch questions
export const fetchQuestions = createAsyncThunk(
  "fetchQuestions",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/reliability/fetchQuestions");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch reliability results
export const fetchReliabilityResults = createAsyncThunk(
  "fetchReliabilityResults",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/reliability/getReliabilityResults/${data}`
      );
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch reliability data
export const fetchReliabilityData = createAsyncThunk(
  "fetchReliabilityData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/reliability/getReliabilityData`);
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//add reliability data
export const addReliabilityData = createAsyncThunk(
  "addReliabilityData",
  async (data, { rejectWithValue, dispatch }) => {
    axios
      .post("/api/reliability/addReliabilityData", data.data)
      .then((response) => {
        const result = response.data;
        SnackBar.success(response?.data?.message);
        data.navigate("/emotional");
        dispatch(candidateDetails());
        return result;
      })
      .catch((error) => {
        SnackBar.error(error?.response?.data?.message);
        return rejectWithValue(error?.response?.data);
      });
  }
);

export const auth = createSlice({
  name: "reliability",
  initialState: {
    loading: false,
    error: null,
    questionsData: null,
    reliabilityResults: null,
    candidateReliabilityData: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questionsData = action?.payload?.data;
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addReliabilityData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addReliabilityData.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addReliabilityData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchReliabilityResults.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReliabilityResults.fulfilled, (state, action) => {
      state.loading = false;
      state.reliabilityResults = action?.payload?.reliabilityScore;
    });
    builder.addCase(fetchReliabilityResults.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchReliabilityData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReliabilityData.fulfilled, (state, action) => {
      state.loading = false;
      state.candidateReliabilityData = action?.payload?.data;
    });
    builder.addCase(fetchReliabilityData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default auth.reducer;
