import { gql } from 'apollo-server';

export default gql`
query FetchCommentsByUser ($userName: String!) {
  query {
    user(login: $userName ) {
      name
      pullRequests(last: 30) {
        edges {
          node {
            title
            body
            reviews(last: 20) {
              edges {
                node {
                  body
                  comments(last: 20) {
                    edges {
                      node {
                        body
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

/**
 * Query to get comments by Github username. 
 * @param { username } Github username - received from user login 
 * $username is the variable that will add the params into the query
 */