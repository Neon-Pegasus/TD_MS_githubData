const typeDefs = `
  type Query {
    repos: [Repos]
  }

  type Repos {
    name: String
    description: String, 
    stargazers: Int, 
    pullRequest {
      title: String, 
      bodyText: String, 
      reviews{
        state: String, 
        bodyText: String,
        comments {
          bodyText: String, 
          updatedAt: Int
        }
      }
    }
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