const mongoose = require('../database/mongo');

const cursoSchema = new mongoose.Schema({
    url: {type: String, required: true},
    uuid: {type: String, required: true},
    codigo: {type: Number, required: true},
    descricao: {type: String, required: true},
    diretoria: {type: String, required: true},
    natureza_participacao: {type: String, required: true},
    eixo: {type: String},
    modalidade: {type: String, required: true},
    resolucao_criacao: {type: String},
    coordenador: {type: String},
    matriz_vingente: {
        url: {type: String, required: true},
        uuid: {type: String, required: true}
    },
    matrizes: [{type: String, required: true}],
    ch: {type: Number, required: true}
});

const Curso = mongoose.model("curso", cursoSchema);

module.exports = Curso;