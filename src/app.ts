import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoute from './Routes/CarRoutes';
import motorcycleRoute from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(motorcycleRoute);
app.use(ErrorHandler.handle);

export default app;
