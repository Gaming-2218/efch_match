const express = require('express')

const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router()

router.get('/', (req, res) => {
  const filter = req.query.filter || null
  controller.list(filter)
    .then(lista => {
      response.success(req, res, lista, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  controller.get(id)
    .then(lista => {
      response.success(req, res, lista, 200)
    })
    .catch(e => {
      console.error(e);
      response.error(req, res, 'Unexpected Error', 500)
    })
})

router.post('/', (req, res) => {
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

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const data = req.body
  controller.upsert(id, data)
    .then(lista => {
      response.success(req, res, lista, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  controller.remove(id)
    .then(lista => {
      response.success(req, res, lista, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500)
    })
})

module.exports = router