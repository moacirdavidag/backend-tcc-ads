const Curso = require('../models/curso');

module.exports = {
    Query: {
        cursos: async () => {
            const cursos = await Curso.find({});
            return cursos;
        },
        cursoPorCodigo: async (_, args) => {
            const codigo = args.codigo;
            return await Curso.find({ codigo: codigo });
        },
        cursosPorModalidade: async (_, args) => {
            const MODALIDADE = args.modalidade;
            let modalidade;
            switch (MODALIDADE) {
                case "TECNOLOGIA":
                    modalidade = "Tecnologia";
                    break;
                    //return await Curso.find({modalidade: "Tecnologia"});
                case "BACHARELADO":
                    modalidade = "Bacharelado";
                    break;
                case "LICENCIATURA":
                    modalidade = "Licenciatura";
                    break;
                case "ESPECIALIZACAO":
                    modalidade = "Especialização";
                    break;
                case "SUBSEQUENTE":
                    modalidade = "Subsequente";
                    break;
                case "INTEGRADO":
                    modalidade = "Integrado";
                    break;
                case "INTEGRADO_EJA":
                    modalidade = "Integrado EJA";
                    break;
            }
            return await Curso.find({modalidade: modalidade});
        },
        cursosPorNaturezaParticipacao: async (_, args) => {
            const NATUREZA_PARTICIPACAO = args.participacao;
            switch(NATUREZA_PARTICIPACAO) {
                case "EAD":
                    return await Curso.find({natureza_participacao: "EaD"});
                case "PRESENCIAL":
                    return await Curso.find({natureza_participacao: "Presencial"});
            } 
        }
    }
};