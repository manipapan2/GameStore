import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import booleanReducer from './booleanSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    booleanState: booleanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
