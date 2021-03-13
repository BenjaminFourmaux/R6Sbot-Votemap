# R6Sbot-Votemap
Un bot Discord pour faire des ban de map pour des matchs sur le jeu Rainbow Six Siege


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

-Le principe est le BAN PICK & BAN. Les deux équipes commencent à bannir 2 maps puis à en choisir 2 sur lesquelles elle s'affronterons et ensuite bannir 2 maps pour qu'il en reste plus qu'un (le decider).

__Grâce au bot:__

Pour afficher la liste des maps veto (ESL rules) tapez: !vote list.

Pour commencer un vote des maps tapez: !vote start.

Pour choisir votre équipe tapez: !vote bleu(ou orange). Ce qui aurras pour effet de vous mettre dans une équipe (indispensable pour faire un vote des maps).

Pour bannir une map tapez: !vote ban 1 (ou 2,3,4... (le numéro de la map)). 2 maps bannis par équipe.

Pour choisir une map tapez: !vote pick 1 (ou 2,3,4...(le numéro de la map))? Une est Une seul map peut être bannis par une équipe.

Pour arrêter le vote tapez: !vote stop.

Pour afficher l'aide tapez: !vote help.


# Fonctionnalités du bot
- Affiche la liste des maps compétitives (ESL Rule). _Via la commande !vote list._
- Affiche l'aide, la liste des commandes utilisables, la version du bot, comment faire un vote des maps. _Via la commande !vote help._
- Lance une "session de vote" ou les différentes équipes peuvent bannir les maps. Via la commande !vote start.
- Se mettre dans une équipe (soit Équipe Bleu ou Équipe Orange). Via la commande !vote bleu (ou: orange).
- Met les joueurs dans une équipe (équipe bleu et équipe orange) pour simplifier la lecture des bans et ainsi éviter la triche.
- Bannir des maps. _Via la commande !vote ban (et ne numéro de la map)._
- Choisir des maps. _Via la commande !vote pick (et le numéro de la map)._
- Stopper la session de ban. _Via la commande !vote stop._
- Afficher les logs (date, heure, nom de l'utilisateur, action faite, résultat) des actions faite avec le bot (pour éviter la triche et le dupage).
- Empêche le changement d'équipe pendant le vote des maps.
- Empêche l'exécution de la même commande plusieur fois de suite.
- Versions min: Versions allégé sans la fonctionnalité de log et la documentation du code.

# Notes de versions:

La version stable actuelle 4.1
----------------------------------------------------------------------------------------------------------------------------
- 5.x+1 (longtemps) "Tuto": Création d'une vidéo tutorielle afin d'expliquer comment utiliser le bot.
- 5.x (plus tard): Vérification s'il y a 2 équipes pour voter.
  
--------------------------------------------------------------------------------------------------------------------
- 4.1 "Y5S2": màj d'actualisation des maps compétitives.
- 4.0-min "TheLittleBigOne": version allégé de la v4.0 (sans log console et documentation du code).
- 4.0 "TheBigOne": Refonte du coeur du bot:
  - Implémentation du BAN-BAN PICK-PICK BAN-BAN.
  - Ajout de plusieurs test qui permet l'anti cheat (test si le ban à été lancé, si le joueur à bien une équipe ...).
  - Maintenant quand le ban est arrété (!vote stop) tous les roles ("Équipe Bleu" et "Équipe Orange") sont enlever de tous les joueurs.
  - Permet la flexibilité de l'app (pour faire des b01, b03, b05 par exemple).
  - Diverse corrections de bugs et optimisation du code.

copyright Benjamin Fourmaux -- Beruet      Twitter: [@BFourmaux](https://www.twitter.com/BFourmaux)
