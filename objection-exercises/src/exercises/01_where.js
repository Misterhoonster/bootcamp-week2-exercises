const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const namedShawn = await User.query().where('firstName', 'Shawn')
  console.log(namedShawn)

  // Do the same with object notation
  const namedShawn2 = await User.query().where({'firstName': 'Shawn'})
  console.log(namedShawn2)

  // Get all DOGS and BIRDS
  const allDogsAndBirds = await Pet.query().where('type', 'DOG').orWhere('type', 'BIRD')
  console.log(allDogsAndBirds)

  // -----
  cleanup()
}

run()
