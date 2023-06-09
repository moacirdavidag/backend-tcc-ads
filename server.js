const { ApolloServer } = require('apollo-server');

const application = require('./application');

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
    schema,
    cors: {
        origin: "*"
    }
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then((url) => { console.log(`Server running at ${url.url}`)});