import '@testing-library/jest-dom';

import {
  default as vehicleReducer,
  sortTable,
  type VehicleState,
} from '../features/vehicle/vehicleSlice';
import { VEHICLE_TABLE_KEYS } from '../common/constants';

const state: VehicleState = {
  data: [],
  loadingStatus: 'idle',
  tableRows: [],
  sortOrder: {
    key: VEHICLE_TABLE_KEYS.ETA,
    isAsc: true,
  },
};

test('should return the initial vehicle state', () => {
  expect(vehicleReducer(undefined, { type: undefined })).toEqual(state);
});

test('should handle sort table data', () => {
  const previousState: VehicleState = {
    ...state,
    tableRows: [
      {
        id: '1',
        cells: [
          {
            key: VEHICLE_TABLE_KEYS.PRICE,
            label: '2',
          },
        ],
      },
      {
        id: '2',
        cells: [
          {
            key: VEHICLE_TABLE_KEYS.PRICE,
            label: '1',
          },
        ],
      },
    ],
  };

  const newState: VehicleState = {
    ...state,
    sortOrder: {
      key: VEHICLE_TABLE_KEYS.PRICE,
      isAsc: true,
    },
    tableRows: [
      {
        id: '2',
        cells: [
          {
            key: VEHICLE_TABLE_KEYS.PRICE,
            label: '1',
          },
        ],
      },
      {
        id: '1',
        cells: [
          {
            key: VEHICLE_TABLE_KEYS.PRICE,
            label: '2',
          },
        ],
      },
    ],
  };

  expect(
    vehicleReducer(
      previousState,
      sortTable({ key: VEHICLE_TABLE_KEYS.PRICE, isAsc: true })
    )
  ).toEqual(newState);
});
