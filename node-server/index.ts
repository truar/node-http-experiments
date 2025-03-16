import express from 'express'

const app = express()
const port = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/time', (req, res) => {
  const currentDateTime = new Date()
  res.send(currentDateTime.toISOString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})