import { createSlice } from '@reduxjs/toolkit';

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
    },
    closePanel: (state) => {
      state.isPanelOpen = false;
    }
  },
});

export const { togglePanel, closePanel } = panelSlice.actions;
export default panelSlice.reducer;
