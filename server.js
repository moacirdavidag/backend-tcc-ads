import { ApolloServer } from 'apollo-server';

import application from './application';

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
    schema
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then((url) => { console.log(`Server running at ${url.url}`)});