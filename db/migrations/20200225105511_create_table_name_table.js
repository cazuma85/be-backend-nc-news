
 exports.up = function(knex) {
   console.log('creating articles tables...');
   return knex.schema.createTable('articles', articles => {
     articles.increments('article_id').primary();
     articles.string('title').notNullable();
     articles.text('body').notNullable();
     articles.integer('votes').defaultTo(0);
     articles
       .string('topic')
       .references('slug')
       .inTable('topics');
     articles
       .string('author')
       .references('username')
       .inTable('users');
     articles.timestamp('created_at').defaultTo(knex.fn.now());
   });
 };


exports.down = function(knex) {
     console.log('removing articles tables...');
     return knex.schema.dropTable('articles');
};
