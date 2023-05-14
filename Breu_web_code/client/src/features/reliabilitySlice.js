import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";
import setAuthToken from "../common/setAuthToken";

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

//add reliability data
export const addReliabilityData = createAsyncThunk(
  "addReliabilityData",
  async (data, { rejectWithValue }) => {
    axios
      .post("/api/reliability/addReliabilityData", data.data)
      .then((response) => {
        const result = response.data;
        SnackBar.success(response?.data?.message);
        data.navigate("/undesirability");
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
  },
});

export default auth.reducer;
