const Matriz = require('../models/matriz');

module.exports = {
    Query: {
        matrizes: async (_, args) => {
            const {filtro} = args.filtros;

            const query = {};

            if(filtro.curso !== null) {
                const curso = new RegExp(filtro.curso);
                query.descricao = { $regex: curso, $options: 'i'};
            }

            try {
                const matriz = await Matriz.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);

                return matriz;
                
            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }

        }
    }
}