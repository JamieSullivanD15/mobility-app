import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from '../app/App';
import store from '../app/store';

test('renders header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElement = screen.getByText(/Mobility App/i);
  expect(headerElement).toBeInTheDocument();
});
