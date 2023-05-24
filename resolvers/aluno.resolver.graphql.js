const Aluno = require('../models/aluno');
const enumCotaParaTextoValido = require('../services/converterEnumsEmTextosValidos');

module.exports = {
    Query: {
        alunos: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroDeCotas = filtro.cota !== null;
            const aplicarFiltroPorCurso = filtro.curso !== null;
            const aplicarFiltroPorMatricula = filtro.matricula !== null;
            const aplicarFiltroPorSituacao = filtro.situacao !== null;

            const alunos = await Aluno.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(!aplicarFiltroDeCotas && !aplicarFiltroPorCurso && !aplicarFiltroPorMatricula && !aplicarFiltroPorSituacao) {
                return alunos;
            }

            if(aplicarFiltroDeCotas) {
                const cota = enumCotaParaTextoValido(filtro.cota);
                return alunos.filter(alunos => alunos.cota === cota);
            }

            //return alunos;
        }
    }
}