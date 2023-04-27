import IVehicles from './IVehicle';

interface IMotorcycle extends IVehicles {
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number
}

export default IMotorcycle;