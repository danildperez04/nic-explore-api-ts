import { DatabaseError } from 'pg';
import { HttpException, ValidationException } from '../common/exceptions/httpException';
import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { HttpStatusCode } from '../common/http/httpStatusCode';

export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction) {
  console.error(err);

  const success = false;
  let statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
  let message = 'Internal Server Error';
  let errors;

  if (err instanceof QueryFailedError) {
    message = 'Bad request';
    statusCode = HttpStatusCode.BAD_REQUEST;

    const error = err.driverError as DatabaseError;

    if (error.code === '23505') {
      message = error?.detail?.replace(
        /^Key \((.*)\)=\((.*)\) (.*)/,
        'This $1 already exists.') || message;
    }
  }

  if (err instanceof ValidationException) {
    const details = err.details;

    errors = details.map(({ constraints }) => constraints);
  }

  if (err instanceof JsonWebTokenError) {
    statusCode = HttpStatusCode.UNAUTHORIZED;
    message = 'Login to access';
  }

  if (err instanceof TokenExpiredError) {
    statusCode = HttpStatusCode.UNAUTHORIZED;
    message = 'The sesion expired';
  }

  if (err instanceof HttpException) {
    statusCode = err.status;
    message = err.message;
  }

  res.status(statusCode).json({
    success,
    message,
    errors
  });
}