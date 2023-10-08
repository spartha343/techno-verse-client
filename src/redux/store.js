import { applyMiddleware, createStore } from "redux";
import contentsReducer from "./reducers/contentsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(contentsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;