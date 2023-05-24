const Bolsa = require('../models/bolsa');

module.exports = {
    Query: {
        bolsas: async () => {
            return await Bolsa.find({})
        },
        bolsasPorCategoria: async (_, args) => {
            const CATEGORIA = args.categoria;
            let categoria;
            switch (CATEGORIA) {
                case "TRANSPORTE_ESTUDANTIL":
                    categoria = "Transporte Estudantil";
                    break;
                case "ALIMENTACAO":
                    categoria = "Alimentação";
                    break;
                case "FOTOCOPIA":
                    categoria = "FOTOCÓPIA";
                    break;
                case "MORADIA":
                    categoria = " Moradia Estudantil";
                    break;
                case "ALMOCO":
                    categoria = "Alimentação ALMOÇO";
                    break;
                case "JANTA":
                    categoria = "Alimentação JANTAR";
                    break;
            }
            return await Bolsa.find({ categoria_bolsa: categoria });
        },
        bolsaPorAluno: async (_, args) => {
            const NOME_ALUNO = args.nome;
            return await Bolsa.find({ aluno: NOME_ALUNO });
        }
    }
};