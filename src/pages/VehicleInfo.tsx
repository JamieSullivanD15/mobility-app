import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from '../features/vehicle/Vehicle.module.scss';
import Card from '../components/common/card/Card';
import useAppSelector from '../hooks/useAppSelector';
import Heading from '../components/common/font/Heading';
import useAppDispatch from '../hooks/useAppDispatch';
import { fetchVehicles } from '../features/vehicle/vehicleSlice';
import VehicleImage from '../features/vehicle/VehicleImage';
import VehicleInfoRow from '../features/vehicle/VehicleInfoRow';
import { toCamelCase } from '../common/utils';

import type { RootState } from '../app/store';
import type { Vehicle } from '../common/types';

const VehicleInfo = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const vehicles = useAppSelector((state: RootState) => state.vehicle.data);
  const vehicle = vehicles.find(
    (vehicle: Vehicle) => vehicle.availabilityId === id
  );
  const loadingStatus = useAppSelector(
    (state: RootState) => state.vehicle.loadingStatus
  );

  useEffect(() => {
    if (loadingStatus === 'idle' && vehicles.length === 0) {
      void dispatch(fetchVehicles());
    }
  }, [dispatch]);

  if (vehicle === undefined) {
    return (
      <div className={styles.container}>
        <Heading align='center'>Vehicle not found</Heading>
      </div>
    );
  }

  const { eta, supplier, product, price, category } = vehicle;

  return (
    <main className={styles.info_container}>
      <Card>
        <VehicleImage category={category} />
        <Heading
          size='xl'
          weight='bold'
          align='center'
        >
          {toCamelCase(category.vehicleType)}
        </Heading>
        <VehicleInfoRow
          label='ETA'
          value={`${eta} min`}
        />
        <VehicleInfoRow
          label='Supplier'
          value={supplier.supplierName}
          shouldCamelCase
        />
        <VehicleInfoRow
          label='Bags'
          value={`${product.bags.max} max`}
        />
        <VehicleInfoRow
          label='Seats'
          value={product.maxSeats}
        />
        <VehicleInfoRow
          label='Price'
          value={`${price.amount} ${price.currency}`}
          isHighlighted
        />
      </Card>
    </main>
  );
};

export default VehicleInfo;
