const Campi = require('../models/campi')

module.exports = {
    Query: {
        campi: async () => {
            return await Campi.find({});
        },
        campusPorSigla: async (_, args) => {
            const SIGLA = args.sigla;
            return await Campi.findOne({sigla: SIGLA});
        },
        campusPorNome: async (_, args) => {
            const NOME = args.nome;
            return await Campi.findOne({nome: NOME});
        }
    }
};