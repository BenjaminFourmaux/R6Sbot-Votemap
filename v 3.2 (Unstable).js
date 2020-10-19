/**
 *  @author: Benjamin Fourmaux Beruet
 *  @version: 3.2
 *  date: 10/10/2020
 * */

// Connexion du bot à l'API discord
console.log('Connexion à discordapp.com en cours...')
const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login('INSERT YOUR TOKEN') // token de connexion

version = '3.2'; // Version du bot


// Initialisation du bot
bot.on('ready', function () {
	console.log('[' + heureDate() + ']' + 'Le Bot a démarré');
	bot.user.setActivity (' les vetomaps (!vote help)', { type: 'WATCHING' }).catch(console.error);
})


/* Déclaration des variables*/
// initialisation des variables map
map1 = "Club House";
map2 = "Parc d'attractions";
map3 = "Café Dostoyevsky";
map4 = "Oregon";
map5 = "Litoral";
map6 = "Villa";
map7 = "Consulat";


// variables map bannis
map1x = map1 + ' :x:';
map2x = map2 + ' :x:';
map3x = map3 + ' :x:';
map4x = map4 + ' :x:';
map5x = map5 + ' :x:';
map6x = map6 + ' :x:';
map7x = map7 + ' :x:';

// variables map choisis
map1v = map1 + ' :x:';
map2v = map2 + ' :x:';
map3v = map3 + ' :x:';
map4v = map4 + ' :x:';
map5v = map5 + ' :x:';
map6v = map6 + ' :x:';
map7v = map7 + ' :white_check_mark:';

// initialisation des variables ban 
ban1 = 0;
ban2 = 0;
ban3 = 0;
ban4 = 0;
ban5 = 0;
ban6 = 0;
ban7 = 0;

pick1 = 0;
pick2 = 0;
pick3 = 0;
pick4 = 0;
pick5 = 0;
pick6 = 0;
pick7 = 0;

