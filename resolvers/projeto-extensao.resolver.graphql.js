const ProjetoExtensao = require('../models/projeto-extensao');

module.exports = {
    Query: {
        projetosDeExtensao: async () => {
            return await ProjetoExtensao.find({});
        },
        projetosDeExtensaoPorFoco: async (_, args) => {
            return await ProjetoExtensao.find({foco_tecnologico: args.foco});
        },
        projetosDeExtensaoPorArea: async (_, args) => {
            return await ProjetoExtensao.find({area_conhecimento: args.area});
        },
        projetosDeExtensaoPorUO: async (_, args) => {
            return await ProjetoExtensao.find({"uo.nome": args.nome});
        }
    }
}