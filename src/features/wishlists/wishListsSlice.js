import { createSlice } from "@reduxjs/toolkit";

export const wishListsSlice = createSlice({
  name: "wishlists",
  initialState: {
    wishlistsProducts: [],
  },
  reducers: {
    add_to_wishlists(state, { payload }) {
      state.wishlistsProducts.push(payload);
    },
    remove_from_wishlists: (state, { payload }) => {
      state.wishlistsProducts = state.wishlistsProducts.filter(
        (pd) => pd.goods_id !== payload
      );
    },
  },
});

export const { add_to_wishlists, remove_from_wishlists } =
  wishListsSlice.actions;

export default wishListsSlice.reducer;
