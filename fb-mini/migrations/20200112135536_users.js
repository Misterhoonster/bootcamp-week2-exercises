exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('username')
    .unique()
    .notNullable()

  table
    .string('hashedPassword')
    .notNullable()

  table
    .string('firstName')
    .notNullable()
  
  table
    .string('lastName')
    .notNullable()

  table
    .string('email')
    .unique()
    .notNullable()
  
  table
    .string('profilePictureUrl')
    .notNullable()

  table
    .string('bio')
    .notNullable()
    
  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
