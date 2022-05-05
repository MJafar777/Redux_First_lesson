import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import allReducers from "./reducers";


// const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={createStore(allReducers)}>
      <App />
    </Provider>
  </React.StrictMode>
);
