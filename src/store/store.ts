import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import modal from "./modules/modal";
import { useDispatch, useSelector } from "react-redux";
import pokeapi from "./modules/pokedex";
import  themeDefault from './modules/theme'
const reducer = combineReducers({ pokeapi,themeDefault,modal });
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = () => useSelector((state: RootState) => state);
