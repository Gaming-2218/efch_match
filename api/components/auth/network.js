const express = require('express')

const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router()

router.post('/signup', (req, res) => {
  const data = req.body
  controller.upsert(data)
    .then(lista => {
      response.success(req, res, lista, 201)
    })
    .catch(e => {
      console.error(e)
      response.error(req, res, 'Unexpected Error', 500)
    })
})

router.post('/signin', (req, res) => {
  const data = req.body
  controller.get(data)
    .then(result => {
      response.success(req, res, result, 200)
    })
    .catch(error => {
      console.error(error)
      response.error(req, res, 'Unexpected Error', 500)
    })
})

module.exports = router