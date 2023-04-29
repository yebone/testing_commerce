import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "bag",
  initialState: {
    bagProducts: [],
    //Quantity of products in the bag to show in Navbar beside Bag icon
    bagQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    add_to_bag(state, { payload }) {
      // need to update the bad quantity whether is it already in the bag or not
      state.bagQuantity += 1;
      state.totalPrice += Number(payload.salePrice.amount);

      //checking new added product ? already in the bag products
      const pd = state.bagProducts.find(
        (pd) => pd.goods_id === payload.goods_id
      );

      if (pd === undefined) {
        // if added product is not already in the bag products then add with quantity:1
        state.bagProducts.push({ ...payload, quantity: 1 });
      } else {
        // if added product is already in the bag products then need to update quantity of that product
        pd.quantity += 1;
      }
    },

    // increase and decrease the quantities of the product
    increase_quantity(state, { payload }) {
      state.bagProducts.find(
        (pd) => pd.goods_id === payload.goods_id
      ).quantity += 1;

      state.totalPrice += Number(payload.amount);
    },
    decrease_quantity(state, { payload }) {
      state.bagProducts.find(
        (pd) => pd.goods_id === payload.goods_id
      ).quantity -= 1;

      state.totalPrice -= Number(payload.amount);
    },
  },
});

export const { add_to_bag, increase_quantity, decrease_quantity } =
  bagSlice.actions;

export default bagSlice.reducer;
