const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');


const server = new ApolloServer({ typeDefs, resolvers });


  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });


/**
 * Apollo server set up  will require...
 * @param { schema }
 * @param { resolvers }
 * Please note that there are further parameters for setting up an Apollo Server 2.0
 * The additional paramenters can be found in the API Documents at
 * https://www.apollographql.com/docs/apollo-server/api/apollo-server.html
 */