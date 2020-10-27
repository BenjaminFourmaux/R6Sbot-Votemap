/**
 *  @author: Benjamin Fourmaux Beruet
 *  @version: 4.0
 *  date: 25/10/2020
 * */

// Connexion du bot à l'API discord
console.log('Connexion à discordapp.com en cours...')
const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login('INSERT YOUR TOKEN') // token de connexion

version = '4.0'; // Version du bot


// Initialisation du bot
bot.on('ready', function () {
	console.log('[' + heureDate() + ']' + 'Le Bot a démarré');
	bot.user.setActivity (' les vetomaps (!vote help)', { type: 'WATCHING' }).catch(console.error);
})


/* Déclaration des variables*/
// initialisation de la liste des maps
var Maps =  new Map();
Maps.set('1', "Club House");
Maps.set('2', "Parc d'attractions");
Maps.set('3', "Café Dostoyevsky");
Maps.set('4', "Oregon");
Maps.set('5', "Litoral");
Maps.set('6', "Villa");
Maps.set('7', "Consulat");

// Liste des maps bannis
var listeMapsBan = new Map();
for (var i = 1; i <= Maps.size; i++) {
	listeMapsBan.set(String(i), false);
}

// Liste des maps pick
var listeMapsPick = new Map();
for (var i = 1; i <= Maps.size; i++) {
	listeMapsPick.set(String(i), false);
}

// Liste maps vote
var listeMapsVote = new Map();
for (var i = 1; i <= Maps.size; i++) {
	listeMapsVote.set(String(i), Maps.get(String(i)));
}

voteSession = false;
banban = 0;
pickpick = 0;
banPhase = 0;
pickPhase = 0;
latestVoteTeam = "";
var concatMapVote = "";
concat = "";




/* Fonctions */

/**
* Fonction qui permet de récupérer la date et l'heure pour les logs
* @return La date en string au format jj/mm/aaaa hh/MM/ss
*/
function heureDate() {
	// Get la date actuelle
	d = new Date();
	
	// Format de la date
	dformat = [d.getDate(),
	d.getMonth() + 1,
	d.getFullYear()].join('/') + ' ' +
	[d.getHours(),
	d.getMinutes(),
	d.getSeconds()].join(':');
	
	return dformat;
}
	
