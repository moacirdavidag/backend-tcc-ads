const Servidor = require('../models/servidor');

module.exports = {
    Query: {
        servidores: async (_, args) => {
            const {offset, limit} = args;
            return await Servidor.find({}).skip(offset).limit(limit);
        },
        servidorPorMatricula: async (_, args) => {
            const MATRICULA = args.matricula;
            return await Servidor.findOne({matricula: MATRICULA});
        },
        servidoresPorCargo: async (_, args) => {
            const CARGO = args.cargo;
            return await Servidor.find({cargo_emprego: CARGO});
        },
        servidorPorNome: async (_, args) => {
            const NOME = args.nome;
            return await Servidor.findOne({nome: NOME});
        }
    }
}