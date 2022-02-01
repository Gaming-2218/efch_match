const express = require('express')

const swaggerUi = require('swagger-ui-express')

const config = require('../config.js')
const routes = require('./network/routes')
const errors = require('../network/errors')
const morgan = require('morgan')

const app = express()

app.use(express.json())

const swaggerDoc = require('./swagger.json') // eslint-disable-line


// Middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use(morgan('dev'))

// Routes
routes(app)

app.use(errors)

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port)
})