const Campi = require('../models/campi')

module.exports = {
    Query: {
        campi: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroPorNome = filtro.nome !== null;
            const aplicarFiltroPorSigla = filtro.sigla !== null;

            let campi = await Campi.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(aplicarFiltroPorNome) {
                campi = await Campi.find({nome: filtro.nome})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return campi;
            }

            if(aplicarFiltroPorSigla) {
                campi = await Campi.find({sigla: filtro.sigla})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return campi;
            }

            return campi;
        }
    }
};