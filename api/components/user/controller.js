const nanoid = require('nanoid')
const auth = require('../auth')

const TABLA = 'users'

module.exports = function (injectedStore) {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  function list() {
    return store.list(TABLA)
  }

  function get(id) {
    return store.get(TABLA, id)
  }

  async function upsert(data) {
    const user = {
      name: data.name,
      username: data.username
    }

    if (data.id) {
      user.id = data.id
    } else {
      user.id = nanoid()
    }

    if (data.password || data.username) {
      console.log('va a registar')
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: data.password,
      })
    }

    return store.upsert(TABLA, user)
  }

  function follow(from, to){
    return store.insert(TABLA + '_follow', {
      user_from: from,
      user_to: to
    })
  }

  async function follow_by(id){
    const join = {}
        join[TABLA] = 'user_to' // { user: 'user_to' }
        const query = { user_from: id }
		
		return await store.query(TABLA + '_follow', query, join)
	}

  return {
    list,
    get,
    upsert,
    follow,
    follow_by
  }
}