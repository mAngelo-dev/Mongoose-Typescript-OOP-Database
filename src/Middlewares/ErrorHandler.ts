import { ErrorRequestHandler } from 'express';

class ErrorHandler {
  public static handle: ErrorRequestHandler = (
    error,
    _req,
    res,
    next,
  ) => {
    console.log(error);
    res.status(error.code).json({ message: error.message });
    next();
  };
}

export default ErrorHandler;