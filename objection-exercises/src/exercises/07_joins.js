const cleanup = require('../lib/cleanup');
// Import models
const Pet = require('../models/Pet');
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersWithPets = await User.query().withGraphFetched('pets');

  console.log(usersWithPets[0].pets);

  // Get all users, their pets, AND their children
  const usersPetsAndChildren = await User.query().withGraphFetched('[pets, children]');
  console.log(usersPetsAndChildren[0].children);
  console.log(usersPetsAndChildren[0].pets);


  // Get all users, their parents, and their grandparents
  const usersParentsGrandparents = await User.query().withGraphFetched('parents.parents');
  console.log(usersParentsGrandparents[0].parents[0].parents);

  // Get all users, their pets, their children, and their childrens' pets
  const usersPetsChildrenChildrensPets = await User.query().withGraphFetched('[pets, children.pets]');
  console.log(usersPetsChildrenChildrensPets[0].pets);
  console.log(usersPetsChildrenChildrensPets[0].children);

  // -----
  cleanup()
}

run()
