const mongoose = require('mongoose');

const servidorSchema = new mongoose.Schema({
    url: {type: String, required: true},
    uuid: {type: String, required: true},
    nome: {type: String, required: true},
    matricula: {type: String, required: true},
    lotacao_siap: {
        url: {type: String, required: true},
        uuid: {type: String, required: true},
        sigla: {type: String, required: true},
        nome: {type: String, required: true}
    },
    lotacao_suap: {
        url: {type: String, required: true},
        uuid: {type: String, required: true},
        sigla: {type: String, required: true},
        nome: {type: String, required: true}
    },
    cargo_emprego: {type: String, required: true},
    situacao: {
        codigo: {type: Number, required: true},
        nome: {type: String, required: true}
    },
    setor_exercicio: {
        url: {type: String, required: true},
        uuid: {type: String, required: true},
        sigla: {type: String, required: true},
        nome: {type: String, required: true}
    },
    jornada_trabalho: {type: String, required: true},
    funcao_codigo: {type: Number},
    disciplina_string: {type: String}
});

const Servidor = mongoose.model("servidores", servidorSchema);

module.exports = Servidor;