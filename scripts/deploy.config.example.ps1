# Modèle de configuration de déploiement.
# Copier ce fichier en "deploy.config.ps1" (ignoré par git) et y mettre les vrais accès.
#
#   Copy-Item scripts/deploy.config.example.ps1 scripts/deploy.config.ps1
#
# Protocole : "ftp", "ftps" (FTP chiffré) ou "sftp".

$DeployConfig = @{
	Protocol   = 'ftp'                       # ftp | ftps | sftp
	HostName   = 'ftp.mon-hebergeur.com'
	User       = 'mon-identifiant'
	Password   = 'mon-mot-de-passe'
	RemotePath = '/www/'                     # dossier cible sur le serveur (racine du site)

	# SFTP uniquement : empreinte de la clé serveur, exigée par WinSCP.
	# WinSCP l'affiche à la première connexion manuelle ; la coller ici.
	SshHostKeyFingerprint = ''
}
