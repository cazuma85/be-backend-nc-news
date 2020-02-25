

  
exports.up = function(knex) {
  console.log('creating users tables...');
  return knex.schema.createTable('users', users => {
    users.increments('username').primary();
    users.string('avatar_url').notNullable();
    users.string('name').notNullable();
  });
};



exports.down = function(knex) {
    console.log('removing users tables...');
  return knex.schema.dropTable('users');
};
