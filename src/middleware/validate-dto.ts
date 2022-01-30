import * as yup from 'yup';
const ApiError = require('../error/api-error');
import { Request, Response, NextFunction } from 'express';
import Agendamento from '../schemas/Agendamento';
import { error } from 'console';

function validateDto(schema: any) {
    return async (request: Request, response: Response, next: NextFunction) => {

        // Website you wish to allow to connect
        response.setHeader('Access-Control-Allow-Origin', 'https://oldemarjesus.github.io/');

        // Request methods you wish to allow
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        response.setHeader('Access-Control-Allow-Credentials', "true");

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

