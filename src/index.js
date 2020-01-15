'use strict'
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const { mongoose } = require('./database')

const app = express()

app.use(
  cors({
    credentials: true,
    origin: true
  })
)

app.options('*', cors())

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/tasks', require('./routes/task.routes'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
