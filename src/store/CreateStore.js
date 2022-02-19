import { createStore } from "redux";
import { RootReducer } from "./RootReducer";
import { RootState } from "./RootState";

export const store = createStore(RootReducer, RootState);
