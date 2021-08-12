import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import accountsReducer from "../modules/accounts/redux/user";
import storage from "./storage";

const persistConfig = {
  key: "redux",
  storage,
  whitelist: [
    "accounts",
  ]
};

const reducers = combineReducers({
  accounts: accountsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
