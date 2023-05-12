import opConfig from '../opConfig.json' assert { type: 'json' }
import { getOrganization } from './organizations'
import { OperationDetails, OrgDetails, OperationResult } from '../interfaces'
import retireUsers from '../powershell/retireUsers'
import deleteUsers from '../powershell/deleteUsers'

const operations: OperationDetails[] = opConfig

export function getOperationsList(){
  const ops: OperationDetails[] = []

  //Get enabled operations
  const enabledOperations = operations.filter(op => op.enabled)
  //Create copy without enabled property
  enabledOperations.forEach(op => {
    ops.push({
      name: op.name,
      description: op.description,
      operationList: [...op.operationList]
    })
  })

  console.log('Returning operations: ', ops)
  return ops
}

export function handleOperation(orgId: string, payload: any){
  const { operation, accounts } = payload
  let result = <Promise<OperationResult>>{}
  if(!orgId)     return Promise.resolve({ error: true, output: `Error: orgId is required for handleOperation()`})
  if(!operation) return Promise.resolve({ error: true, output: `Error: Operation is ${operation}`})
  if(!accounts)  return Promise.resolve({ error: true, output: `Error: Accounts is ${accounts} for operation ${operation}`})
  
  console.log(`Handing operation "${operation}" for orgId "${orgId}`)
  const org = getOrganization(orgId)
  if(!org)       return Promise.resolve({ error: true, output: `Error: Unable to find organization data for ${orgId}`})

  switch(operation){
    case 'Retire Users':
      result = retireUsers(org, accounts)
      return result
    case 'Delete Users':
      result = deleteUsers(org, accounts)
      return result
    default:
      result = Promise.resolve({ error: true, output: `Error: Unrecognized operation ${operation}`})
      return result
  }
}