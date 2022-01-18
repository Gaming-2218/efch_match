const TABLA = 'auth'

const auth = require('../../../auth')

module.exports = (inyectStore) => {
  let store = inyectStore
  if (!store) {
    store = require('../../../store/mysql')
  }

  const get = async (data) => {
    const {name, password} = data
    console.log(name, password)
    const user = await store.query(TABLA, {name: name})
    if (user.password === password) {
      // Generate Token
      return auth.signin(user)
    } else {
      throw new Error('Usuario o contraseña incorrectos')
    }
  }

  const upsert = (data) => {
    const authData = {
      id: data.id,
      name: data.name,
      password: data.password
    }

    if (data.name) {
      authData.name = data.name
    }

    if (data.email) {
      authData.email = data.email
    }

    if (data.password) {
      authData.password = data.password
    }

    return store.upsert(TABLA, authData)
  }


  return {
    get,
    upsert
  }
}
