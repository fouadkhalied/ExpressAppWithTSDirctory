import { NextFunction , Request , Response} from "express";

export const errorHandler = (err : any, req : Request, res : Response, next : NextFunction) => {
  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};