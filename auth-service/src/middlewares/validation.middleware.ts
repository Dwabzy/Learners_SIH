import { plainToClass, plainToInstance } from 'class-transformer';
import { validate, ValidationError, ValidatorOptions } from 'class-validator';
import { Request, RequestHandler, Response } from 'express';
import { ExpressMiddlewareInterface } from 'routing-controllers';
import { AppError } from '../constants/error.constants';

export const validateDTO = (dto: any, validatorOptions?: ValidatorOptions): RequestHandler => {

  return async (request: Request, response: Response, next?: (err?: any) => any) => {
    const dtoObj = plainToInstance(dto, request.body);
    const errors = await validate(dtoObj, validatorOptions);
    if (errors.length > 0) {
        const dtoErrors: string = errors.map((error: ValidationError) => {
          return Object.values(error.constraints)
        }).join(", ");
        response.send(new AppError('INVALID_REQUEST', dtoErrors)).status(400);
    } else {
        next();
    }
  }
}