const { createApplication } = require("graphql-modules");
const AlunoModules = require('./modules/aluno.module.graphql');
const BolsaModules = require('./modules/bolsa.module.graphql');
const CampiModules = require('./modules/campi.module.graphql');
const CursoModules = require('./modules/curso.module.graphql');
const ServidorModules = require('./modules/servidor.module.graphql');
const PatrimonioModules = require('./modules/patrimonio.module.graphql');
const SetorModules = require('./modules/setor.module.graphql');
const MatrizModules = require('./modules/matriz.module.graphql');
const VersoesSuapModules = require('./modules/versoes-suap.module.graphql');
const ProjetoExtensaoModules = require('./modules/projeto-extensao.module.graphql');
const ProjetoPesquisaModules = require('./modules/projeto-pesquisa.module.graphql');

module.exports = createApplication({
    modules: [AlunoModules, BolsaModules, CampiModules, CursoModules, ServidorModules, 
    PatrimonioModules, SetorModules, MatrizModules, VersoesSuapModules, 
    ProjetoExtensaoModules, ProjetoPesquisaModules]
})



