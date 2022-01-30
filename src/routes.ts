import {NextFunction, Request, Response, Router} from 'express';
import AgendamentoController from './controllers/AgendamentoController';
const validateDto = require('../src/middleware/validate-dto');
const devDto = require('../src/dto/agendamento');

const routes = Router();

routes.use(function (req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes.get('/', AgendamentoController.home);

routes.get('/agendamentos', AgendamentoController.index);

routes.post('/agendamentos', validateDto(devDto), AgendamentoController.create);

export default routes;