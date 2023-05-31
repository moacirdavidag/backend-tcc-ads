const Curso = require('../models/curso');
const { enumModalideCursoParaTextoValido, enumNaturezaParticipacaoParaTextoValido } = require('../services/converterEnumsEmTextosValidos');

module.exports = {
    Query: {
        cursos: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroPorCodigo = filtro.codigo !== null;
            const aplicarFiltroPorNaturezaParticipacao = filtro.natureza_participacao !== null;
            const aplicarFiltroPorModalidade = filtro.modalidade !== null;

            let cursos = await Curso.find({});
            skip(filtro.offset).
            limit(filtro.limit);

            if(aplicarFiltroPorCodigo) {
                cursos = await Curso.find({codigo: filtro.codigo});
                skip(filtro.offset).
                limit(filtro.limit);
                return cursos;
            }

            if(aplicarFiltroPorModalidade) {
                let modalidade = enumModalideCursoParaTextoValido(filtro.modalidade);
                cursos = await Curso.find({modalidade});
                skip(filtro.offset).
                limit(filtro.limit);
                return cursos;
            }

            if(aplicarFiltroPorNaturezaParticipacao) {
                let natureza_participacao = enumNaturezaParticipacaoParaTextoValido(filtro.natureza_participacao);
                cursos = await Curso.find({natureza_participacao});
                skip(filtro.offset).
                limit(filtro.limit);
                return cursos;
            }

            return cursos;
        }
    }
};