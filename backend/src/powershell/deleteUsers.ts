import { spawn } from 'child_process'
import { OrgDetails, UserData } from '../interfaces'

function retireUsers(org: OrgDetails, aliasList: string[]): Promise<{error: boolean, output: string[]}>{
  //Get array of aliases, then format into PowerShell string
  const aliasArgument = aliasList.join(',')
  console.log(aliasArgument)
  return new Promise(resolve => {
    const stdout: string[] = []
    const posh = spawn('C:\\Progra~1\\PowerShell\\7\\pwsh.exe', 
      [`.\\poshscripts\\deleteusers.ps1`, org.clientId, org.certificationThumbprint, org.domain, aliasArgument],
      {shell: true})    
  
    posh.stdout.on('data', data => {
      stdout.push(data.toString())
    })
  
    posh.stderr.on('data', data => {
      console.log(`stderr: ${data}`)
    })
  
    posh.on('close', code => {
      if(code === 0){
        console.log(`deleteUsers for ${org.name} exited with code ${code}. The following users were deleted: ${aliasList}`)
        resolve({error: false, output: stdout})
      } else {
        console.log(`deleteUsers for ${org.name} exited with code ${code}. Delete unsuccessful.`)
        resolve({error: true, output: stdout})
      }
    })
  })
}

export default retireUsers