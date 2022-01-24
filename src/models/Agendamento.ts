import AgendamentoS from "../schemas/Agendamento";
import { Request } from 'express';

class Agendamento {
    public async all() {
        const agendamentos = await AgendamentoS.find();
        return agendamentos;
    }

    public async insert(data: Request) {
        const agendamento = AgendamentoS.create(data.body);
        return agendamento;
    }

}

export default new Agendamento();