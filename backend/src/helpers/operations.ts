import opConfig from '../opConfig.json' assert { type: 'json' }
import { getOrganization } from './organizations'
import { OperationDetails, OrgDetails } from '../interfaces'
import retireUsers from '../powershell/retireUsers'
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
  if(!orgId)     return { error: true, output: `Error: orgId is required for handleOperation()`}
  if(!operation) return { error: true, output: `Error: Operation is ${operation}`}
  if(!accounts)  return { error: true, output: `Error: Accounts is ${accounts} for operation ${operation}`}
  
  console.log(`Handing operation "${operation}" for orgId "${orgId}`)
  const org = getOrganization(orgId)
  if(!org)       return { error: true, output: `Error: Unable to find organization data for ${orgId}`}

  switch(operation){
    case 'Retire Users':
      retireUsers(org, accounts).then(result => { return result })
    default:
  }
}