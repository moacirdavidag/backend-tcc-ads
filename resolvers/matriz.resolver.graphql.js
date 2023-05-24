const Matriz = require('../models/matriz');

module.exports = {
    Query: {
        matrizes: async (_, args) => {
            const {offset, limit} = args;
            return await Matriz.find({}).skip(offset).limit(limit);
        },
        matrizPorCurso: async (_, args) => {
            const CURSO = args.curso;
            return await Matriz.find({descricao: CURSO});
        }
    }
}