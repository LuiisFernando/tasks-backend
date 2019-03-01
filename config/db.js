const config = require('../knexfile.js')


const knex = require('knex')(config) // could be config['dev'], config['prod']


knex.migrate.latest([config]) // automated migrate is dangerous

module.exports = knex

// knex migrate:rollback to rollback
// knex migrate:make 'nome-da-migrate'
// knex migrate:latest (run latest migrate)