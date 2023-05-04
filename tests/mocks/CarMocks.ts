import ICar from '../../src/Interfaces/ICar';

const correctCar: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const correctCarWithId: ICar = { ...correctCar, id: 'validId' };

const incorrectCar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 'quatro',
  seatsQty: 5,
};

const arrayWithcar = [correctCarWithId];

export { correctCar, correctCarWithId, incorrectCar, arrayWithcar };
