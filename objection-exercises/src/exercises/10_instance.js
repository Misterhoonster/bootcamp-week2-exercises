const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const me = await User.query().findById('28c46650-ef2a-4e0b-886e-7d55905fb28d');

  // Use that instance to create a new pet related that user
  await me.$relatedQuery('pets').insert({ name: 'Bob', type: 'CAT' });

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const allPetsAndChildren = await me.$fetchGraph('[pets, children]');
  console.log(allPetsAndChildren);

  // -----
  cleanup()
}

run()
