const Versao = require('../models/versoes-suap');

module.exports = {
    Query: {
        versoes: async () => {
            return await Versao.find({});
        }
    }
}