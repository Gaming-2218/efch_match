const nanoid = require('nanoid')
const auth = require('../auth')

const TABLA = 'posts'

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
    const post = {
      text: data.text,
      user: data.user
    }

    if (data.id) {
      post.id = data.id
    } else {
      post.id = nanoid()
    }
    if (data && data.id) {
      return store.update(TABLA, post)
    } else {
      return store.insert(TABLA, post)
    }
  }

  return {
    list,
    get,
    upsert
  }
}