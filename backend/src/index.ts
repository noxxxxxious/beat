import express from 'express'

import * as orgs from './helpers/organizations'

const app = express()
const port = 3001

//ENABLE CORS FOR DEVELOPMENT
//TODO: REMOVE FOR PRODUCTION
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (_req, res) => {
  res.send('Hello World!');
})

app.get('/api/organizations', (_req, res) => {
  const orgDetails = orgs.getOrganizationDetails()
  res.json(orgDetails)
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}!`);
})