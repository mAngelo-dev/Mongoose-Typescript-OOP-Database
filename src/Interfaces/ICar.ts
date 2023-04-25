import IVehicles from './IVehicles';

interface ICar extends IVehicles {
  doorsQty: number,
  seats: number
}

export default ICar;