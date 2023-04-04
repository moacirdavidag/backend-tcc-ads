const Aluno = require('../models/aluno');

module.exports = {
    Query: {
        alunos: async () => {
            return await Aluno.find({});
        },
        alunosPorMatricula: (async (_, args) => {
            return await Aluno.findOne({matricula: args.matricula});
        }),
        alunosPorCota: async (_, args) => {
            const COTA_CONSULTA = args.cota;
            let cota;
            switch (COTA_CONSULTA) {
                case "ESCOLA_PUBLICA":
                    cota = "Oriundo de escola pública";
                    break;
                case "ESCOLA_PUBLICA_PPI":
                    cota = "Oriundo de escola pública, declarado PPI";
                    break;
                case "NENHUMA":
                    cota = "Não se aplica";
                    break;
            };
            return await Aluno.find({ cota: cota }, {_id: 0});
        },
        alunosPorSituacao: async (_, args) => {
            const SITUACAO_CONSULTA = args.situacao;
            let situacao;
            switch (SITUACAO_CONSULTA) {
                case "EVASAO":
                    situacao = "Evasão";
                    break;
                case "TRANCADO":
                    situacao = "Trancado";
                    break;
                case "TRANCADO_VOLUNTARIAMENTE":
                    situacao = "Trancado Voluntariamente";
                    break;
                case "MATRICULADO":
                    situacao = "Matriculado";
                    break;
                case "CANCELADO":
                    situacao = "Cancelado";
                    break;
                case "FORMADO":
                    situacao = "Formado";
                    break;
                case "TRANSFERIDO_EXTERNO":
                    situacao = "Transferido Externo";
                    break;
                case "CANCELAMENTO_COMPULSORIO":
                    situacao = "Cancelamento Compulsório";
                    break;
                case "CONCLUIDO":
                    situacao = "Concluído";
                    break;
            };
            return await Aluno.find({situacao});
        },
        alunosPorCurso: async (_, args) => {
            await Aluno.find({"curso.nome": args.curso})
        }
    }
}