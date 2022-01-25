const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

//grabs all the files of the client 
app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build', 'index.html')))

require('./db')
  .then(() => app.listen(3001))
  .catch(err => console.log(err))
