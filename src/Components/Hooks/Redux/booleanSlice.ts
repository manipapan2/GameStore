import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BooleanState {
  value: boolean;
}

const initialState: BooleanState = {
  value: true,
};

const booleanSlice = createSlice({
  name: 'booleanState',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.value = !state.value;
    },
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { toggleMenu, setValue } = booleanSlice.actions;
export default booleanSlice.reducer;
