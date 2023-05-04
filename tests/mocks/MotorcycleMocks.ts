import IMotorcycle from '../../src/Interfaces/IMotorcycle';
import { searchId } from './CarMocks';

const correctMotorcycle: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45000,
  category: 'Street',
  engineCapacity: 600,
};

const searchMotorcycleId = searchId;

const correctMotorcycleWithId: IMotorcycle = { ...correctMotorcycle, id: searchMotorcycleId };

const arrayWithMotorcycles: IMotorcycle[] = [correctMotorcycleWithId];

const updatedMotorcycle = { ...correctMotorcycleWithId, buyValue: 49000 };

const updatedMotorcycleWithId: IMotorcycle = {
  ...updatedMotorcycle,
  id: searchMotorcycleId,
  category: 'Street' };

export {
  correctMotorcycle,
  correctMotorcycleWithId,
  searchMotorcycleId,
  arrayWithMotorcycles,
  updatedMotorcycle,
  updatedMotorcycleWithId,
};
