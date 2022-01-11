const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const firstFive = await User.query().select().orderBy('lastName').limit(5);
  console.log(firstFive);

  // Get the second 5 users, ordered by lastName
  const secondFive = await User.query().select().orderBy('lastName').limit(5).offset(5);
  console.log(secondFive);

  // -----
  cleanup()
}

run()
