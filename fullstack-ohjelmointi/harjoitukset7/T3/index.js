const express = require('express') 
const app = express()
const port = 3000
const fs = require('fs');
const { request } = require('https');
app.use(express.json())
app.use(express.urlencoded());

const mongoose = require('mongoose')

const mongoDB='mongodb+srv://Jean:Tanssi51@democluster.rafje.mongodb.net/test'
// connect mongodb
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

// check connection - ok or error
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log("Database test connected")
})



const userSchema = new mongoose.Schema({
  name: String
})

// new model
const User = mongoose.model('User', userSchema, 'users')


const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  email: String
})


// create a new user
app.post('/users', async (request, response) => {
  // Get name from request
  const { name } = request.body

  // Create a new user
  const user = new User({
    name: name
  })

  // Save to db and send back to caller
  const savedUser = await user.save()
  response.json(savedUser)  
})


// get all users
app.get('/users', async (request, response) => {
  const users = await User.find({})
  response.json(users)
})


app.get('/users/:id', async (request, response) => {
  const user = await User.findById(request.params.id)
  if (user) response.json(user)
  else response.status(404).end()
})

// delete one user
app.delete('/users/:id', async (request, response) => {
  const deletedUser = await User.findByIdAndRemove(request.params.id)
  if (deletedUser) response.json(deletedUser)
  else response.status(404).end()
})







app.listen(port, () => {
  console.log('Example app listening on port 3000')
})