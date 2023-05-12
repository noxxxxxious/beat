#This script will connect to the client's tenant using the application ID, cert thumbprint, and [domain].onmicrosoft.com subdomain
#The script should be run with the arguments in the following order: $AppID $CertificateThumbprint $OrganizationSubdomain $AliasList
Connect-ExchangeOnline -AppId $args[0] -CertificateThumbprint $args[1] -Organization $args[2] -ShowBanner:$false
Get-Mailbox | Where-Object -Property RecipientTypeDetails -EQ UserMailbox | Select-Object Alias,PrimarySMTPAddress,DisplayName | Format-List

$aliasList = ($args[3] -split ",")

$mailboxList = @()

Write-Host "Getting mailboxes"
$mb = Get-Mailbox

write-Host "aliasList is the following"
$aliasList

Write-Host "Filtering selected mailboxes"
foreach($alias in $aliasList){
  $mailboxList += $mb | Where-Object -Property Alias -EQ $alias
}

foreach($mailbox in $mailboxList) {
    Write-Host -NoNewline "Soft deleting "
    Write-Host -NoNewline -ForegroundColor Green $mailbox.DisplayName
    Write-Host -NoNewline " ("
    Write-Host -NoNewline -ForegroundColor Green $mailbox.Alias
    Write-Host ")."
    Remove-Mailbox $mailbox -Confirm:$false
}

Write-Host "Completed operation"