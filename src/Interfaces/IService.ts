import IVehicles from './IVehicle';

interface IService<T> {
  createObj(obj: IVehicles): Promise<T>
  findAll(): Promise<T[] | undefined>
  findById(id: string): Promise<T | void>
  updateObj(id: string, obj: IVehicles): Promise<T | void>
  deleteObj(id: string): Promise<T | void>
}

export default IService;