const express = require('express')
const app = express()

const config = require('../config.js')
const routes = require('./network/routes')
const errors = require('../network/errors')
const morgan = require('morgan')

app.use(express.json())

// Middlewares
app.use(morgan('dev'))

// Routes
routes(app)

app.use(errors)

app.listen(config.post.port, () => {
    console.log('Api escuchando en el puerto ', config.post.port)
})