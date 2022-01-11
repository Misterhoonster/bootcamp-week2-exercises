const cleanup = require('../lib/cleanup');
const Pet = require('../models/Pet');
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const deleteCats = await Pet.query().delete().where('type', 'CAT').returning('*');
  console.log(deleteCats);
  
  // -----
  cleanup()
}

run()
