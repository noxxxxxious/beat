import express from 'express'

import * as orgs from './helpers/organizations'
import * as ops  from './helpers/operations'
import pwsh from './powershell/index'

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
  const orgList = orgs.getOrganizationList()
  res.json(orgList)
})

app.get('/api/operations', (_req, res) => {
  const opList = ops.getOperationsList()
  res.json(opList)
})

app.get('/api/accounts/:orgId', (req, res) => {
  const orgId = req.params['orgId']
  console.log(`Received request to get accounts for orgId: ${orgId}`)
  const org = orgs.getOrganization(orgId)
  if(!org){
    res.json({error: 'Unable to find organization.'})
    return
  }
  pwsh.getMailboxUsers(org).then(accountList => {
    console.log(`Returning following account list: ${accountList}`)
    res.json(accountList)
  })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}!`);
})