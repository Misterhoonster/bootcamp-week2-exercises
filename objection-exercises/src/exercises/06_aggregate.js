const cleanup = require('../lib/cleanup');
const Pet = require('../models/Pet');
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const totalUsers = await User.query().resultSize();
  console.log(totalUsers);

  // Get the average age of users
  const avgAge = await User.query().avg('age as avgAge');
  console.log(avgAge);

  // Get the total number of dogs
  const totalDogs = await Pet.query().where('type', 'DOG').resultSize();
  console.log(totalDogs);

  // -----
  cleanup()
}

run()
