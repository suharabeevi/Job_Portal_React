import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { employerData } from "../../../api/employer/employerDetails";

export const fetchEmployer = createAsyncThunk(
  "employer/fetchEmployer",
  async () => {
    const response = await employerData();
    return response;
  }
);

interface EmployerDetailsState {
  employerEmail: string | null;
  employerDetails: any;
  error: string | null;
  isActive:boolean;
  status: string;
  isLoggedIn: boolean;
}

const initialState: EmployerDetailsState = {
  employerEmail: null,
  employerDetails: null,
  isActive:false,
  error: null,
  status: "idle",
  isLoggedIn: false,
};

const employerDetailsSlice = createSlice({
  name: "employerDetails",
  initialState,
  reducers: {
    clearEmployerDetails: (state) => {
      state.employerDetails = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    employerLoginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    employerLogout: (state) => {
      state.isLoggedIn = false;
    },
    employerEmail: (state, action: PayloadAction<string>) => {
      state.employerEmail = action.payload;
    },
    clearEmployerEmail: (state) => {
      state.employerEmail = null;
    },
    blockEmployer: (state) => {
      state.isActive = false;
    },
    // Add a new action to unblock the employer
    unblockEmployer: (state) => {
      state.isActive =true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployer.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.employerDetails = action.payload;
      })
      .addCase(fetchEmployer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const {
  clearEmployerDetails,
  setError,
  employerLoginSuccess,
  employerLogout,
  employerEmail,
  clearEmployerEmail,
  blockEmployer,
  unblockEmployer,
} = employerDetailsSlice.actions;

export default employerDetailsSlice.reducer;