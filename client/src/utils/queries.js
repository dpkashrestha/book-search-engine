import { gql } from "@apollo/client";

export const GET_ME = gql`
  query user($username: String!) {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
