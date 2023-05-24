const mongoose = require('mongoose');

const versaoSchema = new mongoose.Schema({
    project: {type: String},
    author: {type: String},
    notes: [
        {
            author: {type: String},
            type: {type: String},
            comment: {type: String},
            created_at: {type: String},
            modified_at: {type: String},
        }
    ]
});

const Versao = mongoose.model("versoessuap", versaoSchema);

module.exports = Versao;