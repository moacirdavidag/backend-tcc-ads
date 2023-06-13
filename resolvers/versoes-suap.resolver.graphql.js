const Versao = require('../models/versoes-suap');

module.exports = {
    Query: {
        versoes: async (_, args) => {
            const {filtro} = args.filtros;

            const query = {};

            try {

                const versoes = await Versao.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);

                return versoes;

            } catch(e) {
                console.log(`Ocorreu um erro: ${e}!`)
            }

        }
    }
}