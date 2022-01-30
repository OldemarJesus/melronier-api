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
        // this.express.use(cors());
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

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