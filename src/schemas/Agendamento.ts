import {Schema, model, Document} from 'mongoose';
import AgendamentoInterface from './typeAgendamento';

const AgendamentoSchema = new Schema({
    email: {type: String, required: true, unique: false},
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    peopleNumber: {type: Number, required: true},
    dataEntrada: {type: Date, required: true},
    description: {type: String, required: false}
}, {
    timestamps: true
});

export default model<AgendamentoInterface>('Agendamento', AgendamentoSchema)