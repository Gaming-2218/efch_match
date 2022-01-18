const jwt = require('jsonwebtoken')

const signin = (data) => {
  return jwt.sign(data, 'secret')
}

module.exports = {
  signin
}