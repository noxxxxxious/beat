#This script will connect to the client's tenant using the application ID, cert thumbprint, and [domain].onmicrosoft.com subdomain
#The script should be run with the arguments in the following order: $AppID $CertificateThumbprint $OrganizationSubdomain $AliasList
Connect-ExchangeOnline -AppId $args[0] -CertificateThumbprint $args[1] -Organization $args[2] -ShowBanner:$false
Get-Mailbox | Where-Object -Property RecipientTypeDetails -EQ UserMailbox | Select-Object Alias,PrimarySMTPAddress,DisplayName | fl

$aliasList = ($args[3] -split ",")

$mailboxList = @()
$backupMailboxes = @()

Write-Host "Getting mailboxes"
$mb = Get-Mailbox

Write-Host "Filtering selected mailboxes"
foreach($alias in $aliasList){
  $mailboxList += $mb | Where-Object -Property Alias -EQ $alias
}

foreach($mailbox in $mailboxList) {
    Write-Host -NoNewline "Hiding "
    Write-Host -NoNewline -ForegroundColor Green $mailbox.Displayname
    Write-Host " from GAL."
    Set-Mailbox $mailbox.Alias -HiddenFromAddressListsEnabled $true

    Write-Host -NoNewline "Creating shared mailbox with name "
    Write-Host -NoNewline -ForegroundColor Green ($mailbox.Displayname + " (Retired)")
    Write-Host -NoNewline " and alias "
    Write-Host -NoNewline -ForegroundColor Green ($mailbox.Alias + ".retired")
    Write-Host "."
    $backupMailboxes += New-Mailbox -Name ($mailbox.Alias + ".retired") -DisplayName ($mailbox.Displayname + " (Retired)") -Alias ($mailbox.Alias + ".retired") -Shared

    Write-Host -NoNewline "Soft deleting "
    Write-Host -NoNewline -ForegroundColor Green $mailbox.DisplayName
    Write-Host -NoNewline " ("
    Write-Host -NoNewline -ForegroundColor Green $mailbox.Alias
    Write-Host ")."
    Remove-Mailbox $mailbox -Confirm:$false
}

Write-Host "Waiting 1 minute to allow shared mailbox GUID's to generate."
Start-Sleep -Seconds 60

foreach($mailbox in $selectedMailboxes){
    $backupMailbox = $backupMailboxes | Where-Object -Property Alias -EQ ($mailbox.Alias + ".retired")

    Write-Host "Hiding new shared mailbox from GAL."
    Set-Mailbox $backupMailbox -HiddenFromAddressListsEnabled $true

    Write-Host -NoNewline "Creating request to transfer "
    Write-Host -NoNewline -ForegroundColor Green $mailbox.Alias
    Write-Host -NoNewline " to "
    Write-Host -NoNewline -ForegroundColor Green $backupMailbox.Alias
    Write-Host "."

    New-MailboxRestoreRequest -SourceMailbox $mailbox.ExchangeGuid -TargetMailbox $backupMailbox.ExchangeGuid -AllowLegacyDNMismatch
}