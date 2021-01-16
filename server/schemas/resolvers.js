const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const {} = require("../models");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "hello world!";
    },
  },
};

module.exports = resolvers;
