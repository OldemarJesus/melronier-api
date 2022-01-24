import {Router} from 'express';

import AgendamentoController from './controllers/AgendamentoController';

const routes = Router();

routes.get('/agendamentos', AgendamentoController.index);
routes.post('/agendamentos', AgendamentoController.create);

export default routes;