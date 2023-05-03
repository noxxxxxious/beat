import orgConfig from '../orgConfig.json' assert { type: 'json' }

export function getOrganizationDetails(){
  return orgConfig.map(org => {
    return {
      name: org.name,
      domain: org.domain
    }
  })
}

export default {
  getOrganizationDetails
}