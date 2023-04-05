import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateContextProvider } from "./context/StateContext";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StateContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateContextProvider>
  </Provider>
);
