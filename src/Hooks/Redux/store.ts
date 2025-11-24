import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./gamesSlice";
import panelReducer from "./panelSlice"

const store = configureStore({
	reducer: {
		games: itemsReducer,
		panelState: panelReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
