

  
exports.up = function(knex) {
  console.log('creating comment tables...');
  return knex.schema.createTable('comments', comments => {
    comments.increments('comment_id').primary();
    comments
      .integer('author')
      .references('username')
      .inTable('users');
    comments.integer('votes').defaultTo(0);
    comments.timestamp('created_at').defaultTo(knex.fn.now());
    comments.string('body').notNullable();
  });
};

exports.down = function(knex) {
    console.log('removing comments tables...');
  return knex.schema.dropTable('comments');
};

