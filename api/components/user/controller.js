const TABLA = 'users'

const { nanoid } = require('nanoid')
const auth = require('../auth')

module.exports = (inyectStore) => {
  let store = inyectStore
  if (!store) {
    store = require('../../../store/mysql')
  }
  
  const list = () => {
    return store.list(TABLA)
  }

  const get = (id) => {
    return store.get(TABLA, id)
  }

  const upsert = async (data) => {
    const userData = {
      name: data.name
    }

    if (data.id) {
      userData.id = data.id
    } else {
      userData.id = nanoid()
    }

    if (data.name || data.password) {
      await auth.upsert({
        id: userData.id,
        name: data.name,
        password: data.password
      })
    }
    console.log(data)
    console.log(userData)

    return store.upsert(TABLA, userData)
  }

  const remove = (id) => {
    return store.remove(TABLA, id)
  }

  return {
    list,
    get,
    upsert,
    remove
  }
}
