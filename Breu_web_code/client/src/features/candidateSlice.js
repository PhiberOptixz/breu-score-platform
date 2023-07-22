import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";
import { candidateDetails } from "./authSlice";

//fetch candidate Score data
export const fetchCandidateScores = createAsyncThunk(
  "fetchCandidateScores",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/score/getCandidateScoreById/${data}`
      );
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Post Declaration
export const postDeclarationData = createAsyncThunk(
  "postDeclarationData",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        "/api/candidate/postDeclarationData",
        data.apiData
      );
      SnackBar.success(response?.data?.message);
      data?.navigate("/breuscore");
      return await dispatch(candidateDetails());
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const candidate = createSlice({
  name: "candidate",
  initialState: {
    loading: false,
    error: null,
    candidateScore: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCandidateScores.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCandidateScores.fulfilled, (state, action) => {
      state.loading = false;
      state.candidateScore = action?.payload?.data;
    });
    builder.addCase(fetchCandidateScores.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postDeclarationData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postDeclarationData.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(postDeclarationData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default candidate.reducer;
