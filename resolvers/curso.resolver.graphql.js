const Curso = require('../models/curso');
const { enumModalideCursoParaTextoValido, enumNaturezaParticipacaoParaTextoValido } = require('../services/converterEnumsEmTextosValidos');

module.exports = {
    Query: {
        curso: async (_, args) => {
            const {filtro} = args.filtros;
            const query = {};

            if(filtro.codigo !== null) {
                query.codigo = filtro.codigo;
            }

            if(filtro.natureza_participacao !== null) {
                const participacao = enumNaturezaParticipacaoParaTextoValido(filtro.natureza_participacao);
                query.natureza_participacao = participacao;
            }

            if(filtro.modalidade !== null) {
                const modalidade = enumModalideCursoParaTextoValido(filtro.modalidade);
                query.modalidade = modalidade;
            }

            if(filtro.nome !== null) {
                const nome = new RegExp(filtro.nome);
                query.descricao = { $regex: nome, $options: 'i' };
            }

            try {
                const cursos = await Curso.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);

                return cursos ? cursos : [];
            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }

        }
    }
};