import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

function motorcycleGen(req: Request): IMotorcycle {
  return {
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    status: req.body.status,
    buyValue: req.body.buyValue,
    category: req.body.category,
    engineCapacity: req.body.engineCapacity,
  };
}

class MotorcycleController {
  private service: MotorcycleService;
  constructor(service: MotorcycleService) {
    this.service = service;
  }
  public async createObj(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    try {
      const newMotorcycle = await this.service.createObj(motorcycleGen(req));
      return res.status(201).json(newMotorcycle);
    } catch (error) {
      next(error);
    }
  }

  public async updateObj(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    const { id } = req.params;
    try {
      const updateMotorcycle = await this.service.updateObj(id, motorcycleGen(req));
      return res.status(200).json(updateMotorcycle);
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

export default MotorcycleController;