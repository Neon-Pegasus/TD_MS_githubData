// const { db } = require('../database/db.js');


const resolvers = {
  Query: {
    topRepos: () => topRepos.findAll(),
  },
};

module.exports = resolvers;

/**
 * 
 */