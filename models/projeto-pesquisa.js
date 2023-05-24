const mongoose = require('mongoose');

const projetoPesquisaSchema = new mongoose.Schema({
        url: {type: String},
        uuid: {type: String},
        titulo: {type: String},
        uo: {
            url: {type: String},
            uuid: {type: String},
            nome: {type: String}, 
            sigla: {type: String}
        },
        inicio_execucao: String,
        fim_execucao: String,
        foco_tecnologico: String,
        area_conhecimento: String,
        resumo: String,
        justificativa: String,
        participantes: [{
            uuid: {type: String},
            nome: {type: String}
        }],
        valor_total_executado: Number,
        aprovado: Boolean
});

const ProjetoPesquisa = mongoose.model("projetosdepesquisa", projetoPesquisaSchema);

module.exports = ProjetoPesquisa;