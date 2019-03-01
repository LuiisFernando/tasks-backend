
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull();
        table.datetime('estimatedAt')
        table.datetime('doneAt')
        table.integer('userId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tasks')    
};
