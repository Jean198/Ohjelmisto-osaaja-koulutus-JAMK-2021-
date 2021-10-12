const express = require('express') 
const app = express()
const port = 3000

const fs = require('fs');
const { request } = require('https');


app.use(express.json())

let users = 
[
  { 'id':'1', 'name':'Kirsi Kernel' },
  { 'id':'2', 'name':'Matti Mainio' }
  
  
  
]


// Middleware 
app.use((request,response,next)=>{

  const date= (new Date().toISOString())
  const reqUrl=request.url
  const reqMethod=request.method

  fs.appendFile("myrequests.txt", date + " " + reqMethod + " "+ reqUrl + "\n", function(err){
    if(err) return console.log(err);
    console.log("Success! Request written to the text file!")
  })

  
    next()
});


app.get('/', (request, response) => {
  response.send('Welcome to homepage!')
})

app.get('/users', (request, response) => {  // route1
  response.json(users)
})

app.get('/showAddForm', (req, res, next) => {
  res.send(`
 
  <form method="POST" action="/users">
  
  <input type="text" name="name" placeholder="username">
  <input type="Submit"  value="Add user">
</form>`);
});





//...
// routeN

app.listen(port, () => {
  console.log('Example app listening on port 3000')
})