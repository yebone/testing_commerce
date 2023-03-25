export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, products: [...state.products, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        products: state.products.filter((pd) => pd.goods_id !== action.payload),
      };

    default:
      return state;
  }
};
