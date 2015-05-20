ipmo WebAdministration;
$virtualPathDirectory = (pwd).Path;
New-WebVirtualDirectory -Site "Default Web Site" -Name brand -PhysicalPath $virtualPathDirectory -Force

$acl = Get-Acl $virtualPathDirectory
$identity = "Everyone"
$fileSystemRights = "Read"
$inheritanceFlags = "ContainerInherit, ObjectInherit"
$propagationFlags = "None"
$accessControlType = "Allow"
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule($identity, $fileSystemRights, $inheritanceFlags, $propagationFlags, $accessControlType)
$acl.SetAccessRule($rule)
Set-Acl $virtualPathDirectory $acl
