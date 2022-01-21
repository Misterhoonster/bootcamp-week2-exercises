
exports.up = async knex => knex.schema.createTable('comments', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('userId')
    .notNullable()
    .references('users.id')
  
  table
    .uuid('postId')
    .notNullable()
    .references('posts.id')

  table
    .string('message')
    .notNullable()
    
  table.timestamps(true)
});

exports.down = async knex => knex.schema.dropTableIfExists('comments')