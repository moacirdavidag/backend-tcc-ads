const Aluno = require('../models/aluno');
const { enumCotaParaTextoValido, enumSituacaoParaTextoValido } = require('../services/converterEnumsEmTextosValidos');

module.exports = {
    Query: {
        alunos: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroDeCotas = filtro.cota !== null;
            const aplicarFiltroPorCurso = filtro.curso !== null;
            const aplicarFiltroPorMatricula = filtro.matricula !== null;
            const aplicarFiltroPorSituacao = filtro.situacao !== null;

            let alunos = await Aluno.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(!aplicarFiltroDeCotas && !aplicarFiltroPorCurso && !aplicarFiltroPorMatricula && !aplicarFiltroPorSituacao) {
                return alunos;
            }

            if(aplicarFiltroDeCotas) {
                const cota = enumCotaParaTextoValido(filtro.cota);
                alunos = await Aluno.find({cota})
                .skip(filtro.offset)
                .limit(filtro.limit);
            }

            if(aplicarFiltroPorSituacao) {
                const situacao = enumSituacaoParaTextoValido(filtro.situacao);
                alunos = await Aluno.find({situacao})
                .skip(filtro.offset)
                .limit(filtro.limit);
            }

            if(aplicarFiltroPorMatricula) {
                alunos = await Aluno.find({matricula: filtro.matricula})
                .skip(filtro.offset)
                .limit(filtro.limit);
            }

            // if(aplicarFiltroPorCurso) {
            //     let curso = new RegExp(filtro.curso);
            //     alunos = await Aluno.find({
            //         curso: {
            //             $regex: curso,
            //             $options: 'i'
            //         }
            //     })
            //     .skip(filtro.offset)
            //     .limit(filtro.limit);
            // }

            return alunos;
        }
    }
}