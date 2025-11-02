import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./gamesSlice";
import booleanReducer from "./booleanSlice";

const store = configureStore({
	reducer: {
		games: itemsReducer,
		booleanState: booleanReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
