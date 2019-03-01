module.exports = {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'USER',
      password : 'PASS',
      database : 'tasks'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
    
};