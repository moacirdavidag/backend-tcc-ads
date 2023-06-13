const Setor = require('../models/setor');

module.exports = {
    Query: {
        setores: async (_, args) => {
            const {filtro} = args.filtros;
            
            const query = {};

            if(filtro.nome !== null) {
                const nome = new RegExp(filtro.nome);
                query.nome = { $regex: nome, $options: 'i' };
            }

            if(filtro.sigla !== null) {
                const sigla = new RegExp(filtro.sigla);
                query.sigla = { $regex: sigla, $options: 'i' };
            }

            if(filtro.uo !== null) {
                const uo = new RegExp(filtro.uo);
                query.uo = { $regex: uo, $options: 'i' };
            }

            try {

                const setores = await Setor.find(query)
                .skip(filtro.offset)
                .limit(filtro.limit);

                return setores;

            } catch(e) {
                console.log(`Ocorreu um erro: ${e}`);
            }
            
        }
    }
}