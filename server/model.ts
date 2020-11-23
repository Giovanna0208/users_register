import * as mongoose from 'mongoose';

//Criação da tabela
const UserSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    whatsapp: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now}
})
export default mongoose.model('User', UserSchema);