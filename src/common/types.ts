export type ProductType = 'STANDARD' | 'OTHER';
export type VehicleType = 'SEDAN' | 'SUV' | 'ECO' | 'MINIBUS' | 'ACCESSIBLE';
export type SubCategory = 'HIGHLY_RECOMMENDED' | 'MOST_POPULAR';

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
  productType: ProductType;
  vehicleType: VehicleType;
  subCategory: SubCategory;
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
