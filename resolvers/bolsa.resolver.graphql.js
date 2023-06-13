const Bolsa = require('../models/bolsa');
const { enumCategoriaBolsaParaTextoValido } = require('../services/converterEnumsEmTextosValidos');

module.exports = {
    Query: {
        bolsas: async (_, args) => {
            const {filtro} = args.filtros;

            const query = {};

            if(filtro.aluno !== null) {
                const aluno = new RegExp(filtro.aluno);
                query.aluno = { $regex: aluno, $options: 'i' };
            }

            if(filtro.categoria !== null) {
                const categoria = enumCategoriaBolsaParaTextoValido(filtro.categoria);
                query.categoria_bolsa = categoria;
            }

            try {

                const bolsas = await Bolsa.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);

                return bolsas;

            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }

        }
    }
};