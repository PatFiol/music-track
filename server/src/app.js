console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Create an express app
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Create end-points
app.get('/status', (req, res) => {
  res.send({
    message: 'hey you are here!'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.name}. You are now registered! Have fun!`

  })
})

app.listen(process.env.PORT || 8081)
