

  
exports.up = function(knex) {
  console.log('creating topics tables...');
  return knex.schema.createTable('topics', topics => {
    topics.string('slug').primary();;
    topics.string('description').notNullable();
  });
};



exports.down = function(knex) {
   console.log('removing topics tables...');
  return knex.schema.dropTable('topics');
};
