import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers/data";

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
