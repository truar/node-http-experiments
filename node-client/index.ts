import express from 'express'
import http from 'http'

const httpAgent = new http.Agent({ keepAlive: true, timeout: 10000, maxSockets: 5 });
http.globalAgent = httpAgent

const app = express()
const port = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  // Call server with http module
  http.get('http://localhost:3001/time', (httpResponse) => {
    httpResponse
    .on('data', (data) => res.send(data))
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})