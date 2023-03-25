import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const initialState = {
    products: [],
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
