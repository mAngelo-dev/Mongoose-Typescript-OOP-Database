import ICar from '../../src/Interfaces/ICar';

const correctCar: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15990,
  doorsQty: 4,
  seatsQty: 5,
};

const searchId = '645431986a86ed3cce2cee41';

const correctCarWithId: ICar = { ...correctCar, id: searchId };

const arrayWithcar: ICar[] = [correctCarWithId];

const incorrectCar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15990,
  doorsQty: 'quatro',
  seatsQty: 5,
};

const updatedCar: ICar = {
  model: 'Eclipse',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15990,
  doorsQty: 4,
  seatsQty: 5,
};

const updatedCarWithId: ICar = { ...updatedCar, id: searchId };

export {
  correctCar,
  correctCarWithId,
  incorrectCar,
  arrayWithcar,
  searchId,
  updatedCar,
  updatedCarWithId,
};
