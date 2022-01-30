import {Router} from 'express';
import cors from 'cors';
import AgendamentoController from './controllers/AgendamentoController';
const validateDto = require('../src/middleware/validate-dto');
const devDto = require('../src/dto/agendamento');

const routes = Router();

routes.get('/', AgendamentoController.home);

routes.get('/agendamentos', AgendamentoController.index);

routes.post('/agendamentos', cors(), validateDto(devDto), AgendamentoController.create);

export default routes;