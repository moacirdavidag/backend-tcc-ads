const Versao = require('../models/versoes-suap');

module.exports = {
    Query: {
        versoes: async (_, args) => {
            const {filtro} = args.filtros;

            return await Versao.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);
        }
    }
}