import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemState {
  items: string[];
}

const initialState: ItemState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
