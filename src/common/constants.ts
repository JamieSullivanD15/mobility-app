export const VEHICLE_URL =
  'https://raw.githubusercontent.com/cartrawler/mobility-react-native-assessment/master/assets/availability.json';

export const PRODUCT_TYPES = {
  STANDARD: 'STANDARD',
  OTHER: 'OTHER',
};

export const VEHICLE_TYPES = {
  SEDAN: 'SEDAN',
  SUV: 'SUV',
  ECO: 'ECO',
  MINIBUS: 'MINIBUS',
  ACCESSIBLE: 'ACCESSIBLE',
};

export const VEHICLE_TABLE_KEYS = {
  ETA: 'eta',
  SUPPLIER: 'supplier',
  PRICE: 'price',
  CATEGORY: 'productType',
  VEHICLE_TYPE: 'vehicleType',
};

export const VEHICLE_TABLE_HEADER_CELLS = [
  {
    key: VEHICLE_TABLE_KEYS.ETA,
    label: 'ETA',
  },
  {
    key: VEHICLE_TABLE_KEYS.SUPPLIER,
    label: 'Supplier',
  },
  {
    key: VEHICLE_TABLE_KEYS.PRICE,
    label: 'Price',
  },
  {
    key: VEHICLE_TABLE_KEYS.CATEGORY,
    label: 'Category',
  },
  {
    key: VEHICLE_TABLE_KEYS.VEHICLE_TYPE,
    label: 'Vehicle Type',
  },
];
