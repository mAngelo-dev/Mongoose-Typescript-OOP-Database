import { Router } from 'express';
import CarController from '../Controllers/CarController';
import CarService from '../Services/CarService';

const carRoute = Router();
const carService = new CarService();
const carController = new CarController(carService);

carRoute.post('/cars', carController.create.bind(carController));
carRoute.get('/cars/:id', carController.findById.bind(carController));
carRoute.get('/cars', carController.findAll.bind(carController));

export default carRoute;