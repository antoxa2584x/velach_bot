const convict = require('convict');


const settings = convict({
  env: {
    doc: 'Application environment',
    format: String,
    default: 'dev',
    env: 'NODE_ENV',
  },
  db: {
    connectionString: {
      doc: 'Database connection string',
      format: String,
      default: 'postgres://velach_bot:qwerty@localhost:5432/velach_bot',
      env: 'DB_CONNECTION_STRING',
    },
    dialect: {
      doc: 'Database dialect',
      format: String,
      default: 'postgres',
      env: 'DB_DIALECT',
    },
  },
});

settings.validate();


module.exports = settings;