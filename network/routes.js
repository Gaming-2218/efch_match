const user = require('../api/components/user/network')
const auth = require('../api/components/auth/network')

module.exports = (server) => {
  server.use('/api/user', user),
  server.use('/api/auth', auth)
}