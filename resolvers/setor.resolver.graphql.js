const Setor = require('../models/setor');

module.exports = {
    Query: {
        setores: async (_, args) => {
            const {offset, limit} = args;
            return await Setor.find({}).skip(offset).limit(limit);
        },
        setorPorNome: async (_, args) => {
            const NOME = args.nome;
            return await Setor.findOne({nome: NOME});
        },
        setorPorSigla: async (_, args) => {
            const SIGLA = args.sigla;
            return await Setor.findOne({sigla: SIGLA});
        },
        setorPorUnidadeOrganizacional: async (_, args) => {
            const UNIDADE_ORGANIZACIONAL = args.nome;
            return await Setor.find({
                "unidade_organizacional.nome": UNIDADE_ORGANIZACIONAL
        })}
    }
}