import { Request, Response, NextFunction } from 'express';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException, ValidationException } from '../common/exceptions/httpException';

export function validateDto(dtoClass: ClassConstructor<unknown>) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    console.log(req.body);
    const instance = plainToInstance(dtoClass, req.body);

    if (!instance) {
      return next(new BadRequestException('Body is empty'));
    }

    const errors = await validate(instance, { whitelist: true, forbidNonWhitelisted: false });

    if (errors.length > 0) {
      const validationError = new ValidationException();

      validationError.details = errors;

      return next(validationError);
    }

    // assign the sanitized instance back to body (optional)
    req.body = instance;

    next();
  };
}

export default validateDto;
