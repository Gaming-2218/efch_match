
const post = require('../components/post/network')

const routes = (server) => {
  server.use('/api/post', post)
}

module.exports = routes