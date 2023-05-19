import '@testing-library/jest-dom';

import {
  type AppState,
  default as appReducer,
  toggleTheme,
} from '../app/appSlice';

test('should return the initial app state', () => {
  expect(appReducer(undefined, { type: undefined })).toEqual({
    isDarkMode: false,
  });
});

test('should handle toggle theme', () => {
  const previousState: AppState = { isDarkMode: false };
  expect(appReducer(previousState, toggleTheme)).toEqual({
    isDarkMode: true,
  });
});
