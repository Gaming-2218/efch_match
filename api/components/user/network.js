const express = require('express')

const secure = require('./secure')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

// Routes
router.get('/', list)
router.get('/:id/following', follow_by)
router.post('/follow/:id', secure('follow'), follow)
router.get('/:id', get)
router.post('/', upsert)
router.put('/', secure('update'), upsert)

// Internal functions
function list(req, res, next) {
  Controller.list()
    .then((lista) => {
      response.success(req, res, lista, 200)
    })
    .catch(next)
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch(next)
}

function upsert(req, res, next) {
  console.log(req.body)
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch(next)
}

function follow(req, res, next) {
  console.log(req)
  Controller.follow(req.user.ID, req.params.id)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(next)
}

function follow_by(req, res, next) {
  Controller.follow_by(req.params.id)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(next)
}

module.exports = router