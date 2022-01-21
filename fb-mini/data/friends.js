const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({requestorId, requestedId}) => ({
  id: casual.uuid,
  requestorId: requestorId,
  requestedId: requestedId,
  status: casual.random_element(['accepted', 'rejected', 'pending']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const friendData = []

for (let i = 0; i < 20; ++i) {
  const requestorId = casual.random_element(userData).id
  const requestedId = casual.random_element(userData).id
  friendData.push(casual.friend({requestorId, requestedId}))
}

module.exports = friendData
