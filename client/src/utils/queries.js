import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const GET_BOOKS = gql`
  {
    books {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;
