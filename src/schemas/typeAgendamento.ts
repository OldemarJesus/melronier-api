import mongoose from 'mongoose';

interface AgendamentoInterface extends Document {
    _id ?: mongoose.Schema.Types.ObjectId,
    email ?: String,
    name ?: String,
    phone ?: Number,
    peopleNumber ?: Number,
    dataEntrada ?: Date,
    description ?: String
}


export default AgendamentoInterface;