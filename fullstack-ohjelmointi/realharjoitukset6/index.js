const express = require('express') 
const app = express()
const port = 3000

const fs = require('fs');
const { request } = require('https');

app.use(express.urlencoded());


let users = 
[
  { 'id':'1', 'name':'Kirsi Kernel' },
  { 'id':'2', 'name':'Matti Mainio' }
  
  
  
]


// Middleware 
app.use((request,response,next)=>{
  
    next()
});

// create logger
const logger = (request, response, next) => {
  const date = new Date()
  const lDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  const log = `${lDate}: ${request.method} ${request.url}\n`
  fs.writeFile("myrequests.txt", log, function (err) {
    if (err) return console.log(err);
  console.log(log)
  next()
  })
}
app.use(logger)


app.get('/users', (request, response) => {  // route1

  let usertable= '<table>'
  ;
  for (const singleuser of users) {
    
    usertable += ' <tr><td> ' + singleuser.id + ' </td><td> ' + singleuser.name + '</td></tr>' 
  }
  usertable += '</table>'
  
  response.send(usertable)
})


app.get('/', (req, res, next) => {
  res.send(`
  <form action="/users" method=get>
  <input type=submit value="List Users">
 </form>


 <form action="/addUser" method=get>
  <input type=submit value="AddUsers">
 </form>
  
  `);
});

app.get('/addUser', (req, res, next)=>{
  res.send(` <form method="POST" action="/users">
  
  <input type="text" name="name" placeholder="username">
  <input type="Submit"  value="Add user">
</form>`)
})

/** Process POST request */
app.post('/users/', (request, response) => {
  const maxId = Math.max(...users.map(user => user.id), 0)
  const user = request.body
  user.id = (maxId+1).toString() 
  users = users.concat(user) 

  let usertable= '<table>'
  ;
  for (const singleuser of users) {
    
    usertable += ' <tr><td> ' + singleuser.id + ' </td><td> ' + singleuser.name + '</td></tr>' 
  }
  usertable += '</table>'
  
  response.send(usertable)
  
 
})


//...
// routeN

app.listen(port, () => {
  console.log('Example app listening on port 3000')
})