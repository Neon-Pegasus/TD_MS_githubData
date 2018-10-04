// import { ApolloServer, gql } from 'apollo-server';
// import schema from './schema.js' ;
// const { psql } = require('../database/db.js');

const resolvers = {
  Query: {
    topRepos() {return schema.topRepos()}
  }
};


// const resolvers = {
//   Query: {
//     topRepos: async() => {
//       const topRepos = await psql('topRepos').select();
//       return topRepos;
//     }, 
//   }
// };


// (parent, _, context) => {
//   return context.psql.query('SELECT * FROM table_name');
// }

module.exports = resolvers;

/**
 * psql is our database setup with postgresql
 * Resolvers are for fetching they types in the schema. 
 */