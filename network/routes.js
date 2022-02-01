const user = require('../api/components/user/network')
const auth = require('../api/components/auth/network')
const post = require('../api/components/post/network')

const routes = (server) => {
  server.use('/api/user', user),
  server.use('/api/auth', auth),
  server.use('/api/post', post)
}

module.exports = routes