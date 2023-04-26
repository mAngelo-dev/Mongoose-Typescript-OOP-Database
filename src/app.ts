import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoute from './Routes/CarRoutes';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(ErrorHandler.handle);

export default app;