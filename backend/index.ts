import express from 'express'

const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.send('Hello World!');
})

// app.get('/api/organizations', (req, res) => {

// })

app.listen(port, () => {
  console.log(`Express app listening on port ${port}!`);
})