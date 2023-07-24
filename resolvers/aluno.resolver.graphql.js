const Aluno = require('../models/aluno');
const { enumCotaParaTextoValido, enumSituacaoParaTextoValido } = require('../services/converterEnumsEmTextosValidos');

module.exports = {
    Query: {
        alunos: async (_, args) => {
            const { filtro } = args.filtros;
            const query = {};

            if (filtro.cota !== null) {
                const cota = enumCotaParaTextoValido(filtro.cota);
                query.cota = cota;
            }

            if (filtro.situacao !== null) {
                const situacao = enumSituacaoParaTextoValido(filtro.situacao);
                query.situacao = situacao;
            }

            if (filtro.matricula !== null) {
                query.matricula = filtro.matricula;
            }

            if (filtro.curso !== null) {
                const curso = new RegExp(filtro.curso);
                Object.assign(query, {"curso.nome": {$regex: curso, $options: 'i' }});
            }

            if (filtro.nome !== null) {
                const nome = new RegExp(filtro.nome);
                query.nome = { $regex: nome, $options: 'i' };
            }


            try {
                const alunos = await Aluno.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);
                return alunos;
            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }
        }
    }
}
