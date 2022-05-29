import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

let middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage,
  };

const persitorReducers = persistReducer(persistConfig, reducers);

export const stores = createStore(persitorReducers,{}, composeWithDevTools(applyMiddleware(...middleware)))

export const persistor = persistStore(stores)