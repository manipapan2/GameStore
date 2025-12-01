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
      // const indexOfGame = state.game_ids.indexOf(action.payload)
      // const newGameIds = state.game_ids.splice(indexOfGame, 1)
      console.log('current array', state.game_ids)
      console.log('game id', action.payload)
      // console.log('new array', newGameIds)
      // state.game_ids = newGameIds
    },
  },
});

export const { addGame, removeGame } = cartSlice.actions;
export default cartSlice.reducer;
