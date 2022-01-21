
const likeData = require('../data/likes')

exports.seed = knex => knex('likes').del()
  .then(() => knex('likes').insert(likeData))
