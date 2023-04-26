import IVehicles from '../Interfaces/IVehicles';

class Vehicle {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | undefined;
  private buyValue: number;

  constructor(vehicle: IVehicles) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
  }
}

export default Vehicle;