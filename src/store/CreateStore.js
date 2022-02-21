import { createStore } from "redux";
import { RootReducer } from "./RootReducer";
import { RootState } from "./RootState";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'photo-store',
    storage
}
const persistedRootReducer = persistReducer(persistConfig, RootReducer);
export const store = createStore(persistedRootReducer, RootState, composeWithDevTools());
export const persistedStore = persistStore(store);
