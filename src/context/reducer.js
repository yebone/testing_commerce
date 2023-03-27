export const reducer = (state, action) => {
  switch (action.type) {
    //wishlist action;
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishListProducts: [...state.wishListProducts, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishListProducts: state.wishListProducts.filter(
          (pd) => pd.goods_id !== action.payload
        ),
      };
    //Add to Bag action;
    case "ADD_TO_BAG":
      return {
        ...state,
        addToBagProducts: [...state.addToBagProducts, action.payload],
      };

    default:
      return state;
  }
};
