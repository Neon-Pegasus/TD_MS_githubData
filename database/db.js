const pgPromise = require('pg-promise')(/*options*/);
// const dotenv = require('dotenv');

// dotenv.config();

const connectionString = "postgres://onrvsfoe:YLeKOk6VJ9sAvlhrP5pjJOPTskQgKsGb@tantor.db.elephantsql.com:5432/onrvsfoe";
console.log(process.env.DB);

const psql = pgPromise(connectionString);




exports.psql = psql;