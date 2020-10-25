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

- En BO3: il vous suffit de bannir un totale de 4 maps pour qu'il en reste 3. 
Vous devez chosir une équipe (équipe bleu et équipe orange). (mettez vous d'aacord avec l'autre équipe pour les équipes (qui commence)). Pour chaque match on change les équipes (l'équipe Bleu du premier match devient l'équipe Orange pour le deuxième et vice-versa).
C'est à l'équipe Orange de commencer le vote. Une fois les 3 maps restantes l'équipe Orange choisit la première map à jouer et ensuite l'équipe Bleu la deuxième et le decider la dernière map restante.
- En BO1: Même principes que le BO3 mais il faut bannir 6 maps au lieu de 4. La dernière map restant étant la map à jouer.

__Grâce au bot:__

Pour afficher la liste des maps bannisable (ESL rules) tapez: !vote list . Dans le salon prévu à cet effet.

Pour commencer un vote des maps tapez: !vote start .

Pour choisir votre équipe tapez: !vote bleu(ou bleu). Ce qui aurras pour effet de vous mettre dans une équipe (indispensable pour fair un vote des map).

Pour bannir une map tapez: !vote ban 1 (ou 2,3,4... (le numéro de la map)). Une map banni par équipe ET par tour (une map chacune).

Pour arrêter le vote tapez: !vote stop .

Pour afficher l'aide tapez: !vote help .


# Fonctionnalités du bot
- Affiche la liste des maps compétitives (ESL Rule). Via la commande !vote list.
- Affiche l'aide, la liste des commandes utilisables, la version du bot, comment faire un vote des maps. Via la commande !vote help
- Lance une "session de ban" ou les différentes équipes peuvent bannir les maps. Via la commande !vote start.
- Se mettre dans une équipe (soit Équipe Bleu ou Équipe Orange). Via la commande !vote bleu (ou: orange).
- Met les joueurs dans une équipe (équipe bleu et équipe orange) pour simplifier la lecture des bans et ainsi éviter la triche.
- Bannir des maps. Via la commande !vote ban (et ne numéro de la map).
- Stopper la session de ban. Via la commande !vote stop.
- Afficher des logs (date, heure, nom de l'utilisateur, action faite, résultat) des actions faite avec le bot (pour éviter la triche et le dupage).
- Empêche le changement d'équipe pendant le vote des maps.
- Empêche l'exécution de la même commande plusieur fois de suite.

# Notes de versions:

La version stable actuelle 3.1
----------------------------------------------------------------------------------------------------------------------------
- 4.1 (longtemps) "Tuto": Création d'une vidéo tutorielle afin d'expliquer comment utiliser le bot
- 4.0 (bientôt) "Refonte du coeur": Refonte du coeur du bot
  - Ajout de plusieurs test qui permet l'anti cheat (test si le ban à été lancé, si le joueur à bien une équipe ...).
  - Maintenant quand le ban est arrété (!vote stop) tous les roles ("Équipe Bleu" et "Équipe Orange") sont enlever de tous les joueurs.
  - Permet la flexibilité de l'app (pour faire des b01, b03, b05 par exemple).
  
--------------------------------------------------------------------------------------------------------------------
- 3.2 (instable): 
  - Mise à jour des maps (map pool ESL).
  - Le ban est désormé comforme aux règlés ESL (ban ban pick pick)(que je n'approuve pas!!)
  - Le vote est arréte (!vote stop) que si une session ban à été lancé.
  - Diverses optimisations du code
- 3.1: Mise à jour des maps et de nouvelles reglès ESL.


copyright Benjamin Fourmaux -- Beruet      Twitter: [@BFourmaux](https://www.twitter.com/BFourmaux)
