const Servidor = require('../models/servidor');

module.exports = {
    Query: {
        servidores: async (_, args) => {
            const {filtro} = args.filtros;

            const aplicarFiltroPorNome = filtro.nome !== null;
            const aplicarFiltroPorMatricula = filtro.matricula !== null;
            const aplicarFiltroPorCargo = filtro.cargo !== null;

            let servidores = await Servidor.find({})
            .skip(filtro.offset)
            .limit(filtro.limit);

            if(aplicarFiltroPorNome) {
                servidores = await Servidor.find({nome: filtro.nome})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return servidores;
            }

            if(aplicarFiltroPorMatricula) {
                servidores = await Servidor.find({matricula: filtro.matricula})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return servidores;
            }

            if(aplicarFiltroPorCargo) {
                servidores = await Servidor.find({cargo_emprego: filtro.cargo})
                .skip(filtro.offset)
                .limit(filtro.limit);
                return servidores;
            }

            return servidores;
        }
    }
}