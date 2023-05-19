import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from '../features/vehicle/Vehicle.module.scss';
import Card from '../components/common/card/Card';
import useAppSelector from '../hooks/useAppSelector';
import Heading from '../components/common/font/Heading';
import useAppDispatch from '../hooks/useAppDispatch';
import { fetchVehicles } from '../features/vehicle/vehicleSlice';
import VehicleImage from '../features/vehicle/VehicleImage';
import VehicleInfoRow from '../features/vehicle/VehicleInfoRow';
import { toCamelCase } from '../common/utils';
import Button from '../components/common/button/Button';
import { Icon } from '../components/common/font/Icon';
import SupplierImage from '../features/vehicle/SupplierImage';

import type { RootState } from '../app/store';
import type { Vehicle } from '../common/types';

const VehicleInfo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isDarkMode } = useAppSelector((state: RootState) => state.app);
  const { data, loadingStatus } = useAppSelector(
    (state: RootState) => state.vehicle
  );
  const vehicle = data.find(
    (vehicle: Vehicle) => vehicle.availabilityId === id
  );

  useEffect(() => {
    if (loadingStatus === 'idle' && data.length === 0) {
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
    <>
      <main className={styles.info_container}>
        <aside>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            isIcon
          >
            <Icon
              colour={isDarkMode ? 'white' : 'dark'}
              icon='arrow-left'
              size='xl'
              classNames={styles.info_backBtn}
            />
          </Button>
        </aside>
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
            value={<SupplierImage supplier={supplier} />}
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
    </>
  );
};

export default VehicleInfo;
