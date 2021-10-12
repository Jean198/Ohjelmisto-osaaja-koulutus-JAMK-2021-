const express = require('express') 
const app = express()
const port = 3000
const { request } = require('https');
app.use(express.json())
app.use(express.urlencoded());

const mongoose = require('mongoose')

const mongoDB='mongodb+srv://Jean:Tanssi51@democluster.rafje.mongodb.net/student_db'
// connect mongodb
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

// check connection - ok or error
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log("Database test connected")
})



// cities schema
const citiesSchema = new mongoose.Schema({
  cityname:String,
  population: Number,

})

// courses cities schema
const coursesSchema = new mongoose.Schema({
  coursename:String,
  credits: Number,

})

const gradesSchema= new mongoose.Schema({
  courseId: Object,
  courseGrade:Number
})

// students schema
const studentsSchema = new mongoose.Schema({
  lastname:String,
  firstname: String,
  birthdate: Date,
  eyecolor: String,
  incomes: Number,
  taxrate: Number,
  hometown: Object,
  grades:[gradesSchema]

})




// new model
const City = mongoose.model('City', citiesSchema, 'cities')
const Course = mongoose.model('Course', coursesSchema, 'courses')
const Student = mongoose.model('Student', studentsSchema, 'students')
const grad= mongoose.model('grad', gradesSchema)


// Route to create a City-----------------------------------------------------------------------------------------------
app.post('/cities', async (request, response) => {
  // Get name from request
  const { cityname } = request.body
  const {population}= request.body

  // Create a city
  const city = new City({
    cityname: cityname,
    population: population

  })

  // Save to db and send back to caller
  const savedobject = await city.save()
  response.json(savedobject)  
})


// Route to create a new courseCity-----------------------------------------------------------------------------------------------
app.post('/courses', async (request, response) => {
  // Get name from request
  const {coursename} = request.body
  const {credits}= request.body

  // Create a new user
  const course = new Course({
    coursename: coursename,
    credits: credits

  })

  // Save to db and send back to caller
  const savedobject = await course.save()
  response.json(savedobject)  
})

// Route to create a new student----------------------------------------------------------------------------------------------
app.post('/students', async (request, response) => {
  // Get name from request
  const {lastname} = request.body
  const {firstname}= request.body
  const {birthdate} = request.body
  const {eyecolor}= request.body
  const {incomes} = request.body
  const {taxrate} = request.body
  const {hometown}= request.body
  const {grade}= request.body
  const{courseId}= request.body
  const{courseGrade}= request.body

  // Create a new user
  const student = new Student({
    lastname: lastname,
    firstname: firstname,
    birthdate: birthdate,
    eyecolor: eyecolor,
    incomes: incomes,
    taxrate: taxrate,
    hometown: hometown,
    grade:grade,
    courseId:courseId,

  })

  // Save to db and send back to caller
  const savedobject = await student.save()
  response.json(savedobject)  
})

/*
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

*/







app.listen(port, () => {
  console.log('Example app listening on port 3000')
})