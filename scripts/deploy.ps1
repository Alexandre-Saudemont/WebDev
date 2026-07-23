# Déploiement du site statique via WinSCP.
# Reconstruit l'export (out/) puis synchronise vers le FTP/SFTP :
# seuls les fichiers modifiés sont envoyés, les fichiers supprimés en local
# sont retirés du serveur (-delete). C'est l'équivalent scripté de la synchro
# manuelle WinSCP.
#
# Usage :   pwsh scripts/deploy.ps1            (build + envoi)
#           pwsh scripts/deploy.ps1 -SkipBuild (envoi seul)
#
# Prérequis : WinSCP installé, et scripts/deploy.config.ps1 renseigné.

param([switch]$SkipBuild)

$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent

$configPath = Join-Path $PSScriptRoot 'deploy.config.ps1'
if (-not (Test-Path $configPath)) {
	throw "Config absente : copiez scripts/deploy.config.example.ps1 en scripts/deploy.config.ps1 et renseignez vos accès."
}
. $configPath
$c = $DeployConfig

$winscp = 'C:\Program Files (x86)\WinSCP\WinSCP.com'
if (-not (Test-Path $winscp)) { throw "WinSCP introuvable : $winscp" }

if (-not $SkipBuild) {
	Write-Host '> Build de l''export statique...' -ForegroundColor Cyan
	Push-Location $root
	npm run build
	Pop-Location
}

$outDir = Join-Path $root 'out'
if (-not (Test-Path $outDir)) { throw "Dossier out/ absent : lancez le build d'abord." }

# Construction de l'URL de session selon le protocole
$userEnc = [uri]::EscapeDataString($c.User)
$passEnc = [uri]::EscapeDataString($c.Password)
switch ($c.Protocol) {
	'sftp'  { $prefix = 'sftp';  $needsKey = $true }
	'ftps'  { $prefix = 'ftps';  $needsKey = $false }
	default { $prefix = 'ftp';   $needsKey = $false }
}
$sessionUrl = "${prefix}://${userEnc}:${passEnc}@$($c.HostName)/"

$openArgs = "`"$sessionUrl`""
if ($needsKey) {
	if (-not $c.SshHostKeyFingerprint) {
		throw "SFTP : renseignez SshHostKeyFingerprint dans deploy.config.ps1 (visible à la 1re connexion WinSCP)."
	}
	$openArgs += " -hostkey=`"$($c.SshHostKeyFingerprint)`""
}

Write-Host "> Synchronisation vers $($c.HostName)$($c.RemotePath) ..." -ForegroundColor Cyan
& $winscp /log=NUL /command `
	"open $openArgs" `
	"synchronize remote -delete -criteria=size,time `"$outDir`" `"$($c.RemotePath)`"" `
	"exit"

if ($LASTEXITCODE -ne 0) { throw "WinSCP a renvoyé le code $LASTEXITCODE." }
Write-Host '> Déploiement terminé.' -ForegroundColor Green
