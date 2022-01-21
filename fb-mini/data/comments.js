const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('comment', (userId, postId) => ({
  id: casual.uuid,
  userId: userId,
  postId: postId,
  message: casual.sentence,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const commentData = []

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  const postId = casual.random_element(postData).id
  commentData.push(casual.comment(userId, postId))
}

module.exports = commentData
