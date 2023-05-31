const ProjetoPesquisa = require('../models/projeto-pesquisa');

module.exports = {
    Query: {
        projetosDePesquisa: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroPorUO = filtro.uo !== null;
            const aplicarFiltroPorFoco = filtro.foco !== null;
            const aplicarFiltroPorArea = filtro.area !== null;
            const aplicarFiltroPorTitulo = filtro.titulo !== null;

            let projetosPesquisa = ProjetoPesquisa.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(aplicarFiltroPorUO) {
                projetosPesquisa = await ProjetoPesquisa.find({uo: filtro.uo})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return projetosPesquisa;
            }

            if(aplicarFiltroPorFoco) {
                projetosPesquisa = await ProjetoPesquisa.find({foco_tecnologico: filtro.foco})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return projetosPesquisa;
            }

            if(aplicarFiltroPorArea) {
                projetosPesquisa = await ProjetoPesquisa.find({area_conhecimento: filtro.area})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return projetosPesquisa;
            }

            if(aplicarFiltroPorTitulo) {
                projetosPesquisa = await ProjetoPesquisa.find({titulo: filtro.titulo})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return projetosPesquisa;
            }

            return projetosPesquisa;
        }
    }
}