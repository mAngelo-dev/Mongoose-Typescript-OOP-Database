import Motorcycle from '../Domains/Motorcycle';
import NotFoundError from '../Errors/NotFoundError';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

const NotFoundMessage = 'Motorcycle not found';

class MotorcycleService {
  private motorcycleODM: MotorcycleODM;
  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }

  public async createObj(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const create = await this.motorcycleODM.createObj(motorcycle);
    console.log(create);
    const motorcycleObject = new Motorcycle(create);
    console.log(motorcycleObject);
    return motorcycleObject;
  }

  public async findAll(): Promise<Motorcycle[]> {
    const allMotorcycles = await this.motorcycleODM.findAll();
    const motorcycleList = allMotorcycles.map((motorcycle) => new Motorcycle(motorcycle));
    return motorcycleList;
  }

  public async findById(id: string): Promise<Motorcycle> {
    const desiredMotorcycle = await this.motorcycleODM.findById(id);
    if (!desiredMotorcycle) throw new NotFoundError(NotFoundMessage);
    const motorcycleObject = new Motorcycle(desiredMotorcycle);
    return motorcycleObject;
  }

  public async updateObj(id: string, motorcycle: IMotorcycle): Promise<Motorcycle> {
    const updateQuery = await this.motorcycleODM.updateObj(id, motorcycle);
    if (!updateQuery) throw new NotFoundError(NotFoundMessage);
    const motorcycleObject = new Motorcycle(updateQuery);
    return motorcycleObject;
  }

  public async deleteObj(id: string): Promise<void> {
    if (!await this.motorcycleODM.deleteById(id)) throw new NotFoundError(NotFoundMessage);
  }
}

export default MotorcycleService;