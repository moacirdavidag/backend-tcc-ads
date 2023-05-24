const { createModule } = require('graphql-modules');
const { alunoSchema } = require('../schemas/aluno.js');
const { aluno: AlunoResolvers } = require('../resolvers/aluno.js');

module.exports = createModule({
    id: 'aluno-modulo',
    dirname: __dirname,
    typeDefs: [alunoSchema],
    resolvers: [AlunoResolvers]
  });