# R6Sbot-Votemap
Un bot Discord pour faire des ban de map pour des match sur le jeu Rainbow Six Siege

# Notes de versions:

La version stable actuelle 3.1

- 3.2 (instable): 
  - Mise à jour des maps (map pool ESL).
  - Le ban est désormé comforme aux règlés ESL (ban ban pick pick)(que je n'approuve pas!!)
  - Le vote est arréte (!vote stop) que si une session ban à été lancé.
  - Diverses optimisations du code
- 3.1: Mise à jour des maps et de nouvelles reglès ESL.
- 3.0 "discord.js V12": Refonte du bot
  - Mise à niveau du script pour la compatibilité avec la V12 de Discord.js
  - Optimisation du code (de 1108 lignes à 666 (anté christ))
  - Le code est maintenant structuré avec des fonctions
  - Optimisations de certaines fonctionnalités + fix de quelque bug
  - Automatisation du processus de ban gràce à une fonction qui permet de gérer les différentes maps
- 2.5 : Mise en place de variable permettant de changer le nom de la map (si changement mappool ESL) plus simplement.
- 2.4 : Correction du bug lié à l'affecttion de rôles (" (node:30680) DeprecationWarning: Collection#find: pass a function instead" visible dans la console).
- 2.3 "battleyes1" : Correction du bug lié au couleur des "book" quand une personne d'une autre équipe bannissais une autre map. + __Système ANTI-CHEAT:__ Plus la possibilité de changer de team pendant un vote. + __Système ANTI-CHEAT:__ Plus la possibilité de bannir une map sans équipe (= correction du bug). + __ANTI-CHEAT:__ On peut désormer changer de rôle avant le ban des maps. Changer de role enlèveras l'autre rôle (= correction du bug).
- 2.2 "enrôlé" : Ajout de roles (équipe bleu et équipe orange) (les créer directement via les paramètres du serveur Discord) qui permet d'afficher la couleur de la team qui à banni une map. Couleur des équipe pour le premier match !. + Ajout d'un petit carré de couleur (derrière la croix) pour indiquer quelle équipe à bannis telle map. + Ajout des nouvelles commandes dans le help. + Optimisation du code et de l'indentage.
- 2.1 "tab" : Modification de l'affichage des messages (avant = plusieurs message. maintenant = un gros message). + refont de l'algo pour voter.
- 2.0 "sessionA1" : Ajout d'une sesion pour ban (ce qui marque la fin de la beta). + Modification de l'indentation du srcipt.
- Beta 1.6 : Ajout du nom (speudo) de la personne qui exécute une commande dans les logs (sur la console). + Modification des logs (nouveau code couleurs: Jaune = action, Rouge = commande refusé/pas valide, Vert = accepté/valide). + Modification de petits trucs (ortographe, mise en forme...).
- Beta 1.5 : Ajout d'une réponse du bot si une commande (!vote) n'existe pas. + Ajout d'un message si une commande ban à déjà était utilisée. + Correction du bug de "empty message" visible dans la console quand la commande help été exectué.
- Beta 1.4 : Correction des bugs lié aux couleurs (des logs) dans la console. + Ajout d'indications dans la console (statut du bot ...).+ Correction de l'affichage des liens dans la commande help.
- Beta 1.3 "log" : Ajout de la fonctionnalité de log des actions disponible dans la console. Avec des couleurs !!! + Ajout de la sécance de ban pour le ban 5. Petite erreur d'oublie de ma part.
- Beta 1.2 : Correction de fautes d'orthographe + ajout de "Comment faire un vote de maps" dans l'aide (!vote help).
- Beta 1.1 : Optimisation du code de la beta 1.0 en rajoutant des variables (map) afin de faciliter l'ajout, le retrait des maps en fonction des règles ESL.
- Beta 1.0 "first" : Première version fonctionnelle du Bot. Pour Rainbow Six Siege Y4 S2 et ESL rules Y4 S2.



copyright Benjamin Fourmaux -- Beruet      Twitter: [@BFourmaux](https://www.twitter.com/BFourmaux)