/**
* Fonction logConsole qui permet de logger toutes les actions
* @param {string} user : Nom de l'utilisateur qui exécute la comande [console | user_id | user_name]
* @param {string} commande : Nom de la commande
* @param {int} action : Numéro de l'action ( 0 = Neutre, 1 = Éxécuté,  2 = Refusé, 3 = Non reconnu, 4 = Lancé, 5 = Session lancé )
**/
function logConsole(user, commande, action) {
	// Définition des variables
		/**
		*	Rappel Couleur Console:
		* Reset = "\x1b[0m"
		* Bright = "\x1b[1m"
		* Dim = "\x1b[2m"
		* Underscore = "\x1b[4m"
		* Blink = "\x1b[5m"
		* Reverse = "\x1b[7m"
		* Hidden = "\x1b[8m"
		* 
		* FgBlack = "\x1b[30m"
		* FgRed = "\x1b[31m"
		* FgGreen = "\x1b[32m"
		* FgYellow = "\x1b[33m"
		* FgBlue = "\x1b[34m"
		* FgMagenta = "\x1b[35m"
		* FgCyan = "\x1b[36m"
		* FgWhite = "\x1b[37m"
		* 
		* BgBlack = "\x1b[40m"
		* BgRed = "\x1b[41m"
		* BgGreen = "\x1b[42m"
		* BgYellow = "\x1b[43m"
		* BgBlue = "\x1b[44m"
		* BgMagenta = "\x1b[45m"
		* BgCyan = "\x1b[46m"
		* BgWhite = "\x1b[47m"
		**/
		
		
		// Définir l'action
		switch (action) {
			case 0:
				;
				break;
			case 1: // commande éxécuté
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[32m', 'exécuté', '\x1b[0m')
				break;
			case 2: // commande refusé
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', 'refusé', '\x1b[0m')
				break;
			case 3: // pas de team pour le ban
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ no team', '\x1b[0m')
				break;
			case 4: // commande lancé
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m','\"' + commande + '\"', '', '\x1b[32m', 'lancé', '\x1b[0m')
				break;
			case 5: // session lancé
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Session:', '\x1b[37m', '"Ban"', '\x1b[32m', ' lancé', '\x1b[0m');
				break;
			case 6: // session fermé
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m', 'Console', '', '', '--->', '\x1b[33m', 'Session:', '\x1b[37m', '"Ban"', '\x1b[31m', ' stoppé', '\x1b[0m');
				break;
			case 7: // pas de session lancé
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ pas de session ban', '\x1b[0m');
				break;
			case 8: // changement de role (role: bleu)
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m Console', '', '--->', '\x1b[33m', 'Role:', '\x1b[37m', '"bleu (changement)"  pour', + user + '\x1b[32m', ' exécuté', '\x1b[0m');
				break;
			case 9: // ajout du role (role: bleu) !Problème: affiche user=NaN
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m Console', '', '--->', '\x1b[33m', 'Role:', '\x1b[37m', '"bleu"  pour', + user + '\x1b[32m', ' exécuté', '\x1b[0m');
				break;
			case 10: // changement de role (role: orange)
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m Console', '', '--->', '\x1b[33m', 'Role:', '\x1b[37m', '"orange (changement)"  pour', + user + '\x1b[32m', ' exécuté', '\x1b[0m');
				break;
			case 11: // ajout du role (role: orange)
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m Console', '', '--->', '\x1b[33m', 'Role:', '\x1b[37m', '"orange"  pour', + user + '\x1b[32m', ' exécuté', '\x1b[0m');
				break;
			case 12: // map inexistante (le numéro ne correspond pas à une map)
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ map inexistante', '\x1b[0m');
				break;
			case 13: // team 2 vote de suite
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ 2 votes de suite', '\x1b[0m');
				break;
			case 14: // déjà 2 ban
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ 2 maps de bannis', '\x1b[0m');
				break;
			case 15: // Pick avant ban non non !
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ pick avant ban', '\x1b[0m');
				break;
			case 16:
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ maps déjà ban', '\x1b[0m');
				break;
			case 17:
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ maps déjà pick', '\x1b[0m');
				break;
			case 100: // shutdown serveur
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[32m', 'exécuté', '\x1b[0m');
				console.log('[' + heureDate() + ']' + "Server Shutdown ...");
				break;
			case 403: // accè a la commande refusé
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', 'refusé', '\x1b[0m', '/!/ pas les droits', '\x1b[0m');
				break;
			case 404: // commande non reconnu
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m','\"' + commande + '\"', '', '\x1b[31m', 'non reconnu', '\x1b[0m');
				break;
		}

		
}




/* Main */
bot.on('message', function (message) {
	// Déclaration des variables
	let role1 = message.guild.roles.cache.find(x => x.name === "Équipe Bleu");
	let role2 = message.guild.roles.cache.find(r => r.name === "Équipe Orange");
	
	
	// Fonction pour arréter le serve
	function stopBot() {
		user = message.member.user.username;
		if (user === "Benwarrior 37"){
			message.channel.send("Le bot :robot: redémarre :arrows_counterclockwise:");
			logConsole(user, "stopServeur", 100);
			laVoiture.renault(); // Créer une erreur afin que dans la console on puisse relancer le bot
		} else {
			message.channel.send("Vous n'avez pas le droit d'utiliser cette commande");
			// log fonctionnalité
			logConsole(user, "stopServeur", 403);
		}
	}
	

	// Vérification de la commandes / controleur
	if (message.content.startsWith('!vote')) {
		//récupère le nom de l'utilisateur ayant éxécuté la commande
		user = message.member.user.username; 
		
		let args = message.content.split(' ')

		switch (args[1]) {
			case 'ban':
				banMap(args[2]);
				break;
			case 'pick':
				pickMap(args[2]);
				break;
			case 'list':
				listeMap();
				break;
			case 'liste':
				listeMap();
				break;
			case 'help':
				help();
				break;
			case 'start':
				start();
				break;
			case 'stop':
				stopBan();
				break;
			case 'bleu':
				setEquipeBleu(user);
				break;
			case 'orange':
				setEquipeOrange(user);
				break;
			case 'stopbot':
				stopServeur();
				break;
			default:
				message.channel.send("Cette commande n'existe pas")

				// log fonctionnalité
				logConsole(user, args[1], 404);
				
				break;
		}

	}

	/* Fonctions */

	// Fonction liste des maps
	function listeMap() {
		message.channel.send('Voici la liste des cartes: \n')
		for (var [key, value] of Maps){
			concat += key + " - " + value + "\n";
		}
		message.channel.send(concat);
		concat = "";

		// log fonctionnalité
		user = message.member.user.username; //récupère le nom de l'utilisateur ayant éxécuté la commande
		logConsole(user, "list", 1);
	}
	
	
	// Fonction Start	
	function start() {
		message.reply('a lancé un vote des maps') // message.channel.send pour envoyer sans tag et message.reply
		voteSession = true;

		// log fonctionnalité
		user = message.member.user.username; //récupère le nom de l'utilisateur ayant éxécuté la commande
		logConsole(user, "start", 1);
		logConsole("Console", "ban", 5);
	}
	

	// Assination équipe
	// équipe bleu
	function setEquipeBleu(user) {
		
		if (voteSession) { // Vérification si la session de vote est lancé
			if (banPhase !=0 || pickPhase !=0) { // Vérification si une map à déjà été bannis

				message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !");
				// log fonctionnalité
				logConsole("Console", "bleu", 2);

			} else {
				
				if (message.member.roles.cache.find(r => r.name === 'Équipe Orange')) { // Vérrifie si l'utilisateur est déjà dans l'équipe orange 

					// Supprime de role "Orange" puis ajout à l'équipe "Bleu"
					message.member.roles.remove(role2);
					message.member.roles.add(role1);

					message.reply(" a changer d'équipe (orange -> bleu). BLEU :blue_square:");

					// log fonctionnalité
					logConsole(user,"role bleu",8);
					
				} else { // rejoindre directement l'équipe
				
					// Ajout de l'utilisateur à l'équipe "Bleu"
					message.member.roles.add(role1);

					message.reply("a rejoint l'équipe BLEU :blue_square:");

					// log fonctionnalité
					logConsole(user, "role bleu", 9);
				}
			}

		} else {
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")

			// log fonctionnalité
			logConsole(user, "bleu", 7);
		}
	}

	// équipe orange
	function setEquipeOrange (user) {

		if (voteSession) { // Vérification si la session de vote est lancé
			if (banPhase !=0 || pickPhase !=0) { // Vérification si une map à déjà été bannis

				message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !")
				// log fonctionnalité
				logConsole("Console", "orange", 2);

			} else {
				
				if (message.member.roles.cache.find(r => r.name === 'Équipe Bleu')) { // Vérrifie si l'utilisateur est déjà dans l'équipe bleu

					// Supprime de role "Bleu" puis ajout à l'équipe "Orange"
					message.member.roles.remove(role1);
					message.member.roles.add(role2);

					// Ajout de l'utilisateur à l'équipe "Orange"
					message.member.roles.add(role2);

					message.reply("a changer d'équipe (bleu -> orange). ORANGE :orange_square:");

					// log fonctionnalité
					logConsole(user, "role orange", 10);

				} else {

					// Ajout de l'utilisateur à l'équipe "Orange"
					message.member.roles.add(role2);

					message.reply("a rejoint l'équipe ORANGE :orange_square:");

					// log fonctionnalité
					logConsole(user, "role orange", 11);
				}
			}

		} else {
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)");

			// log fonctionnalité
			logConsole(user, "orange", 7);
		}
	}


	// Bannisement map
	/**
	* Fonction qui permet de faire un ban des maps
	* @param {int} Numéro de la map à bannir
	**/
	function banMap(numMap) {
		
		user = message.member.user.username;
		
		if (voteSession) { // Vérification si la session de vote est lancé
		
			if (banban < 2) { // S'il n'y a pas eu de banban ou seulement 1
			
				// Si le user est dans une équipe
				if (message.member.roles.cache.find(r => r.name === 'Équipe Bleu') || message.member.roles.cache.find(r => r.name === 'Équipe Orange')) {
					
					// S'il n'y a pas eu de ban OU s'il y a eu un ban ET un pick
					if (banPhase === 0 || (banPhase === 1 && pickPhase === 1)) {
						
						// Récupération couleur role de l'utilisateur qui ban
						if (message.member.roles.cache.some(role => role.name === "Équipe Bleu")) {
							indicationRole = ':blue_circle:';
							userRole = '(bleu)';
						}
						if (message.member.roles.cache.some(role => role.name === "Équipe Orange")) {
							indicationRole = ':orange_circle:';
							userRole = '(orange)';
						}
						
						// Si l'équipe Orange commence le vote (ban) car c'est l'équipe Bleu qui commence
						if (banPhase === 0 && banban === 0 && userRole === '(orange)') {
							message.channel.send("L'équipe Bleu :blue_circle: doit commencer le vote !");
							
							// log fonctionnalité
							logConsole(user, "ban " + numMap, 2);
						} else {
							
							if (latestVoteTeam != userRole) { // Si l'équipe n'a pas déja bannis
								
								// Si la maps existe
								if (parseInt(numMap) > 0 && parseInt(numMap) <= Maps.size) { 
									
									// Si la map à déja était bannis (listeMapsBan.get(String(numMap))) --> return false si la map n'a pas été bannis
									if (listeMapsBan.get(String(numMap))) {
										message.channel.send('Cette map a déjà été bannie !');
								
										// log fonctionnalité
										logConsole(user, "ban " + numMap, 16);
									} else {
										
										// Si la map à déjà était pick
										if (listeMapsPick.get(numMap)) {
											message.channel.send('Cette map a déjà été pick!');
								
											// log fonctionnalité
											logConsole(user, "ban " + numMap, 17);
										} else {
											
											/* BAN DE LA MAP */
											nomMap = Maps.get(numMap);
											
											// Actualisation de la listeMapsBan
											listeMapsBan.set(numMap, true); // ça marche !!
											
											// Récupération du nom de la map + concat format affichage ban
											concatMapVote = "~~";
											concatMapVote += listeMapsVote.get(numMap);
											concatMapVote += "~~";
											concatMapVote += ' :x:';
											concatMapVote += indicationRole;
											
											// Actualisation de la listeMapsVote
											listeMapsVote.set(numMap, concatMapVote);
											
											// Affichage de la liste
											for (var [key, value] of listeMapsVote){
												concat += key + " - " + value + "\n";
											}
											
											// Affichage channel
											message.reply(indicationRole + " a banni " + nomMap);
											message.channel.send(concat);
											concat = "";
											
											// Actualisation des variables
											latestVoteTeam = userRole;
											banban ++;
											if (banban === 2) {
												banPhase ++;
											}
											
											// log fonctionnalité
											logConsole(user, "ban " + numMap, 1);
										}
									}
								} else {
									message.channel.send("Cette map n'existe pas");
								
									// log fonctionnalité
									logConsole(user, "ban " + numMap, 12);
								}
							} else {
								message.channel.send("Votre équipe a déjà bannis une map");
						
								// log fonctionnalité
								logConsole(user, "ban " + numMap, 13);
							}
						}
					} else {
						message.channel.send("Vous ne pouvez plus ban");
					
						// log fonctionnalité
						logConsole(user, "ban " + numMap, 3);
					}
					
				} else {
					message.channel.send("Vous n'avez pas d'équipe. (!vote bleu/orange)");
					
					// log fonctionnalité
					logConsole(user, "ban " + numMap, 3);
				}
			} else {
				message.channel.send("Vous devez pick maintenant (!vote pick)");
			
				// log fonctionnalité
				logConsole(user, "ban ", 14);
			} 
		} else {
			message.channel.send("La session de vote n'a pas été lancé. (!vote start)");
			
			// log fonctionnalité
			logConsole(user, "ban ", 7);
		}
	}
	
	// Pick map
	/**
	* Fonction qui permet de faire un pick des maps
	* @param {int} Numéro de la map à pick
	**/
	function pickMap(numMap) {
		
		user = message.member.user.username;
		
		if (voteSession) { // Vérification si la session de vote est lancé
		
			if (pickpick < 2) { // S'il n'y a pas eu de pickpick ou seulement 1
			
				// Si le user est dans une équipe
				if (message.member.roles.cache.find(r => r.name === 'Équipe Bleu') || message.member.roles.cache.find(r => r.name === 'Équipe Orange')) {
					
					// S'il n'y a pas eu de ban OU s'il y a eu un ban ET un pick
					if (pickPhase === 0 && banPhase === 1) {
						
						// Récupération couleur role de l'utilisateur qui ban
						if (message.member.roles.cache.some(role => role.name === "Équipe Bleu")) {
							indicationRole = ':blue_circle:';
							userRole = '(bleu)';
						}
						if (message.member.roles.cache.some(role => role.name === "Équipe Orange")) {
							indicationRole = ':orange_circle:';
							userRole = '(orange)';
						}

						if (latestVoteTeam != userRole) { // Si l'équipe n'a pas déja bannis
							
							// Si la maps existe
							if (parseInt(numMap) > 0 && parseInt(numMap) <= Maps.size) { 
								
								// Si la map à déja était bannis (listeMapsBan.get(String(numMap))) --> return false si la map n'a pas été bannis
								if (listeMapsBan.get(String(numMap))) {
									message.channel.send('Cette map a déjà été bannie !');
							
									// log fonctionnalité
									logConsole(user, "pick " + numMap, 16);
								} else {
									
									// Si la map à déjà était pick
									if (listeMapsPick.get(numMap)) {
										message.channel.send('Cette map a déjà été pick!');
							
										// log fonctionnalité
										logConsole(user, "pick " + numMap, 17);
									} else {
										
										/* PICK DE LA MAP */
										nomMap = Maps.get(numMap);
										
										// Actualisation de la listeMapsBan
										listeMapsPick.set(numMap, true); // ça marche !!
										
										// Récupération du nom de la map + concat format affichage ban
										if (pickpick === 0) { indicationNumPick = ':one:'; } // 1er pick
										if (pickpick === 1) { indicationNumPick = ':two:'; } // 2 ème pick
										concatMapVote = "**";
										concatMapVote += listeMapsVote.get(numMap);
										concatMapVote += "**";
										concatMapVote += ' :white_check_mark:';
										concatMapVote += indicationRole;
										concatMapVote += indicationNumPick;
										
										// Actualisation de la listeMapsVote
										listeMapsVote.set(numMap, concatMapVote);
										
										// Affichage de la liste
										for (var [key, value] of listeMapsVote){
											concat += key + " - " + value + "\n";
										}
										
										// Affichage channel
										message.reply(indicationRole + " a choisi " + nomMap);
										message.channel.send(concat);
										concat = "";
										
										// Actualisation des variables
										latestVoteTeam = userRole;
										banban = 0;
										pickpick ++;
										if (pickpick === 2) {
											pickPhase ++;
										}
										
										// log fonctionnalité
										logConsole(user, "pick " + numMap, 1);
									}
								}
							} else {
								message.channel.send("Cette map n'existe pas");
							
								// log fonctionnalité
								logConsole(user, "pick " + numMap, 12);
							}
						} else {
							message.channel.send("Votre équipe a déjà pick une map");
					
							// log fonctionnalité
							logConsole(user, "pick " + numMap, 13);
						}

					} else {
						message.channel.send("Vous ne pouvez plus pick");
					
						// log fonctionnalité
						logConsole(user, "pick " + numMap, 3);
					}
					
				} else {
					message.channel.send("Vous n'avez pas d'équipe. (!vote bleu/orange)");
					
					// log fonctionnalité
					logConsole(user, "pick " + numMap, 3);
				}
			} else {
				message.channel.send("Vous devez ban maintenant (!vote ban)");
			
				// log fonctionnalité
				logConsole(user, "pick ", 14);
			} 
		} else {
			message.channel.send("La session de vote n'a pas été lancé. (!vote start)");
			
			// log fonctionnalité
			logConsole(user, "pick ", 7);
		}
	}
	
	
	// Choix du decider
	if (pickPhase === 1 && banPhase === 2) {
		message.channel.send("-------------------------------\nLe vote est terminé ! Voici les résultat:");
		
		// Va chercher la map qui n'a ni été bannis ni pick (le decider quoi)
		// en parcourant la liste des map vote et en comparant à la liste Maps
		for (var [key, value] of listeMapsVote) {
			for (var [cle, valeur] of Maps) {
				// Si la map est pas bannis ni pick
				if (value === valeur) {
					idMap3 = cle;
					newVal = "**" + valeur + "**" + ' :white_check_mark:' + ":tree:";
					listeMapsVote.set(key, newVal);
				}
			}
		}
		
		
		// Affichage du résumé des maps pick
		for (var [key, value] of listeMapsPick) {
			if (value) {
				idMap = key;
				
				// Parcour de la liste des maps Vote
				for (var [cle, valeur] of listeMapsVote) {
					if (cle === idMap) {// Vérification si la map est pick
						// Choix du rang de la map
						if (valeur.includes(":one:")) { // Map pick n°1
							map1Concat = "Map 1 - " + valeur.replace(":one:", "") + "\n";
						} else if (valeur.includes(":two:")) { // Map pick n°2
							map2Concat = "Map 2 - " + valeur.replace(":two:", "") + "\n";
						}
					} else {
						if (cle === idMap3) {// Map pick n°3
							map3Concat = "Map 3 (decider) - " + valeur.replace(":tree:", "");
						}
					}
				}
			}
		}
		
		message.channel.send(map1Concat + map2Concat + map3Concat);
		
		// Stop ban
		stopBanInter();
	}


	// Stop ban des maps + réinitialisation variables ban
	function stopBan() {
		message.reply('a arrêté le vote des maps');
		
		stopBanInter();
	}
	function stopBanInter() {
		// Réinitialisation des variables
		voteSession = false;
		pickpick = 0;
		banban = 0;
		banPhase = 0;
		pickPhase = 0;
		latestVoteTeam = "";

		//Suppression des roles à la fin du ban (qui la personne qui à éxécuter la commande (à voir pour toutes les personnes du roles dans une prochaine version))
		message.member.roles.remove(role1);
		message.member.roles.remove(role2);

		// log fonctionnalité
		user = message.member.user.username;
		logConsole(user, "stop", 1);
		logConsole(user, "ban", 6);
	}


	// Help
	function help() {
		message.channel.send("R6Sbot Votemap V: " + version);
		message.channel.send('\nComment faire un vote de map -> <https://tinyurl.com/r6sbot-votemap-comment-faire>'
								+'\nVoici la liste des commandes: '
								+'\nPour les commandes de ce bot TOUJOURS commencer par : !vote'
								+'\n- Aide: !vote help '
								+'\n- Liste des maps: !vote list '
								+'\n- Lancer un vote: !vote start '
								+'\n Chosir une équipe: !vote bleu/orange '
								+'\n- Bannir une map: !vote ban [numéro de la map] '
								+'\n- Pick une map: !vote pick [numéro de la map] '
								+'\n- Arrêter un vote: !vote stop '
								+'\n \nGo follow <https://www.twitter.com/Benwarrior37>'
							);

		// log fonctionnalité
		user = message.member.user.username;
		logConsole(user, "help", 1);
	}
})
// fin