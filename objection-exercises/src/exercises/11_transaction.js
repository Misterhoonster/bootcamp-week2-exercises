const { emit, del } = require('../lib');
const cleanup = require('../lib/cleanup');
const Pet = require('../models/Pet');
const User = require('../models/User')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
    await User.query().delete().where('firstName', 'joe');
    await Pet.query().delete().where('name', 'flopsy');
  try {
    const createUser = await User.transaction(async trx => {
  
      const newUser = await User.query(trx).insert({
        firstName: 'joe',
        lastName: 'shmo',
        email: 'joeshmo37@gmail.com'
      }).returning('*');
  
      const flopsy = await newUser.$relatedQuery('pets', trx).insert({ name: 'flopsy', type: 'CAT' });
      
      const graph = await User.query(trx).withGraphFetched('pets').findOne('firstName', 'joe');
  
      if (graph.pets.length > 15) {
        await newUser.$relatedQuery('pets', trx).delete().where('type', 'BIRD');
      }
  
      return graph.pets.length;
    });
    console.log(createUser);
  } catch (err) {
    console.log(err);
  }

  // -----
  cleanup()
}

run()
