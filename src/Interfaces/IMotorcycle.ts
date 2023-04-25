import IVehicles from './IVehicles';

interface IMotorcycle extends IVehicles {
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number
}

export default IMotorcycle;