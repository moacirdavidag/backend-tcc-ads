const Campi = require('../models/campi')

module.exports = {
    Query: {
        campi: async (_, args) => {
            const {filtro} = args.filtros;

            const query = {};

            if(filtro.nome !== null) {
                const nome = new RegExp(filtro.nome);
                query.nome = { $regex: nome, $options: 'i' };
            }

            if(filtro.sigla !== null) {
                const sigla = new RegExp(filtro.sigla);
                query.sigla = { $regex: sigla, $options: 'i' };
            }

            try {

                const campi = await Campi.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);

                return campi;
            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }

        }
    }
};