banSession = 0; // le true ne marche pas
statutRole = 0;
pickpick = 0;
banban = 0;
banPhase = 0;
latestVoteTeam = "";




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
			case 9: // ajout du role (role: bleu)
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
			case 100: // shutdown serveur
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[32m', 'exécuté', '\x1b[0m');
				console.log('[' + heureDate() + ']' + "Server Shutdown ...");
				break;
			case 403: // accè a la commande refusé
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', 'refusé', '\x1b[0m', '/!/ pas les droits', '\x1b[0m');
				break;
			case 404: // commande non reconnu
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m','\"' + commande + '\"', '', '\x1b[31m', 'non reconnu', '\x1b[0m')
				break;
		}

		
}




/* Main */
bot.on('message', function (message) {
	
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
		message.channel.send('1 - ' + map1 + '\n2 - ' + map2 + '\n3 - ' + map3 + '\n4 - ' + map4 + '\n5 - ' + map5 + '\n6 - ' + map6 + '\n7 - ' + map7)

		// log fonctionnalité
		user = message.member.user.username; //récupère le nom de l'utilisateur ayant éxécuté la commande
		logConsole(user, "list", 1);
	}
	
	
	// Fonction Start	
	function start() {
		message.reply('a lancé un vote des maps') // message.channel.send pour envoyer sans tag et message.reply
		banSession = 1;

		// log fonctionnalité
		user = message.member.user.username; //récupère le nom de l'utilisateur ayant éxécuté la commande
		logConsole(user, "start", 1);
		logConsole("Console", "ban", 5);
	}
	

	// Assination équipe
	// équipe bleu
	function setEquipeBleu(userA) {

		if (banSession === 1) { // Vérification si la session ban est lancé
			if (ban1 === 1 || ban2 === 1 || ban3 === 1 || ban4 === 1 || ban5 === 1 || ban6 === 1 || ban7 === 1) { // Vérification si une map à déjà été bannis

				message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !")
				// log fonctionnalité
				logConsole("Console", "bleu", 2);

			} else {
				if (message.member.roles.cache.find(r => r.name === 'Équipe Orange')) { // Vérrifie si l'utilisateur est déjà dans l'équipe orange 

					// Cherche le role "Équipe Orange" puis le supprime de l'utilisateur
					let role2 = message.member.roles.cache.find(r => r.name === "Équipe Orange")
					message.member.roles.remove(role2);

					// Cherche le role "Équipe Bleu" puis l'ajoute à l'utilisateur 
					let role1 = message.guild.roles.cache.find(x => x.name === "Équipe Bleu");
					message.member.roles.add(role1);
					
					
					statutRole = 1;

					message.reply(" a changer d'équipe (orange -> bleu). BLEU :blue_square:")

					// log fonctionnalité
					logConsole(userA,"role bleu",8);
					
				} else { // rejoindre directement l'équipe
				
					// Cherche le role "Équipe Bleu" puis l'ajoute à l'utilisateur 
					let role1 = message.guild.roles.cache.find(x => x.name === "Équipe Bleu");
					message.member.roles.add(role1);
					
					
					statutRole = 1;

					message.reply("a rejoint l'équipe BLEU :blue_square:")

					// log fonctionnalité
					logConsole(userA, "role bleu", 9)
				}
			}

		} else {
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")

			// log fonctionnalité
			user = message.member.user.username;
			logConsole(user, "bleu", 7);
		}
	}

	// équipe orange
	function setEquipeOrange (userO) {

		if (banSession === 1) { // Vérification si la session ban est lancé
			if (ban1 === 1 || ban2 === 1 || ban3 === 1 || ban4 === 1 || ban5 === 1 || ban6 === 1 || ban7 === 1) { // Vérification si une map à déjà été bannis

				message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !")
				// log fonctionnalité
				logConsole("Console", "orange", 2);

			} else {
				if (message.member.roles.cache.find(r => r.name === 'Équipe Bleu')) { // Vérrifie si l'utilisateur est déjà dans l'équipe bleu

					// Cherche le role "Équipe Bleu" puis le supprime de l'utilisateur
					let role1 = message.member.roles.cache.find(r => r.name === "Équipe Bleu")
					message.member.roles.remove(role1);

					// Cherche le role "Équipe Orange" puis l'ajoute à l'utilisateur 
					let role2 = message.guild.roles.cache.find(x => x.name === "Équipe Orange");
					message.member.roles.add(role2);
					
					statutRole = 1;

					message.reply("a changer d'équipe (bleu -> orange). ORANGE :orange_square:")


					// log fonctionnalité
					user = message.member.user.username;
					logConsole(userO, "role orange", 10);

				} else {

					// Cherche le role "Équipe Bleu" puis l'ajoute à l'utilisateur 
					let role1 = message.guild.roles.cache.find(x => x.name === "Équipe Orange");
					message.member.roles.add(role2);

					message.member.addRole(role2);
					
					statutRole = 1;

					message.reply("a rejoint l'équipe ORANGE :orange_square:")

					// log fonctionnalité
					user = message.member.user.username;
					logConsole(userO, "role orange", 11);
				}
			}

		} else {
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")

			// log fonctionnalité
			user = message.member.user.username;
			logConsole(userO, "orange", 7);
		}
	}


	// Bannisement map
	/**
	* Fonction qui permet de faire un ban des maps
	* @param {int} Numéro de la map à bannir
	**/
	function banMap(numMap) {
		
		numMap = parseInt(numMap); // version de numMap (type: string) car il vient du chat en int pour le traitement
		
		if (banSession === 0) { // Vérification session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")

			// log fonctionnalité
			user = message.member.user.username;
			logConsole(user,"ban " + numMap,7);
			
		} else {
			// Vérification statut des rôles
			if (statutRole === 0) { 
				
				message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)")
				
				// log fonctionnalité
				user = message.member.user.username;
				logConsole(user, "ban " + numMap, 3);
			
			} else {
			
				// Récupération de l'équipe de la personne qui à éxécuté la commande de ban
				if (message.guild.roles.cache.find(x => x.name === "Équipe Bleu")) {
					indicationRole = ':blue_circle:';
					userRole = '(bleu)';
				} else if (message.guild.roles.cache.find(x => x.name === "Équipe Orange")) {
					indicationRole = ':orange_circle:';
					userRole = '(orange)';
				}
				
				// Vérification si l'équipe à déjà bannis la map
				if (latestVoteTeam === userRole) {
					message.channel.send("Vous ne pouvez pas bannir 2 maps à la suite");
					
					// log fonctionnalité
					user = message.member.user.username;
					logConsole(user, "ban " + numMap, 13);
				} else {
					
					// Vérification si banban 2x
					if (banban === 2) {
						message.channel.send("Vous avez déjà bannis 2 maps. Vous devez en pick maintenant");
						
						// log fonctionnalité
						user = message.member.user.username;
						logConsole(user, "ban " + numMap, 13);
					} else {
					
						// affectation de la variable banAverif avec la variable ban* correspondante à numéro de la map de la commande envoyé au bot (ex: !vote ban 3)
						switch (numMap) {
							case 1:
								banAverif = ban1;
								indication1Role = indicationRole;
								ban1 = 1;
								nomMap = map1;
								break;
							case 2:
								banAverif = ban2;
								indication2Role = indicationRole;
								ban2 = 1;
								nomMap = map2;
								break;
							case 3:
								banAverif = ban3;
								indication3Role = indicationRole;
								ban3 = 1;
								nomMap = map3;
								break;
							case 4:
								banAverif = ban4;
								indication4Role = indicationRole;
								ban4 = 1;
								nomMap = map4;
								break;
							case 5:
								banAverif = ban5;
								indication5Role = indicationRole;
								ban5 = 1;
								nomMap = map5;
								break;
							case 6:
								banAverif = ban6;
								indication6Role = indicationRole;
								ban6 = 1;
								nomMap = map6;
								break;
							case 7:
								banAverif = ban7;
								indication7Role = indicationRole;
								ban7 = 1;
								nomMap = map7;
								break;
							default:
								banAverif = 100;
								break;
						}
						
						
						if (banAverif == 100) {
							message.channel.send("Cette map n'existe pas");
							
							// log fonctionnalité
							user = message.member.user.username;
							logConsole(user, "ban " + numMap, 12);
							
							
							// Éffacement des variables car banAverif == 100 donc pas de ban
							switch (numMap) {
								case 1:
									indication1Role = "";
									ban1 = 0;
									break;
								case 2:
									banAverif = ban2;
									indication2Role = "";
									ban2 = 0;
									break;
								case 3:
									banAverif = ban3;
									indication3Role = "";
									ban3 = 0;
									break;
								case 4:
									banAverif = ban4;
									indication4Role = "";
									ban4 = 0;
									break;
								case 5:
									banAverif = ban5;
									indication5Role = "";
									ban5 = 0;
									break;
								case 6:
									banAverif = ban6;
									indication6Role = "";
									ban6 = 0;
									break;
								case 7:
									indication7Role = "";
									ban7 = 0;
									break;
							}
							
							
						} else if (banAverif == 1) { // Vérification si la map à déjà été bannie
							
							message.channel.send('Cette map a déjà été bannie !');
							
							
							// Éffacement des variables car banAverif == 1 donc pas de ban
							switch (numMap) {
								case 1:
									indication1Role = "";
									ban1 = 0;
									break;
								case 2:
									banAverif = ban2;
									indication2Role = "";
									ban2 = 0;
									break;
								case 3:
									banAverif = ban3;
									indication3Role = "";
									ban3 = 0;
									break;
								case 4:
									banAverif = ban4;
									indication4Role = "";
									ban4 = 0;
									break;
								case 5:
									banAverif = ban5;
									indication5Role = "";
									ban5 = 0;
									break;
								case 6:
									banAverif = ban6;
									indication6Role = "";
									ban6 = 0;
									break;
								case 7:
									indication7Role = "";
									ban7 = 0;
									break;
							}
							
							
							// log fonctionnalité
							user = message.member.user.username;
							logConsole(user, "ban " + numMap, 2);
							
						} else { // Tous les test ok = bann de la map
							
							message.reply('a banni ' + nomMap)
							
							// bannissement des maps en prenant en compte les maps déjà bannis
							switch (ban1) {
								case 1:
									sendmap1 = '~~1 - ' + map1x + '~~' + indication1Role;
									break;
								case 0:
									sendmap1 = '1 - ' + map1;
									break;
							}
							switch (ban2) {
								case 1:
									sendmap2 = '~~2 - ' + map2x + '~~' + indication2Role;
									break;
								case 0:
									sendmap2 = '2 - ' + map2;
									break;
							}
							switch (ban3) {
								case 1:
									sendmap3 = '~~3 - ' + map3x + '~~' + indication3Role;
									break;
								case 0:
									sendmap3 = '3 - ' + map3;
									break;
							}
							switch (ban4) {
								case 1:
									sendmap4 = '~~4 - ' + map4x + '~~' + indication4Role;
									break;
								case 0:
									sendmap4 = '4 - ' + map4;
									break;
							}
							switch (ban5) {
								case 1:
									sendmap5 = '~~5 - ' + map5x + '~~' + indication5Role;
									break;
								case 0:
									sendmap5 = '5 - ' + map5;
									break;
							}
							switch (ban6) {
								case 1:
									sendmap6 = '~~6 - ' + map6x + '~~' + indication6Role;
									break;
								case 0:
									sendmap6 = '6 - ' + map6;
									break;
							}
							switch (ban7) {
								case 1:
									sendmap7 = '~~7 - ' + map7x + '~~' + indication7Role;
									break;
								case 0:
									sendmap7 = '7 - ' + map7;
									break;
							}
							
							// Actualisation des variable de verif
							banban += 1;
							latestVoteTeam = userRole
							if (banban === 2) {banPhase += 1;}
							
							// Affichage des maps (toutes les maps) 
							message.channel.send(sendmap1 + '\n' + sendmap2 + '\n' + sendmap3 + '\n' + sendmap4 + '\n' + sendmap5 + '\n' + sendmap6 + '\n' + sendmap7 + '\n');
							
							// log fonctionnalité
							user = message.member.user.username + userRole;
							logConsole(user, "ban " + numMap, 1);

						}
					}
				}
			}
		}
	}
	
	// Pick map
	function pickMap(numMap) {
		
		numMap = parseInt(numMap); // version de numMap (type: string) car il vient du chat en int pour le traitement
		
		if (banSession === 0) { // Vérification session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")

			// log fonctionnalité
			user = message.member.user.username;
			logConsole(user,"ban " + numMap,7);
			
		} else {
			// Vérification statut des rôles
			if (statutRole === 0) { 
				
				message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)");
				
				// log fonctionnalité
				user = message.member.user.username;
				logConsole(user, "ban " + numMap, 3);
				
			} else {
				
				// Récupération de l'équipe de la personne qui à éxécuté la commande de ban
				if (message.guild.roles.cache.find(x => x.name === "Équipe Bleu")) {
					indicationRole = ':blue_square:';
					userRole = '(bleu)';
				} else if (message.guild.roles.cache.find(x => x.name === "Équipe Orange")) {
					indicationRole = ':orange_square:';
					userRole = '(orange)';
				}
				
				// Vérification si il y a une banPhase avant
				if (banPhase === 0) {
					message.channel.send("Vous devez commencer par un Ban");
					
					// log fonctionnalité
					user = message.member.user.username;
					logConsole(user, "ban " + numMap, 3);
				} else {
				
					// Vérification si l'équipe à déjà bannis la map
					if (latestVoteTeam === userRole) {
						message.channel.send("Vous ne pouvez pas bannir 2 maps à la suite");
						
						// log fonctionnalité
						user = message.member.user.username;
						logConsole(user, "ban " + numMap, 13);
					} else {
						
						// Vérification si pickpick 2x
						if (pickpick === 2) {
							message.channel.reply("Vous avez déjà pick 2 maps. Vous devez en ban maintenant");
							
							// log fonctionnalité
							user = message.member.user.username;
							logConsole(user, "ban " + numMap, 13);
						} else {
							
							// affectation de la variable banAverif avec la variable ban* correspondante à numéro de la map de la commande envoyé au bot (ex: !vote ban 3)
							switch (numMap) {
								case 1:
									banAverif = pick1;
									pick1 = 1;
									nomMap = map1;
									break;
								case 2:
									banAverif = pick2;
									indication2Role = indicationRole;
									pick2 = 1;
									nomMap = map2;
									break;
								case 3:
									banAverif = pick3;
									indication3Role = indicationRole;
									pick3 = 1;
									nomMap = map3;
									break;
								case 4:
									banAverif = pick4;
									indication4Role = indicationRole;
									pick4 = 1;
									nomMap = map4;
									break;
								case 5:
									banAverif = pick5;
									indication5Role = indicationRole;
									pick5 = 1;
									nomMap = map5;
									break;
								case 6:
									banAverif = pick6;
									indication6Role = indicationRole;
									pick6 = 1;
									nomMap = map6;
									break;
								case 7:
									banAverif = pick7;
									indication7Role = indicationRole;
									pick7 = 1;
									nomMap = map7;
									break;
								default:
									banAverif = 100;
									break;
							}
							
							
							if (banAverif == 100) {
								message.channel.send("Cette map n'existe pas");
								
								// log fonctionnalité
								user = message.member.user.username;
								logConsole(user, "ban " + numMap, 12);
								
								
								// Éffacement des variables car banAverif == 100 donc pas de ban
								switch (numMap) {
									case 1:
										banAverif = pick2;
										indication1Role = "";
										pick1 = 0;
										break;
									case 2:
										banAverif = pick2;
										indication2Role = "";
										pick2 = 0;
										break;
									case 3:
										banAverif = pcik3;
										indication3Role = "";
										pick3 = 0;
										break;
									case 4:
										banAverif = pick4;
										indication4Role = "";
										pick4 = 0;
										break;
									case 5:
										banAverif = pick5;
										indication5Role = "";
										pick5 = 0;
										break;
									case 6:
										banAverif = pick6;
										indication6Role = "";
										pick6 = 0;
										break;
									case 7:
										banAverif = pick7;
										indication7Role = "";
										pcik7 = 0;
										break;
								}
								
								
							} else if (banAverif == 1) { // Vérification si la map à déjà été bannie
								
								message.channel.send('Cette map a déjà été bannie !');
								
								
								// Éffacement des variables car banAverif == 1 donc pas de ban
								switch (numMap) {
									case 1:
										indication1Role = "";
										ban1 = 0;
										break;
									case 2:
										banAverif = ban2;
										indication2Role = "";
										ban2 = 0;
										break;
									case 3:
										banAverif = ban3;
										indication3Role = "";
										ban3 = 0;
										break;
									case 4:
										banAverif = ban4;
										indication4Role = "";
										ban4 = 0;
										break;
									case 5:
										banAverif = ban5;
										indication5Role = "";
										ban5 = 0;
										break;
									case 6:
										banAverif = ban6;
										indication6Role = "";
										ban6 = 0;
										break;
									case 7:
										indication7Role = "";
										ban7 = 0;
										break;
								}
								
								// log fonctionnalité
								user = message.member.user.username;
								logConsole(user, "ban " + numMap, 2);
								
							} else { // Tous les test ok = pick de la map
								
								message.reply('a pick ' + nomMap)
								
								// bannissement des maps en prenant en compte les maps déjà bannis
								switch (pick1) {
									case 1:
										sendmap1 = '~~1 - ' + map1v + '~~' + indication1Role;
										break;
									case 0:
										sendmap1 = '1 - ' + map1;
										break;
								}
								switch (pick2) {
									case 1:
										sendmap2 = '~~2 - ' + map2v + '~~' + indication2Role;
										break;
									case 0:
										sendmap2 = '2 - ' + map2;
										break;
								}
								switch (pick3) {
									case 1:
										sendmap3 = '~~3 - ' + map3v + '~~' + indication3Role;
										break;
									case 0:
										sendmap3 = '3 - ' + map3;
										break;
								}
								switch (pick4) {
									case 1:
										sendmap4 = '~~4 - ' + map4v + '~~' + indication4Role;
										break;
									case 0:
										sendmap4 = '4 - ' + map4;
										break;
								}
								switch (pick5) {
									case 1:
										sendmap5 = '~~5 - ' + map5v + '~~' + indication5Role;
										break;
									case 0:
										sendmap5 = '5 - ' + map5;
										break;
								}
								switch (pick6) {
									case 1:
										sendmap6 = '~~6 - ' + map6v + '~~' + indication6Role;
										break;
									case 0:
										sendmap6 = '6 - ' + map6;
										break;
								}
								switch (pick7) {
									case 1:
										sendmap7 = '~~7 - ' + map7v + '~~' + indication7Role;
										break;
									case 0:
										sendmap7 = '7 - ' + map7;
										break;
								}
								
								// Actualisation des variable de verif
								pickpick+= 1;
								latestVoteTeam = userRole
								if (banban === 2) {banban = 0;}
								
								// Affichage des maps (toutes les maps) 
								message.channel.send(sendmap1 + '\n' + sendmap2 + '\n' + sendmap3 + '\n' + sendmap4 + '\n' + sendmap5 + '\n' + sendmap6 + '\n' + sendmap7 + '\n');
								
								// log fonctionnalité
								user = message.member.user.username + userRole;
								logConsole(user, "ban " + numMap, 1);

							}
						}
					}
				}
			}
		}
	}
	



	// Stop ban des maps + réinitialisation variables ban
	function stopBan() {
		message.reply('a arrêté le vote des maps')
		
		// Réinitialisation des variables ban à 0
		ban1 = 0;
		ban2 = 0;
		ban3 = 0;
		ban4 = 0;
		ban5 = 0;
		ban6 = 0;
		ban7 = 0;

		pick1 = 0;
		pick2 = 0;
		pick3 = 0;
		pick4 = 0;
		pick5 = 0;
		pick6 = 0;
		pick7 = 0;

		banSession = 0; // le true ne marche pas
		statutRole = 0;
		pickpick = 0;
		banban = 0;
		banPhase = 0;
		latestVoteTeam = "";

		//Suppression des roles à la fin du ban (qui la personne qui à éxécuter la commande (à voir pour toutes les personnes du roles dans une prochaine version))
		let role1 = message.guild.roles.cache.find(x => x.name === "Équipe Bleu");
		let role2 = message.guild.roles.cache.find(x => x.name === "Équipe Orange");

		message.member.roles.remove(role1);
		message.member.roles.remove(role2);

		// log fonctionnalité
		user = message.member.user.username;
		logConsole(user, "stop", 1);
		logConsole(user, "ban", 6);

	}


	// Help
	function help() {
		message.channel.send("R6Sbot Votemap V: " + version)
		message.channel.send('\nComment faire un vote de map -> <https://tinyurl.com/r6sbot-votemap-comment-faire> \nVoici la liste des commandes: \nPour les commandes de ce bot TOUJOURS commencer par : !vote . \n- Aide: !vote help \n- Liste des maps: !vote list \n- Lancer un vote: !vote start \n Chosir une équipe: !vote bleu/orange \n- Bannir une map: !vote ban [numéro de la map] \n- Arrêter un vote: !vote stop \n \nGo follow <https://www.twitter.com/Benwarrior37>')

		// log fonctionnalité
		user = message.member.user.username;
		logConsole(user, "help", 1);
	}
})
// fin