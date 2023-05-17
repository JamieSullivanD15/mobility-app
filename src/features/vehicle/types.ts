export interface Supplier {
  supplierName: string;
  supplierKey: string;
}

export interface Product {
  maxPax: number;
  bags: {
    max: number;
    large: number;
    small: number;
  };
  maxSeats: number;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface Category {
  productType: string;
  vehicleType: string;
  subCategory: string;
}

export interface Vehicle {
  availabilityId: string;
  eta: number;
  supplier: Supplier;
  product: Product;
  price: Price;
  category: Category;
}

export type LoadingStatus = 'idle' | 'loading' | 'succeeded' | 'failed';
