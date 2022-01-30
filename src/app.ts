import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';
const apiErrorHandler = require('./error/api-error-handler');

class App {
    public express: Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use((function (req: Request, res: Response, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'https://oldemarjesus.github.io/');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', "true");

            // Pass to next layer of middleware
            next();
        }));
        this.express.use(apiErrorHandler);
    }

    private database(): void {
        mongoose.connect("mongodb+srv://mongoclient:Testdatabase2022@mycluster.2hvok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    }

    private routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;