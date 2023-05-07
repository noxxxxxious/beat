import opConfig from '../opConfig.json' assert { type: 'json' }

export function getOperationsList(){
  return opConfig.filter(op => op.enabled)
}