const cleanup = require('../lib/cleanup');
const Pet = require('../models/Pet');
const User = require('../models/User')

const run = async () => {
    await User.query().findOne('firstName', 'Peter').patch({'firstName': 'Pete'});
    console.log(await User.query().findOne('firstName', 'Pete'))
    cleanup()
}

run()