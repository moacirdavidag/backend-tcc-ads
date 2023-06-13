const mongoose = require('mongoose');

const programaSchema = new mongoose.Schema({
    url: String,
    uuid: String,
    titulo: String,
    numero_atendimento: Number,
    atendimento_por_campus: {
        REITORIA: Number,
        'CAMPUS CABEDELO': Number,
        'CAMPUS CAJAZEIRAS': Number,
        'CAMPUS CAMPINA GRANDE': Number,
        'CAMPUS GUARABIRA': Number,
        'CAMPUS PRINCESA ISABEL': Number,
        'CAMPUS MONTEIRO': Number,
        'CAMPUS PICUÍ': Number,
        'CAMPUS SANTA RITA': Number,
        'CAMPUS CATOLE DO ROCHA': Number,
        'CAMPUS ITAPORANGA': Number,
        'CAMPUS JOAO PESSOA': Number,
        'CAMPUS SOUSA': Number,
        'CAMPUS PATOS': Number,
        'CAMPUS ITABAIANA': Number  
    }
});

const Programa = mongoose.model("programas", programaSchema);

module.exports = Programa;