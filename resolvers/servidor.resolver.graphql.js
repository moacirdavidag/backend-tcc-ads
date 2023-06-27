const Servidor = require('../models/servidor');

module.exports = {
    Query: {
        servidores: async (_, args) => {
            const {filtro} = args.filtros;

            const query = {};

            if(filtro.nome !== null) {
                const nome = new RegExp(filtro.nome);
                query.nome = { $regex: nome, $options: 'i' };
            }

            if(filtro.cargo !== null) {
                const cargo = new RegExp("\^" + filtro.cargo);
                query.cargo_emprego = { $regex: cargo, $options: 'i' };
            }

            if(filtro.matricula !== null) {
                query.matricula = filtro.matricula;
            }


            try {

                const servidores = await Servidor.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);
                return servidores;  

            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }

        }
    }
}