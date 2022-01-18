const express = require('express')

const config = require('../config.js')
const morgan = require('morgan')

const routes = require('../network/routes')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// ROUER
routes(app)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(config.api.port, () => {
    console.log('http://localhost:' + config.api.port)
})