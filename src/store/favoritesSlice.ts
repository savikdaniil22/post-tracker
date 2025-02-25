import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState } from "../types/types";

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      if (state.favorites.includes(postId)) {
        state.favorites = state.favorites.filter((id) => id !== postId);
      } else {
        state.favorites.push(postId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
