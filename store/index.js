const db = {
  users: [
    { id: '1', name: 'John', email: 'john@example.com', password: '123456' },
    { id: '2', name: 'Mary', email: 'mary@example.com', password: '123456' },
    { id: '3', name: 'Peter', email: 'peter@example.com', password: '123456' }
  ]
}

const list = async (table) => {
  return db[table] || []
}

const get = async (table, id) => {
  let col = await list(table)
  return col.filter(item => item.id === id)[0] || {}
}

const query = async (table, filter) => {
  let col = await list(table)
  let keys = Object.keys(filter)[0]
  console.log('key',keys)
  return col.filter(item => item[keys] === filter[keys])[0] || {}

  // return col.filter(item => {
  //   let match = true
  //   Object.keys(fiter).forEach(key => {
  //     if (item[key] !== fiter[key]) match = false
  //   })
  //   return match
  // })
}

const upsert = async (table, data) => {
  if (!db[table]) db[table] = []
  db[table].push(data)

  console.log(db)
}

const remove = async (table, id) => {
  return true
}

module.exports = {
  list,
  get,
  query,
  upsert,
  remove
}
