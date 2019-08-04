# R6Sbot-Votemap
Un bot Discord pour faire des ban de map pour des parties sur le jeu Rainbow Six Siege


pré-requis:
 - Node.js
 - discord.js
 - Créer un bot sur https://discordapp.com/developers/applications/
      - l'appeler: R6Sbot Votemap
      - Lui mettre l'image logo 1.png
      - Créer deux rôles : "Équipe Bleu" et "Équipe Orange", non afficher sur le coté droite, avec de faible permissions (juste voir et envoyer des messages).
 - Mettre le token de connexion de son bot dans la ligne 3 de index.js
 - tester
 - profiter !

# Comment faire un ban des maps:
Si vous souhaitez obtenir de l'aide (commandes ...) entrer " !vote help" dans un salon text sur lequel le bot a accés.

Pour faire un vote des maps pour des tournois et matchs Rainbow Six Siege (PC, PS4 et Xbox).
2 personnes (les deux représentants/chefs des deux équipes qui s'affrontent)(+1 un admin si besoin).

- En BO3: il vous suffit de bannir un totale de 4 maps pour qu'il en reste 3. 
Vous devez chosir une équipe (équipe bleu et équipe orange). (mettez vous d'aacord avec l'autre équipe pour les équipes (qui commence)). Pour chaque match on change les équipes (l'équipe Bleu du premier match devient l'équipe Orange pour le deuxième et vice-versa).
C'est à l'équipe Orange de commencer le vote. Une fois les 3 maps restantes l'équipe Orange choisit la première map à jouer et ensuite l'équipe Bleu la deuxième et le decider la dernière map restante.
- En BO1: Même principes que le BO3 mais il faut bannir 6 maps au lieu de 4. La dernière map restant étant la map à jouer.


# Fonctionnalités du bot
- Affiche la liste des maps compétitives (ESL Rule). Via la commande !vote list.
- Affiche l'aide, la liste des commandes utilisables, la version du bot, comment faire un vote des maps. Via la commande !vote help
- Lance une "session de ban" ou les différentes équipes peuvent bannir les maps. Via la commande !vote start.
- Se mettre dans une équipe (soit Équipe Bleu ou Équipe Orange). Via la commande !vote bleu (ou: orange).
- Bannir des maps. Via la commande !vote ban (et ne numéro de la map).
- Stopper la session de ban. Via la commande !vote stop.
- Afficher des logs (date, heure, nom de l'utilisateur, action faite, résultat) des actions faite avec le bot (pour éviter la triche et le dupage).

# Notes de versions:
- 2.5 : (très longtemps) Amélioration de l'affichage des bans (ajout de l'image de la map). + Enregistrement automatique des logs dans un fichier text (logs.txt).
- 2.4 : (longtemps) Optimisation du code (fonction direct pour les logs).
- 2.2 : Ajout de roles (équipe bleu et équipe orange) (les créer directement via les paramètres du serveur Discord) qui permet d'afficher la couleur de la team qui à banni une map. Couleur des équipe pour le premier match !. + Ajout d'un petit carré de couleur (derrière la croix) pour indiquer quelle équipe à bannis telle map. + Ajout des nouvelles commandes dans le help. + Optimisation du code et de l'indentage.
- 2.1 : Modification de l'affichage des messages (avant = plusieurs message. maintenant = un gros message). + refont de l'algo pour voter.
- 2.0 : Ajout d'une sesion pour ban (ce qui marque la fin de la beta). + Modification de l'indentation du srcipt
- Beta 1.6 : Ajout du nom (speudo) de la personne qui exécute une commande dans les logs (sur la console). + Modification des logs (nouveau code couleurs: Jaune = action, Rouge = commande refusé/pas valide, Vert = accepté/valide). + Modification de petits trucs (ortographe, mise en forme...).
- Beta 1.5 : Ajout d'une réponse du bot si une commande (!vote) n'existe pas. + Ajout d'un message si une commande ban à déjà était utilisée. + Correction du bug de "empty message" visible dans la console quand la commande help été exectué.
- Beta 1.4 : Correction des bugs lié aux couleurs (des logs) dans la console. + Ajout d'indications dans la console (statut du bot ...).+ Correction de l'affichage des liens dans la commande help.
- Beta 1.3 : Ajout de la fonctionnalité de log des actions disponible dans la console. Avec des couleurs !!! + Ajout de la sécance de ban pour le ban 5. Petite erreur d'oublie de ma part.
- Beta 1.2 : Correction de fautes d'orthographe + ajout de "Comment faire un vote de maps" dans l'aide (!vote help).
- Beta 1.1 : Optimisation du code de la beta 1.0 en rajoutant des variables (map) afin de faciliter l'ajout, le retrait des maps en fonction des règles ESL.
- Beta 1.0 : Première version fonctionnelle du Bot. Pour Rainbow Six Siege Y4 S2 et ESL rules Y4 S2.



copyright Benjamin Fourmaux -- Beruet      Twitter: [@BFourmaux](https://www.twitter.com/BFourmaux)
