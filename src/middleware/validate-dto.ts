import * as yup from 'yup';
const ApiError = require('../error/api-error');
import { Request, Response, NextFunction } from 'express';
import Agendamento from '../schemas/Agendamento';
import { error } from 'console';

function validateDto(schema: any) {
    return async (request: Request, response: Response, next: NextFunction) => {
        try {
            const validateBody = await schema.validate(request.body);
            request.body = validateBody;

            // let errors: any = [];
            // Agendamento.findOne({ email: request.body.email }).then((agendamento: any) => {
            //     if (!agendamento) {
            //         next();
            //         return;
            //     };

            //     errors.push({ msg: 'Email already exists' });
            //     return response.status(400).json(errors);

            // })

            next();

        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

module.exports = validateDto;

