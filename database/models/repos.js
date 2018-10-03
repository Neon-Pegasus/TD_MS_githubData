const Sequelize = require('sequelize');
const db = require('../db.js');


const Repo = db.define('repo', {
  repositoryName: Sequelize.STRING,
  description: Sequelize.STRING,
  stargazers: Sequelize.INTEGER,
  pullRequestTitle: Sequelize.STRING,
  pullRequestBody: Sequelize.STRING,
  reviewsState: Sequelize.STRING,
  reviewsBody: Sequelize.STRING,
  commentsBody: Sequelize.STRING,
  updatedAt: Sequelize.DATE,
});


module.exports = Repo;

/**
 * Model represents a table in the datbase. 
 */