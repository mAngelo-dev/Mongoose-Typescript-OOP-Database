import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

function carGen(req: Request): ICar {
  return {
    doorsQty: req.body.doorsQty,
    seatsQty: req.body.seatsQty,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    status: req.body.status || false,
    buyValue: req.body.buyValue,
  };
}

class CarController {
  private service: CarService;
  constructor(service: CarService) {
    this.service = service;
  }
  public async createObj(req: Request, res: Response, next: NextFunction): 
  Promise<Response | void> {
    try {
      const newCar = await this.service.createObj(carGen(req));
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }

  public async updateObj(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const updateService = await this.service.updateObj(id, carGen(req));
      return res.status(200).json(updateService);
    } catch (error) {
      next(error);
    }
  }

  public async deleteObj(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await this.service.deleteObj(id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const findAllService = await this.service.findAll();
      return res.status(200).json(findAllService);
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const findByIdService = await this.service.findById(id);
      return res.status(200).json(findByIdService);
    } catch (error) {
      next(error);
    }
  }
}

export default CarController;