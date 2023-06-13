const Patrimonio = require('../models/patrimonio');

module.exports = {
    Query: {
        patrimonio: async (_, args) => {
            const {filtro} = args.filtros;

            const query = {};

            if(filtro.numero !== null) {
                query.numero = filtro.numero;
            }

            if(filtro.campus !== null) {
                const campus = new RegExp(filtro.campus);
                query["campus"] = { $regex: campus, $options: 'i' };
            }

            console.log(query);

            try {

                const patrimonio = await Patrimonio.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);

                return patrimonio;

            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }

        }
    }
}