import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";
import { nodeContentWomenDress, tabs } from "../storage";
import axios from "axios";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [nodeContent, setNodeContent] = useState(nodeContentWomenDress);

  const initialState = {
    navigationTabs: tabs.info.tabs,
    wishListProducts: [],
    addToBagProducts: [],
    //id field returned from root button
    channelType_id: 2,
    cat_id: 2030,
    root_id: 30046800294,
    search_key_words: "",
    //for development purpose
    root_name: "DRESSES",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  ////////////////////production;

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://unofficial-shein.p.rapidapi.com/navigations/get-node-content",
  //     params: {
  //       cat_id: state.cat_id,
  //       id: state.root_id,
  //       language: "en",
  //       country: "US",
  //       currency: "USD",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  //       "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
  //     },
  //   };
  //   console.log("this is node context request");
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log("response", response.data);
  //       setNodeContent(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [state.root_id]);
  // console.log(nodeContent);

  const data = { state, dispatch, nodeContent };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
