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
    // from navbar
    case "TAB":
      console.log("tab", action.payload);
      return {
        ...state,
        cat_id: action.payload.cat_id ? action.payload.cat_id : 2030,
        channelType_id: action.payload.id,
      };
    case "ROOT":
      console.log("root", action.payload);
      return {
        ...state,
        root_id: action.payload ? action.payload : 30046800294,
      };
    case "SEARCH_KEY_WORDS":
      return {
        ...state,
        search_key_words: action.payload,
      };

    //default
    default:
      return state;
  }
};
