const { ApolloServer } = require('apollo-server');
require('dotenv').config();

const application = require('./application');

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
    schema
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then((url) => { console.log(`Server running at ${url.url}`)});