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