import React, { type ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import Heading from '../components/common/font/Heading';
import Text from '../components/common/font/Text';
import Button from '../components/common/button/Button';
import Table from '../components/common/table/Table';
import { VEHICLE_TABLE_KEYS } from '../common/constants';
import { Provider } from 'react-redux';
import store from '../app/store';

const customRender = (component: ReactNode) => {
  return render(<div>{component}</div>);
};

test('renders header', () => {
  const text = 'Header';
  customRender(<Heading>{text}</Heading>);
  const headerElement = screen.getByText(text);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement.textContent).toEqual(text);
});

test('renders text', () => {
  const text = 'Text';
  customRender(<Text>{text}</Text>);
  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
  expect(textElement.textContent).toEqual(text);
});

test('renders button', () => {
  const text = 'Button';
  customRender(<Button onClick={() => {}}>{text}</Button>);
  const buttonElement = screen.getByText(text);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.textContent).toEqual(text);
});

test('renders table', () => {
  const tableData = {
    headerCells: [
      {
        key: VEHICLE_TABLE_KEYS.ETA,
        label: 'ETA',
      },
      {
        key: VEHICLE_TABLE_KEYS.SUPPLIER,
        label: 'Supplier',
      },
    ],
    rows: [
      {
        id: '1',
        cells: [
          {
            key: VEHICLE_TABLE_KEYS.ETA,
            label: '2 min',
          },
        ],
      },
      {
        id: '2',
        cells: [
          {
            key: VEHICLE_TABLE_KEYS.SUPPLIER,
            label: 'Test supplier',
          },
        ],
      },
    ],
  };
  const sortOrder = {
    key: VEHICLE_TABLE_KEYS.ETA,
    isAsc: true,
  };
  customRender(
    <Provider store={store}>
      <Table
        data={tableData}
        sortOrder={sortOrder}
        onSort={() => {}}
      />
    </Provider>
  );
  const tableElement = screen.getByText('Supplier');
  expect(tableElement).toBeInTheDocument();
  expect(tableElement.textContent).toEqual('Supplier');
});
