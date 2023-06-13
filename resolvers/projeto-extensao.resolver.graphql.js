const ProjetoExtensao = require('../models/projeto-extensao');

module.exports = {
    Query: {
        projetosDeExtensao: async (_, args) => {
            const {filtro} = args.filtros;

            const query = {};

            if(filtro.uo !== null) {
                const uo = new RegExp(filtro.uo);
                query.uo = { $regex: uo, $options: 'i' };
            }

            if(filtro.foco !== null) {
                const foco = new RegExp(filtro.foco);
                query.foco = { $regex: foco, $options: 'i' };
            }

            if(filtro.area !== null) {
                const area = new RegExp(filtro.area);
                query.area = { $regex: area, $options: 'i' };
            }

            if(filtro.titulo !== null) {
                const titulo = new RegExp(filtro.titulo);
                query.titulo = { $regex: titulo, $options: 'i' };
            }

            try {

                const projetos = await ProjetoExtensao.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);

                return projetos;

            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }

        }
    }
}