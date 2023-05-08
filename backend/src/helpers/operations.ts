import opConfig from '../opConfig.json' assert { type: 'json' }
import { OperationDetails } from '../interfaces'
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

export function handleOperation(payload: any){
  const { operation, accounts } = payload
  if(!operation) return { error: true, output: `Error: Operation is ${operation}`}
  if(!accounts)  return { error: true, output: `Error: Accounts is ${accounts} for operation ${operation}`}

  switch(operation){
    case 'Retire Users':

      break;
    default:
  }
}