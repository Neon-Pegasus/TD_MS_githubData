const typeDefs = `
  type Query {
    repos: [Repos]
  }
  type Repos {
    name:String!
  }
`;

module.exports = typeDefs;

/**
 * "!" represents a required field
* */