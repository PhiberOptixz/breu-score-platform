import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";
import { candidateDetails } from "./authSlice";

//add intelligibility data
export const uploadCandidateVideo = createAsyncThunk(
  "uploadCandidateVideo",
  async (data, { rejectWithValue, dispatch }) => {
    axios
      .post("/api/intelligibility/uploadCandidateVideo", data)
      .then((response) => {
        const result = response.data;
        SnackBar.success(response?.data?.message);
        dispatch(candidateDetails());
        if (data.get("navigate")) {
          const navigate = data.get("navigate");
          navigate("/undesirability");
        }
        return result;
      })
      .catch((error) => {
        SnackBar.error(error?.response?.data?.message);
        return rejectWithValue(error?.response?.data);
      });
  }
);

export const auth = createSlice({
  name: "intelligibility",
  initialState: {
    loading: false,
    error: null,
    questionsData: null,
  },
  extraReducers: (builder) => {
    builder.addCase(uploadCandidateVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadCandidateVideo.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(uploadCandidateVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default auth.reducer;
