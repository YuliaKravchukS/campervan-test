import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAdverts } from "../../api/api";

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
