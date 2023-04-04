const mongoose = require ('mongoose');

const setorSchema = new mongoose.Schema({
    uuid: {type: String, required: true},
    url: {type: String, required: true},
    nome: {type: String, required: true},
    sigla: {type: String, required: true},
    is_siape: {type: Boolean, required: true},
    superior: {
        url: {type: String, required: true},
        nome: {type: String, required: true},
        sigla: {type: String, required: true},
        uuid: {type: String, required: true}
    },
    setores_filho: [String],
    unidade_organizacional: {
        url: {type: String, required: true},
        nome: {type: String, required: true},
        sigla: {type: String, required: true},
        uuid: {type: String, required: true}
    },
    total_servidores:  {type: Number, required: true}
});

const Setor = mongoose.model('setores', setorSchema);

module.exports = Setor;