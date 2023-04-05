module.exports = ({ env }) => ({
  
    graphql: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      introspection: true,
      apolloServer: {
        tracing: false,
      },
    },
  });