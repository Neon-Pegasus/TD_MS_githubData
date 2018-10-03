const Sequelize = require('sequelize');
const db = require('../db.js');

const User = db.define('user' {
  gh_userName: Sequelize.STRING,
  full_Name: Sequelize.STRING, 
  pullRequestTitle: Sequelize.STRING,
  pullRequestBody: Sequelize.STRING,
  reviewsBody: Sequelize.STRING,
  commentsBody: Sequelize.STRING,
});

module.exports = User;

/**
 * Model represents a table in the datbase. 
 * full_Name is requested and given by github.
 * gh_username will be given by the user directly. 
 */