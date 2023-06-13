const mongoose = require('mongoose');

const campiSchema = new mongoose.Schema({
    url: {type: String, required: true},
    uuid: {type: String, required: true},
    nome: {type: String, required: true},
    sigla: {type: String, required: true},
    cep: {type: String, required: true},
    telefone: {type: String},
    cnpj: {type: String, required: true},
    endereco: {type: String, required: true},
    municipio: {
        nome: {type: String, required: true},
        uf: {type: String, required: true}
    }
});

const Campi = mongoose.model("campis", campiSchema);

module.exports = Campi;