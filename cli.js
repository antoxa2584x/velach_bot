const { exec } = require('child_process');

const minimist = require('minimist');

const models = require('./models');


async function execute(argv) {
  if (argv._.includes('create-schema')) {
    try {
      await models.createSchema();
    } catch (err) {
      console.error(err);
    } finally {
      await models.sequelize.connectionManager.close();
    }
  }

  if (argv._.includes('seed-db')) {
    await new Promise((resolve, reject) => {
      exec(
        'npx sequelize --config \'settings/settings_wrapper_for_sequelize_cli.js\' db:seed:all',
        (err, stdout, stderr) => {
          if (err) {
            console.error(stderr);
            reject(err);
          } else {
            console.log(stdout);
            resolve();
          }
        },
      );
    });
  }

  if (argv._.includes('apply-migrations')) {
    await new Promise((resolve, reject) => {
      exec(
        'npx sequelize --config \'settings/settings_wrapper_for_sequelize_cli.js\' db:migrate',
        (err, stdout, stderr) => {
          if (err) {
            console.error(stderr);
            reject(err);
          } else {
            console.log(stdout);
            resolve();
          }
        },
      );
    });
  }
}


const parsedArgs = minimist(process.argv.slice(2));
execute(parsedArgs);
