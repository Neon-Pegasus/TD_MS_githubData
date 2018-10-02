default export const typeDefs = `

type Query {
  TopRepos: [Repos]
},

type TopRepo {
  name: String!, 
  description: String!, 
  stargazers: init!, 
  pullRequest {
    title: String!, 
    bodyText: String!, 
    reviews{
      state: String!, 
      bodyText: String!,
      comments {
        bodyText: String!, 
        updatedAt: init!
      }
    }
  }
  
}
`;

/**
 * "!" represents a required field
* */