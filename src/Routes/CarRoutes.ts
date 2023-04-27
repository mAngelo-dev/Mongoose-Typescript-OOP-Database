import { Router } from 'express';
import CarController from '../Controllers/CarController';
import CarService from '../Services/CarService';

const carRoute = Router();
const carService = new CarService();
const carController = new CarController(carService);

carRoute.get('/cars', carController.findAll.bind(carController));
carRoute.post('/cars', carController.createObj.bind(carController));
carRoute.get('/cars/:id', carController.findById.bind(carController));
carRoute.put('/cars/:id', carController.updateObj.bind(carController));
carRoute.delete('/cars/:id', carController.deleteObj.bind(carController));

export default carRoute;