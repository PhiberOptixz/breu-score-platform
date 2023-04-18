import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";

//get Dropdown data
export const getDomainData = createAsyncThunk(
  "getDomainData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/believability/getAllDomains");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get Dropdown data
export const getEducationData = createAsyncThunk(
  "getEducationData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/believability/getAllEducations");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get Dropdown data
export const getExperienceData = createAsyncThunk(
  "getExperienceData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/believability/getAllExperiences");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get Dropdown data
export const getLanguageData = createAsyncThunk(
  "getLanguageData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/believability/getAllLanguages");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get Dropdown data
export const getProficiencyData = createAsyncThunk(
  "getProficiencyData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "/api/believability/getAllProficiencies"
      );
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get Dropdown data
export const getRoleData = createAsyncThunk(
  "getRoleData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/believability/getAllRoles");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const believability = createSlice({
  name: "believability",
  initialState: {
    loading: false,
    error: null,
    domainData: [],
    educationData: [],
    experienceData: [],
    languageData: [],
    proficiencyData: [],
    roleData: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getDomainData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDomainData.fulfilled, (state, action) => {
      state.loading = false;
      state.domainData = action.payload.data;
    });
    builder.addCase(getDomainData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getEducationData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEducationData.fulfilled, (state, action) => {
      state.loading = false;
      state.educationData = action.payload.data;
    });
    builder.addCase(getEducationData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getExperienceData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getExperienceData.fulfilled, (state, action) => {
      state.loading = false;
      state.experienceData = action.payload.data;
    });
    builder.addCase(getExperienceData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getLanguageData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLanguageData.fulfilled, (state, action) => {
      state.loading = false;
      state.languageData = action.payload.data;
    });
    builder.addCase(getLanguageData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getProficiencyData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProficiencyData.fulfilled, (state, action) => {
      state.loading = false;
      state.proficiencyData = action.payload.data;
    });
    builder.addCase(getProficiencyData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getRoleData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRoleData.fulfilled, (state, action) => {
      state.loading = false;
      state.roleData = action.payload.data;
    });
    builder.addCase(getRoleData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default believability.reducer;
