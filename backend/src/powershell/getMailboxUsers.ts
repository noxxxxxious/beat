import { spawn } from 'child_process'
import { OrgDetails, UserData } from '../interfaces'

function getMailboxUsers(org: OrgDetails): Promise<UserData[]>{
  return new Promise(resolve => {
    const stdout: string[] = []
    const posh = spawn('C:\\Progra~1\\PowerShell\\7\\pwsh.exe', 
      [`.\\poshcommands\\getmailboxes.ps1`, org.clientId, org.certificationThumbprint, org.domain],
      {shell: true})
  
    posh.stdout.on('data', data => {
      stdout.push(data.toString())
    })
  
    posh.stderr.on('data', data => {
      console.log(`stderr: ${data}`)
    })
  
    posh.on('close', code => {
      if(code === 0){
        console.log(`getMailboxUsers for ${org.name} exited with code ${code}. Now processing data.`)
        const data: string[] = []
        //For each piece of data we received
        stdout.forEach(out => {
          //Split on newline
          out.split('\r\n').forEach(split => {
            //Then for each piece line within that piece of data
            if(split){
              //If it's not empty, push it to the data array
              data.push(split)
            }
          })
        })
  
        //Remove first two elements of array since they are useless
        const dataSeparatedByLine = data.splice(2)
  
        const userData: UserData[] = []
  
        dataSeparatedByLine.forEach(userLine => {
          const tempArray = userLine.split(/\s{2,}/)
          userData.push({
            alias: tempArray[0],
            primarySMTPAddress: tempArray[1],
            displayName: tempArray[2]
          })
        })
  
        resolve(userData)
      }
    })
  })
}

export default getMailboxUsers