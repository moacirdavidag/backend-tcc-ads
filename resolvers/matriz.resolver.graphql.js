const Matriz = require('../models/matriz');

module.exports = {
    Query: {
        matrizes: async () => {
            return await Matriz.find({});
        },
        matrizPorCurso: async (_, args) => {
            const CURSO = args.curso;
            return await Matriz.find({descricao: CURSO});
        }
    }
}