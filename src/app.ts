import express, {Application} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

class App {
    public express: Application;

    public constructor () {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares (): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database (): void {
        mongoose.connect("mongodb+srv://mongoclient:Testdatabase2022@mycluster.2hvok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    }

    private routes (): void {
            this.express.use(routes);
    }
}

export default new App().express;