// import { makeExecutableSchema } from 'graphql-tools';

const { gql } = require('apollo-server');


const typeDefs = gql`
  type Query {
    topRepos: [TopRepos]
  }
  
  type TopRepos {
    name: String
    description: String, 
    stargazers: Int, 
    pullRequestTitle: String, 
    pullRequestBodyText: String, 
    reviewState: String, 
    reviewBodyText: String,
    commentBodyText: String, 
    updatedAt: Int
        }
`;

  module.exports = typeDefs;
/**
  # This is creating a query DataType for Repos 
  # Graphql is being told whenever we ask for Repos, get the following information
  # Graphql requires that we specify what type the field will be
  # Default types with Graphql is ID (erialized as String), Int, Float, String, Boolean
  # '!' exclamation mark indicates the field cannot be null 
* */