import { VEHICLE_URL } from '../../common/constants';

export const fetchVehicleData = async () => {
  await fetch(VEHICLE_URL)
    .then((res: Response) => res.json)
    .then((res) => {
      console.log(res);
      return res;
    });
};
