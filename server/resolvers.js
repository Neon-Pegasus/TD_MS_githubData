// const { db } = require('../database/db.js');


const resolvers = {
  Query: {
    repos: () => repos,
  },
};

module.exports = resolvers;