import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import panelReducer from "./panelSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		panelState: panelReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
