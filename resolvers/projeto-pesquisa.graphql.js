const ProjetoPesquisa = require('../models/projeto-pesquisa');

module.exports = {
    Query: {
        projetosDePesquisa: async (_, args) => {
            console.log(await ProjetoPesquisa.find({}));
            return await ProjetoPesquisa.find({});
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