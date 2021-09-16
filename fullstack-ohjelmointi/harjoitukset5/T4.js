const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

let counter=0

const server = http.createServer((req, res) => {
  counter+=1
  res.write('Request counter value is '+ counter)
  res.end()
  })

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})