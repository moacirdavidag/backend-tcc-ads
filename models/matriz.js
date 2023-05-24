const mongoose = require('mongoose');

const matrizSchema = new mongoose.Schema({
    url: {type: String, required: true},
    uuid: {type: String, required: true},
    descricao: {type: String, required: true},
    ano_criacao: {type: Number, required: true},
    periodo_criacao: {type: Number, required: true},
    componentes: [{
        uuid: {type: String, required: true},
        descricao: {type: String, required: true},
        periodo_letivo: {type: Number, required: true},
        ch_pratica: {type: Number, required: true},
        ch_presencial: {type: Number, required: true}
    }],
    ch_matriz: {type: Number, required: true}
});

const Matriz = mongoose.model("matrizes", matrizSchema);

module.exports = Matriz;