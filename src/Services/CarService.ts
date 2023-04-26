import Car from '../Domains/CarDomain';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private carODM: CarODM;
  constructor() {
    this.carODM = new CarODM();
  }

  public async createCar(car: ICar) {
    const carCreate = await this.carODM.create(car);
    const carObject = new Car(carCreate);
    return carObject;
  }
}

export default CarService;