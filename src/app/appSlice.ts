import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  isDarkMode: boolean;
}

const initialState: AppState = {
  isDarkMode: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state: AppState) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;
