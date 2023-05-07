export interface Org {
  name: string,
  domain: string
}

export interface UserAccount {
  displayName: string,
  alias: string,
  primarySMTPAddress: string
}

export interface Operation {
  name: string,
  description: string,
  operationList: string[]
}