const mongoose = require('mongoose');

const bolsaSchema = new mongoose.Schema({
    url: {type: String, required: true},
    uuid: {type: String, required: true},
    categoria_bolsa: {type: String, required: true},
    aluno: {type: String, required: true},
    valor_bolsa: {type: Number, required: true},
    setor: {type: String, required: true}
});

const Bolsa = mongoose.model("bolsas", bolsaSchema);

module.exports = Bolsa;