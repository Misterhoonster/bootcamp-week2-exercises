const cleanup = require('../lib/cleanup');
const Pet = require('../models/Pet');
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  
  // Remove Peter if already exists
  await User.query().findOne('firstName', 'Peter').delete();

  const graph = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'peter.bynum@college.harvard.edu',
    pets: [
      {
        type: 'DOG',
        name: 'Rocco'
      },
      {
        type: 'DOG',
        name: 'Rosey'
      }
    ]
  });

  console.log(await User.query().findOne('firstName', 'Peter'));
  console.log(await Pet.query().findOne('name', 'Rocco'));

  // -----
  cleanup()
}

run()
