#This script will connect to the client's tenant using the application ID, cert thumbprint, and [domain].onmicrosoft.com subdomain
#The script should be run with the arguments in the following order: $AppID $CertificateThumbprint $OrganizationSubdomain
Connect-ExchangeOnline -AppId $args[0] -CertificateThumbprint $args[1] -Organization $args[2] -ShowBanner:$false
Get-Mailbox | Where-Object -Property RecipientTypeDetails -EQ UserMailbox | Select-Object Alias,PrimarySMTPAddress,DisplayName