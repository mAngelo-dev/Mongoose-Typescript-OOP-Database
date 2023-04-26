import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private service: CarService;

  constructor(service: CarService) {
    this.service = service;
  }
  
  public async create(req: Request, res: Response, next: NextFunction) {
    const car: ICar = {
      doorsQty: req.body.doorsQty,
      seatsQty: req.body.seatsQty,
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status || false,
      buyValue: req.body.buyValue,
    };

    try {
      const newCar = await this.service.createCar(car);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }

  public async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const arrayCars = await this.service.listCars();
      return res.status(200).json(arrayCars);
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const car = await this.service.listCar(id);
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }
}

export default CarController;