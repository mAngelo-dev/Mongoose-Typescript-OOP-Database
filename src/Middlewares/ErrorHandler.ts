import { ErrorRequestHandler } from 'express';

class ErrorHandler {
  public static handle: ErrorRequestHandler = (
    error,
    _req,
    res,
    _next,
  ) => {
    if (error.name === 'ValidationError') return res.status(422).json({ message: error.message });
    res.status(error.code || 500).json({ message: error.message });
  };
}

export default ErrorHandler;