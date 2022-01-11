const cleanup = require('../lib/cleanup');
const Pet = require('../models/Pet');
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const hoon = await User.query().insert({
    email: 'misterhoonster@gmail.com',
    firstName: 'Hoon',
    lastName: 'Shin',
    age: 18,
  });
  console.log(await User.query());

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const toto = await Pet.query().insert({
    ownerId: "28c46650-ef2a-4e0b-886e-7d55905fb28d",
    type: 'DOG',
    name: 'Toto'
  }).returning('*');

  console.log(toto);

  // -----
  cleanup()
}

run()
