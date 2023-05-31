const Programa = require('../models/programa');

module.exports = {
    Query: {
        programas: async (_, args) => {
            return await Programa.find({}).skip(0).limit(11);
        }
    }
}