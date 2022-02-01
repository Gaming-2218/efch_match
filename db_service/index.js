const express = require('express')

const config = require('../config.js')

const router = require('./network')

const morgan = require('morgan')

const app = express()

app.use(express.json())

// Middlewares
app.use(morgan('dev'))

// Routes
app.use('/', router)

app.listen(config.db.port, () => {
    console.log('Api escuchando en el puerto ', config.db.port)
})