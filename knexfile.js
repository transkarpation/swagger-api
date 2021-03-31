// Update with your config settings.
const {resolve} = require('path')

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'knex_dev',
      user:     'postgres',
      password: 'root'
    },
    migrations: {
      directory: resolve('./knex/migrations'),
    },
    seeds: {
      directory: resolve('./knex/seeds')
    },
    debug: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
