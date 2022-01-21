const casual = require('casual')
const userData = require('./users')

casual.define('post', (userId) => ({
  id: casual.uuid,
  userId: userId,
  message: casual.sentence,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const postData = []

for (let i = 0; i < 20; ++i) {
  postData.push(casual.post(casual.random_element(userData).id))
}

module.exports = postData
