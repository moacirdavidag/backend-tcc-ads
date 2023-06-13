const mongoose = require('mongoose');

const patrimonioSchema = new mongoose.Schema({
    uuid: {type: String, required: true},
    url: {type: String, required: true},
    numero: {type: Number, required: true},
    descricao: {type: String, required: true},
    estado_conservacao: {type: String, required: true},
    campus: {
        url: {type: String, required: true},
        uuid: {type: String, required: true},
        nome: {type: String, required: true}
    },
    valor_inicial: {type: Number, required: true},
    valor_liquido_contabil: {type: Number, required: true}
});

const Patrimonio = mongoose.model('patrimonios', patrimonioSchema);

module.exports = Patrimonio;