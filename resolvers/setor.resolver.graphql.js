const Setor = require('../models/setor');

module.exports = {
    Query: {
        setores: async (_, args) => {
            const {filtro} = args.filtros;
            
            const aplicarFiltroPorNome = filtro.nome !== null;
            const aplicarFiltroPorSigla = filtro.sigla !== null;
            const aplicarFiltroPorUO = filtro.uo !== null;

            let setores = await Setor.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(aplicarFiltroPorNome) {
                let setores = await Setor.find({nome: filtro.nome})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return setores;
            }

            if(aplicarFiltroPorSigla) {
                let setores = await Setor.find({sigla: filtro.sigla})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return setores;
            }

            if(aplicarFiltroPorUO) {
                let setores = await Setor.find({"unidade_organizacional.nome": filtro.uo})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return setores;
            }

            return setores;
        }
    }
}