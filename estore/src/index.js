import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import productReducer from "./reducers/product";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { productWatcher } from "./sagas/product";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  productReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(productWatcher);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
