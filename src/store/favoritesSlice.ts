import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadFavorites = (): number[] => {
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
};

interface FavoritesState {
  favorites: number[];
}

const initialState: FavoritesState = {
  favorites: loadFavorites(),
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
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
