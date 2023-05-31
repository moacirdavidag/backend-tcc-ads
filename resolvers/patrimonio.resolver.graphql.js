const Patrimonio = require('../models/patrimonio');

module.exports = {
    Query: {
        patrimonio: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroPorNumero = filtro.numero !== null;
            const aplicarFiltroPorCampus = filtro.campus !== null;

            let patrimonio = await Patrimonio.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(aplicarFiltroPorNumero) {
                patrimonio = await Patrimonio.find({numero: filtro.numero})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return patrimonio;
            }

            if(aplicarFiltroPorCampus) {
                patrimonio = await Patrimonio.find({campus: filtro.campus})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return patrimonio;
            }

            return patrimonio;
        }
    }
}