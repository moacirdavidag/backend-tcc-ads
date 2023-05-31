const Bolsa = require('../models/bolsa');
const { enumCategoriaBolsaParaTextoValido } = require('../services/converterEnumsEmTextosValidos');

module.exports = {
    Query: {
        bolsas: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroPorAluno = filtro.aluno !== null;
            const aplicarFiltroPorCategoria = filtro.categoria != null;

            let bolsas =  await Bolsa.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(aplicarFiltroPorAluno) {
                bolsas =  await Bolsa.find({aluno: filtro.aluno})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return bolsas;
            }

            if(aplicarFiltroPorCategoria) {
                const categoria = enumCategoriaBolsaParaTextoValido(filtro.categoria);
                bolsas =  await Bolsa.find({categoria_bolsa: categoria})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return bolsas;
            }

            return bolsas;
        }
    }
};