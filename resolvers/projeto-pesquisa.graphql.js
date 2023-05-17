const ProjetoPesquisa = require('../models/projeto-pesquisa');

module.exports = {
    Query: {
        projetosDePesquisa: async (_, args) => {
            const {offset, limit} = args;
            return await ProjetoPesquisa.find({}).skip(offset).limit(limit);
        },
        projetoDePesquisaPorTitulo: async (_, args) => {
            return await ProjetoPesquisa.find({titulo: args.titulo});
        },
        projetosDePesquisaPorUO: async (_, args) => {
            return await ProjetoPesquisa.find({"uo.nome": args.uo});
        },
        projetosDePesquisaPorArea: async (_, args) => {
            return await ProjetoPesquisa.find({area_conhecimento: args.area});
        },
        projetosDePesquisaPorFoco: async (_, args) => {
            return await ProjetoPesquisa.find({foco_tecnologico: args.foco});
        }
    }
}