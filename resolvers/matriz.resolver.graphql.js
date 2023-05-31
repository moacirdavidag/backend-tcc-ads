const Matriz = require('../models/matriz');

module.exports = {
    Query: {
        matrizes: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroPorCurso = filtro.curso !== null;
            
            let matrizes = await Matriz.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(aplicarFiltroPorCurso) {
                matrizes = await Matriz.find({curso: filtro.curso})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return matrizes;
            }

            return matrizes;
        }
    }
}