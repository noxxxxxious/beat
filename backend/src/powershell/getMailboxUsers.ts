import { spawn } from 'child_process'
import { OrgDetails, UserData } from '../interfaces'

function getMailboxUsers(org: OrgDetails): Promise<UserData[]>{
  return new Promise(resolve => {
    const stdout: string[] = []
    const posh = spawn('C:\\Progra~1\\PowerShell\\7\\pwsh.exe', 
      [`.\\poshscripts\\getmailboxes.ps1`, org.clientId, org.certificationThumbprint, org.domain],
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
  
        const userData: UserData[] = []
        
        for(let i=0; i<data.length; i = i + 3){
          const alias               = data[i].substring(data[i].indexOf(":") + 6)  //Add 6 to index to get rid of garbage whitespace characters
          const primarySMTPAddress  = data[i+1].substring(data[i+1].indexOf(":") + 6)
          const displayName         = data[i+2].substring(data[i+2].indexOf(":") + 6)

          userData.push({
            alias,
            primarySMTPAddress,
            displayName
          })
        }
  
        resolve(userData)
      }
    })
  })
}

export default getMailboxUsers