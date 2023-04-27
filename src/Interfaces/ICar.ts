import IVehicles from './IVehicle';

interface ICar extends IVehicles {
  doorsQty: number,
  seatsQty: number
}

export default ICar;