const cleanup = require('../lib/cleanup');
const Pet = require('../models/Pet');
const Relation = require('../models/Relation');
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const first = await User.query().first();
  console.log(`Is old? ${first.isOld}`);
  console.log(`Full name: ${first.fullName}\n`);

  const firstPet = await Pet.query().first();
  console.log(`Is dog? ${firstPet.isDog}`);
  console.log(`Animal type: ${firstPet.animalType}\n`);

  const firstRelation = await Relation.query().first()
  console.log(firstRelation.childIdFormatted);
  console.log(firstRelation.parentIdFormatted);

  // -----
  cleanup()
}

run()
