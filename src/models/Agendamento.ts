import AgendamentoS from "../schemas/Agendamento";
import { Request } from 'express';
import sendMail from "../services/sendMail";

class Agendamento {
    public async all() {
        const agendamentos = await AgendamentoS.find();
        return agendamentos;
    }

    public async insert(data: Request) {
        const agendamento = await AgendamentoS.create(data.body);

        sendMail(agendamento);

        return agendamento;
    }

}

export default new Agendamento();