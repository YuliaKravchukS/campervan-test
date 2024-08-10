import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAdverts, requestAdvertsPagination } from "../../api/api";

export const fetchAdverts = createAsyncThunk(
  "adverts/fatchAll",
  async (_, thunkApi) => {
    try {
      const data = await requestAdverts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchAdvertsPagination = createAsyncThunk(
  "adverts/fatchAllWithPagination",
  async ({ page }, thunkApi) => {
    try {
      const data = await requestAdvertsPagination({ page });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
