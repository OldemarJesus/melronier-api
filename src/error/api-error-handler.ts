import { NextFunction, Request, Response, response } from 'express';
const ApiError = require('./api-error');

function apiErrorHandler(err: any, req:Request, res:Response, next:NextFunction) {
    console.error(err);

    if( err instanceof ApiError) {
        return response.status(err.status).json(err.message);
    }

    return response.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;