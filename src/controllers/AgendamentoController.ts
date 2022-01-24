import { Request, Response } from "express";
import Agendamento from "../models/Agendamento";

class AgendamentoController {
    public async index (req: Request, res: Response): Promise<Response> {
        const agendamentos = await Agendamento.all();

        return res.json(agendamentos);
    }

    public async create (req: Request, res: Response): Promise<Response> {
        const agendamento = await Agendamento.insert(req);
        return res.json(agendamento);
    }
}

export default new AgendamentoController();