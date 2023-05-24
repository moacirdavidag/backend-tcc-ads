const mongoose = require('mongoose');

const projetoExtensaoSchema = new mongoose.Schema({
    url: {type: String},
    uuid: {type: String},
    titulo: {type: String},
    uo: {
        url: {type: String},
        uuid: {type: String},
        nome: {type: String}, 
        sigla: {type: String}
    },
    inicio_execucao: {type: String},
    fim_execucao: {type: String},
    foco_tecnologico: {type: String},
    area_conhecimento: {type: String},
    participantes: [
        {
            uuid: {type: String},
            nome: {type: String}
        }
    ],
    valor_total_executado: {type: Number},
    aprovado: {type: Boolean},
    resumo: {type: String},
    justificativa: {type: String},
    resultados_esperados: {type: String}
});

const ProjetoExtensao = mongoose.model("projetosdeextensaos", projetoExtensaoSchema);

module.exports = ProjetoExtensao;
