const mongoose = require('../database/mongo');

const alunoSchema = new mongoose.Schema({
    url: {type: String, required: true},
    uuid: {type: String, required: true},
    nome: {type: String, required: true},
    matricula: {type: String, required: true},
    curso: {
        url: {type: String, required: true},
        uuid: {type: String, required: true},
        nome: {type: String, required: true}
    },
    situacao: {type: String},
    cota: {type: String}
});

const Aluno = mongoose.model("alunos", alunoSchema);

module.exports = Aluno;