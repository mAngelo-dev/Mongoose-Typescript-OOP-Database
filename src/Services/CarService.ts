import Car from '../Domains/Car';
import NotFoundError from '../Errors/NotFoundError';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private carODM: CarODM;
  constructor() {
    this.carODM = new CarODM();
  }

  public async createCar(car: ICar): Promise<Car> {
    const carCreate = await this.carODM.create(car);
    const carObject = new Car(carCreate);
    return carObject;
  }

  public async listCars(): Promise<Car[]> {
    const carsList = await this.carODM.findAll();
    const arrayList = carsList.map((car) => new Car(car));
    return arrayList;
  }

  public async listCar(id: string): Promise<Car> {
    const car = await this.carODM.findById(id);
    if (!car) throw new NotFoundError('Car not found');
    const carObject = new Car(car);
    return carObject;
  }

  public async updateCar(id: string, car: ICar): Promise<Car> {
    const updatedCar = await this.carODM.update(id, car);
    if (!updatedCar) throw new NotFoundError('Car not found');
    const carObject = new Car(updatedCar);
    return carObject;
  }
}

export default CarService;