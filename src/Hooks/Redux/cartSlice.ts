import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ItemState {
  game_ids: string[];
}

const initialState: ItemState = {
  game_ids: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<string>) => {
      state.game_ids.push(action.payload);
    },
    removeGame: (state, action: PayloadAction<string>) => {
      const indexOfGame = state.game_ids.indexOf(action.payload)
      state.game_ids = state.game_ids.splice(indexOfGame, 1)
    },
  },
});

export const { addGame, removeGame } = cartSlice.actions;
export default cartSlice.reducer;
