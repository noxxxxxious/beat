export interface OrgDetails {
  name: string,
  domain: string,
  clientId: string,
  certificationThumbprint: string,
  passwordScheme: string
}

export interface UserData {
  alias: string,
  displayName: string,
  primarySMTPAddress: string
}

export interface OperationDetails {
  name: string,
  description: string,
  enabled?: boolean,
  operationList: string[]
}