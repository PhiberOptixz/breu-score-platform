import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SnackBar } from "../common/Snackbar";
import setAuthToken from "../common/setAuthToken";

//register admin action
export const registerAdmin = createAsyncThunk(
  "registerAdmin",
  async (data, { rejectWithValue }) => {
    axios
      .post("/api/auth/registerAdmin", data.values)
      .then((response) => {
        const result = response.data;
        SnackBar.success(response?.data?.message);
        data.navigate("/admin-sign-in");
        return result;
      })
      .catch((error) => {
        SnackBar.error(error?.response?.data?.message);
        return rejectWithValue(error?.response?.data);
      });
  }
);

//admin sign-in
export const adminSignIn = createAsyncThunk(
  "adminSignIn",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      axios
        .post("/api/auth/adminSignIn", data)
        .then(async (response) => {
          const result = response.data;
          const data = {
            token: result.token,
            role: "admin",
          };
          // Set token to localstorage
          localStorage.setItem("breuai", JSON.stringify(data));
          // Set token to Auth Header
          setAuthToken(result.token);
          SnackBar.success(response?.data?.message);
          return await dispatch(adminDetails());
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

//admin details
export const adminDetails = createAsyncThunk(
  "adminDetails",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/auth/getAdminDetails");
      const result = response.data;
      return result;
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//remove admin details
export const removeAdminDetails = createAsyncThunk(
  "removeAdminDetails",
  async (data, { rejectWithValue }) => {
    try {
      return {};
    } catch (error) {
      SnackBar.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const auth = createSlice({
  name: "adminAuth",
  initialState: {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: {},
  },
  extraReducers: (builder) => {
    builder.addCase(registerAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerAdmin.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(registerAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(adminSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(adminSignIn.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(adminSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(adminDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(adminDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(adminDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(removeAdminDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeAdminDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    });
    builder.addCase(removeAdminDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default auth.reducer;
