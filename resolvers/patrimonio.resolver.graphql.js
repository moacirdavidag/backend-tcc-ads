const Patrimonio = require('../models/patrimonio');

module.exports = {
    Query: {
        patrimonio: async () => {
            return await Patrimonio.find({});
        },
        patrimonioPorNumero: async (_, args) => {
            const NUMERO = args.numero;
            return await Patrimonio.findOne({numero: NUMERO});
        },
        patrimonioPorCampus: async (_, args) => {
            const CAMPUS = args.nomeCampus;
            return await Patrimonio.find({
                "campus.nome": CAMPUS
            })
        }
    }
}