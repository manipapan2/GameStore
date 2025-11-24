import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PanelState {
  isPanelOpen: boolean;
}

const initialState: PanelState = {
  isPanelOpen: false,
};

const panelSlice = createSlice({
  name: 'panelState',
  initialState,
  reducers: {
    togglePanel: (state) => {
      state.isPanelOpen = !state.isPanelOpen;
    }
  },
});

export const { togglePanel } = panelSlice.actions;
export default panelSlice.reducer;
