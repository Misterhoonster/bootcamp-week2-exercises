const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('like', ({userId, postId}) => ({
  id: casual.uuid,
  userId: userId,
  postId: postId,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const likeData = []

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  const postId = casual.random_element(postData).id
  likeData.push(casual.like({userId, postId}))
}

module.exports = likeData
