const request = require('request')

function createRemoteDB(host, port) {
  const URL = 'http://' + host + ':' + port + '/'

  function list(table) {
    return req('GET', table)
  }

  // function get(table, id) {
  // }

  // function upsert(table, data) {
  // }

  function req(method, table, data) {
    let url  = URL + table
    console.log(url)
    body = ''

    if (method === 'GET' && data) {
			url += '/'+ data;
		} else if (data) {
			body = JSON.stringify(data);
		}

    return new Promise((resolve, reject) => {
      request({
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        url,
        body
      }, (err, res, body) => {
        if (err) return reject(err)
        const resp = JSON.parse(body)
        resolve(resp.body)
      })
    })
  }

  return {
    list
  }
}

module.exports = createRemoteDB
