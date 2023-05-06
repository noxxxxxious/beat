import orgConfig from '../orgConfig.json' assert { type: 'json' }
import { OrgDetails } from '../interfaces'

export function getOrganizationList(){
  return orgConfig.map(org => {
    return {
      name: org.name,
      domain: org.domain
    }
  })
}

export function getOrganization(orgId: string): OrgDetails | undefined {
  return orgConfig.find(org => org.domain === orgId)
}

export default {
  getOrganizationList
}