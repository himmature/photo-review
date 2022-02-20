import { createStore } from "redux";
import { RootReducer } from "./RootReducer";
import { RootState } from "./RootState";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(RootReducer, RootState, composeWithDevTools());
