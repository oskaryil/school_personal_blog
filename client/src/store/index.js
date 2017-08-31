import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { createLogger } from "redux-logger";
import reducers from "../reducers";

const middlewares = [promiseMiddleware(), thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger());
}

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares))
);

export default store;
