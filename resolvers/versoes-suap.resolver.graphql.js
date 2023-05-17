const Versao = require('../models/versoes-suap');

module.exports = {
    Query: {
        versoes: async (_, args) => {
            const {offset, limit} = args;
            return await Versao.find({}).skip(offset).limit(limit);
        }
    }
}