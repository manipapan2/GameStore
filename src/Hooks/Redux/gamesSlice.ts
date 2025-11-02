import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ItemState {
  items: string[];
}

const initialState: ItemState = {
  items: [],
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = gamesSlice.actions;
export default gamesSlice.reducer;
