import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import MotorcycleService from '../Services/MotorcycleService';

const motorcycleRoute = Router();
const motorcycleService = new MotorcycleService();
const motorcycleController = new MotorcycleController(motorcycleService);
const routeWithId = '/motorcycles/:id';

motorcycleRoute.get('/motorcycles', motorcycleController.findAll.bind(motorcycleController));
motorcycleRoute.post('/motorcycles', motorcycleController.createObj.bind(motorcycleController));
motorcycleRoute.get(routeWithId, motorcycleController.findById.bind(motorcycleController));
motorcycleRoute.delete(routeWithId, motorcycleController.deleteObj
  .bind(motorcycleController));
motorcycleRoute.put(routeWithId, motorcycleController.updateObj
  .bind(motorcycleController));

export default motorcycleRoute;