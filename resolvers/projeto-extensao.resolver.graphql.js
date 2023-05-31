const ProjetoExtensao = require('../models/projeto-extensao');

module.exports = {
    Query: {
        projetosDeExtensao: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroPorUO = filtro.uo !== null;
            const aplicarFiltroPorFoco = filtro.foco !== null;
            const aplicarFiltroPorArea = filtro.area !== null;
            const aplicarFiltroPorTitulo = filtro.titulo !== null;

            let projetosExtensao = await ProjetoExtensao.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(aplicarFiltroPorUO) {
                projetosExtensao = await ProjetoExtensao.find({uo: filtro.uo})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return projetosExtensao;
            }

            if(aplicarFiltroPorFoco) {
                projetosExtensao = await ProjetoExtensao.find({foco_tecnologico: filtro.foco})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return projetosExtensao;
            }

            if(aplicarFiltroPorArea) {
                projetosExtensao = await ProjetoExtensao.find({area_conhecimento: filtro.area})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return projetosExtensao;
            }

            if(aplicarFiltroPorTitulo) {
                projetosExtensao = await ProjetoExtensao.find({titulo: filtro.titulo})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return projetosExtensao;
            }

            return projetosExtensao;
        }
    }
}