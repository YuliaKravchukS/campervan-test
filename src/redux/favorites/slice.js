import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../../constans/constans";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE.favorites,
  reducers: {
    addFavorite(state, action) {
      const id = action.payload;
      if (!state.items.includes(id)) {
        state.items.push(id);
      }
    },

    removeFavorite(state, action) {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
