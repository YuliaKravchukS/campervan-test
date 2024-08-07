import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../../constans/constans";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: INITIAL_STATE,
});

export const advertsReducer = advertsSlice.reducer;
