const Sequelize = require('sequelize');
const db = require('../db.js');

const OrganizationRepos = db.define('organizationRepos', {
  org_Name: Sequelize.STRING,
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

const OrgMembers = db.define('orgMembers', {
  org_Name: Sequelize.STRING,
  members_name: Sequelize.STRING,
  description: Sequelize.STRING,
  stargazers: Sequelize.INTEGER,
  pullRequestTitle: Sequelize.STRING,
  pullRequestBody: Sequelize.STRING,
});

module.exports = OrganizationRepos;
module.exports = OrgMembers;

/**
 * Model represents a table in the datbase. 
 * OrganizationRepos is a table for an Organization (like google) and their Repos
 * OrganizationMembers is a table for the Members of an Organization(like google)
 */