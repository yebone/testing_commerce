import { configureStore } from "@reduxjs/toolkit";
import { wishListsSlice } from "../features/wishlists/wishListsSlice";
import { bagSlice } from "../features/bag/bagSlice";

export default configureStore({
  reducer: {
    wishlists: wishListsSlice.reducer,
    bag: bagSlice.reducer,
  },
});
