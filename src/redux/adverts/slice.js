import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../../constans/constans";
import { fetchAdverts, fetchAdvertsPagination } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: INITIAL_STATE.adverts,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdvertsPagination.pending, handlePending)
      .addCase(fetchAdvertsPagination.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (action.meta.arg.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
      })
      .addCase(fetchAdvertsPagination.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
