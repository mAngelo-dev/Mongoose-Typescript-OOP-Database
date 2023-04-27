import Car from '../Domains/Car';
import NotFoundError from '../Errors/NotFoundError';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

const NotFoundMessage = 'Car not found';

class CarService {
  private carODM: CarODM;
  constructor() {
    this.carODM = new CarODM();
  }

  public async createObj(car: ICar): Promise<Car> {
    const carCreate = await this.carODM.createObj(car);
    const carObject = new Car(carCreate);
    return carObject;
  }

  public async findAll(): Promise<Car[]> {
    const carsList = await this.carODM.findAll();
    const arrayList = carsList.map((car) => new Car(car));
    return arrayList;
  }

  public async findById(id: string): Promise<Car> {
    const car = await this.carODM.findById(id);
    if (!car) throw new NotFoundError(NotFoundMessage);
    const carObject = new Car(car);
    return carObject;
  }

  public async updateObj(id: string, car: ICar): Promise<Car> {
    const updatedCar = await this.carODM.updateObj(id, car);
    if (!updatedCar) throw new NotFoundError(NotFoundMessage);
    const carObject = new Car(updatedCar);
    return carObject;
  }

  public async deleteObj(id: string): Promise<void> {
    if (!await this.carODM.deleteById(id)) throw new NotFoundError(NotFoundMessage);
  }
}

export default CarService;