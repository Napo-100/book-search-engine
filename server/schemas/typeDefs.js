const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String): User
    books(username: String): [Book]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(body: saveBookInput): User
    removeBook(bookId: String!): User
  }

  input saveBookInput {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
