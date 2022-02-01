const RemoteDB = require('./remote')
const {db} = require('../config')

module.exports = new RemoteDB(db.host, db.port)