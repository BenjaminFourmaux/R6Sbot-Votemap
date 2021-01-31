console.log('Connexion à discordapp.com en cours...');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('INSERT YOUR TOKEN');
version = '4.0';
bot.on('ready', function () {
	console.log('[' + heureDate() + ']' + 'Le Bot a démarré');
	bot.user.setActivity (' les vetomaps (!vote help)', { type: 'WATCHING' }).catch(console.error);
});
var Maps =  new Map();
Maps.set('1', "Club House");
Maps.set('2', "Parc d'attractions");
Maps.set('3', "Café Dostoyevsky");
Maps.set('4', "Oregon");
Maps.set('5', "Litoral");
Maps.set('6', "Villa");
Maps.set('7', "Consulat");
var listeMapsBan = new Map();
for (var i = 1; i <= Maps.size; i++) {
	listeMapsBan.set(String(i), false);
}
var listeMapsPick = new Map();
for (var i = 1; i <= Maps.size; i++) {
	listeMapsPick.set(String(i), false);
}
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
function heureDate() {
	d = new Date();
	dformat = [d.getDate(),
	d.getMonth() + 1,
	d.getFullYear()].join('/') + ' ' +
	[d.getHours(),
	d.getMinutes(),
	d.getSeconds()].join(':');
	return dformat;
}
function logConsole(user, commande, action) {
		switch (action) {
			case 0:
				;
				break;
			case 1: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[32m', 'exécuté', '\x1b[0m')
				break;
			case 2: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', 'refusé', '\x1b[0m')
				break;
			case 3: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ no team', '\x1b[0m')
				break;
			case 4: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m','\"' + commande + '\"', '', '\x1b[32m', 'lancé', '\x1b[0m')
				break;
			case 5: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Session:', '\x1b[37m', '"Ban"', '\x1b[32m', ' lancé', '\x1b[0m');
				break;
			case 6: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m', 'Console', '', '', '--->', '\x1b[33m', 'Session:', '\x1b[37m', '"Ban"', '\x1b[31m', ' stoppé', '\x1b[0m');
				break;
			case 7: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ pas de session ban', '\x1b[0m');
				break;
			case 8: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m Console', '', '--->', '\x1b[33m', 'Role:', '\x1b[37m', '"bleu (changement)"  pour', + user + '\x1b[32m', ' exécuté', '\x1b[0m');
				break;
			case 9: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m Console', '', '--->', '\x1b[33m', 'Role:', '\x1b[37m', '"bleu"  pour', + user + '\x1b[32m', ' exécuté', '\x1b[0m');
				break;
			case 10: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m Console', '', '--->', '\x1b[33m', 'Role:', '\x1b[37m', '"orange (changement)"  pour', + user + '\x1b[32m', ' exécuté', '\x1b[0m');
				break;
			case 11: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m Console', '', '--->', '\x1b[33m', 'Role:', '\x1b[37m', '"orange"  pour', + user + '\x1b[32m', ' exécuté', '\x1b[0m');
				break;
			case 12: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ map inexistante', '\x1b[0m');
				break;
			case 13: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ 2 votes de suite', '\x1b[0m');
				break;
			case 14: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ 2 maps de bannis', '\x1b[0m');
				break;
			case 15: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ pick avant ban', '\x1b[0m');
				break;
			case 16:
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ maps déjà ban', '\x1b[0m');
				break;
			case 17:
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', ' refusé', '\x1b[0m', '/!/ maps déjà pick', '\x1b[0m');
				break;
			case 100: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[32m', 'exécuté', '\x1b[0m');
				console.log('[' + heureDate() + ']' + "Server Shutdown ...");
				break;
			case 403: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m' + commande + '', '\x1b[31m', 'refusé', '\x1b[0m', '/!/ pas les droits', '\x1b[0m');
				break;
			case 404: 
				console.log('[' + heureDate() + ']' + '\x1b[33m', 'User:', '\x1b[0m' + user + '', '', '--->', '\x1b[33m', 'Commande:', '\x1b[37m','\"' + commande + '\"', '', '\x1b[31m', 'non reconnu', '\x1b[0m');
				break;
		}
}

bot.on('message', function (message) {
	let role1 = message.guild.roles.cache.find(x => x.name === "Équipe Bleu");
	let role2 = message.guild.roles.cache.find(r => r.name === "Équipe Orange");
	function stopBot() {
		user = message.member.user.username;
		if (user === "Benwarrior 37"){
			message.channel.send("Le bot :robot: redémarre :arrows_counterclockwise:");
			logConsole(user, "stopServeur", 100);
			laVoiture.renault();
		} else {
			message.channel.send("Vous n'avez pas le droit d'utiliser cette commande");
			logConsole(user, "stopServeur", 403);
		}
	}
	if (message.content.startsWith('!vote')) {
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
				logConsole(user, args[1], 404);
				break;
		}
	}
	function listeMap() {
		message.channel.send('Voici la liste des cartes: \n')
		for (var [key, value] of Maps){
			concat += key + " - " + value + "\n";
		}
		message.channel.send(concat);
		concat = "";
		user = message.member.user.username;
		logConsole(user, "list", 1);
	}	
	function start() {
		message.reply('a lancé un vote des maps');
		voteSession = true;
		user = message.member.user.username;
		logConsole(user, "start", 1);
		logConsole("Console", "ban", 5);
	}
	function setEquipeBleu(user) {
		
		if (voteSession) {
			if (banPhase !=0 || pickPhase !=0) {
				message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !");
				logConsole("Console", "bleu", 2);
			} else {
				if (message.member.roles.cache.find(r => r.name === 'Équipe Orange')) {
					message.member.roles.remove(role2);
					message.member.roles.add(role1);
					message.reply(" a changer d'équipe (orange -> bleu). BLEU :blue_square:");
					logConsole(user,"role bleu",8);
				} else {
					message.member.roles.add(role1);
					message.reply("a rejoint l'équipe BLEU :blue_square:");
					logConsole(user, "role bleu", 9);
				}
			}
		} else {
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			logConsole(user, "bleu", 7);
		}
	}
	function setEquipeOrange (user) {

		if (voteSession) {
			if (banPhase !=0 || pickPhase !=0) {
				message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !")
				logConsole("Console", "orange", 2);
			} else {
				if (message.member.roles.cache.find(r => r.name === 'Équipe Bleu')) {
					message.member.roles.remove(role1);
					message.member.roles.add(role2);
					message.member.roles.add(role2);
					message.reply("a changer d'équipe (bleu -> orange). ORANGE :orange_square:");
					logConsole(user, "role orange", 10);
				} else {
					message.member.roles.add(role2);
					message.reply("a rejoint l'équipe ORANGE :orange_square:");
					logConsole(user, "role orange", 11);
				}
			}
		} else {
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)");
			logConsole(user, "orange", 7);
		}
	}
	function banMap(numMap) {
		user = message.member.user.username;
		if (voteSession) {
			if (banban < 2) {
				if (message.member.roles.cache.find(r => r.name === 'Équipe Bleu') || message.member.roles.cache.find(r => r.name === 'Équipe Orange')) {
					if (banPhase === 0 || (banPhase === 1 && pickPhase === 1)) {
						if (message.member.roles.cache.some(role => role.name === "Équipe Bleu")) {
							indicationRole = ':blue_circle:';
							userRole = '(bleu)';
						}
						if (message.member.roles.cache.some(role => role.name === "Équipe Orange")) {
							indicationRole = ':orange_circle:';
							userRole = '(orange)';
						}
						if (banPhase === 0 && banban === 0 && userRole === '(orange)') {
							message.channel.send("L'équipe Bleu :blue_circle: doit commencer le vote !");
							logConsole(user, "ban " + numMap, 2);
						} else {
							if (latestVoteTeam != userRole) {
								if (parseInt(numMap) > 0 && parseInt(numMap) <= Maps.size) { 
									if (listeMapsBan.get(String(numMap))) {
										message.channel.send('Cette map a déjà été bannie !');
										logConsole(user, "ban " + numMap, 16);
									} else {
										if (listeMapsPick.get(numMap)) {
											message.channel.send('Cette map a déjà été pick!');
											logConsole(user, "ban " + numMap, 17);
										} else {
											nomMap = Maps.get(numMap);
											listeMapsBan.set(numMap, true);
											concatMapVote = "~~";
											concatMapVote += listeMapsVote.get(numMap);
											concatMapVote += "~~";
											concatMapVote += ' :x:';
											concatMapVote += indicationRole;
											listeMapsVote.set(numMap, concatMapVote);
											for (var [key, value] of listeMapsVote){
												concat += key + " - " + value + "\n";
											}
											message.reply(indicationRole + " a banni " + nomMap);
											message.channel.send(concat);
											concat = "";
											latestVoteTeam = userRole;
											banban ++;
											if (banban === 2) {
												banPhase ++;
											}
											logConsole(user, "ban " + numMap, 1);
										}
									}
								} else {
									message.channel.send("Cette map n'existe pas");
									logConsole(user, "ban " + numMap, 12);
								}
							} else {
								message.channel.send("Votre équipe a déjà bannis une map");
								logConsole(user, "ban " + numMap, 13);
							}
						}
					} else {
						message.channel.send("Vous ne pouvez plus ban");
						logConsole(user, "ban " + numMap, 3);
					}
				} else {
					message.channel.send("Vous n'avez pas d'équipe. (!vote bleu/orange)");
					logConsole(user, "ban " + numMap, 3);
				}
			} else {
				message.channel.send("Vous devez pick maintenant (!vote pick)");
				logConsole(user, "ban ", 14);
			} 
		} else {
			message.channel.send("La session de vote n'a pas été lancé. (!vote start)");
			logConsole(user, "ban ", 7);
		}
	}
	function pickMap(numMap) {
		user = message.member.user.username;
		if (voteSession) {
			if (pickpick < 2) {
				if (message.member.roles.cache.find(r => r.name === 'Équipe Bleu') || message.member.roles.cache.find(r => r.name === 'Équipe Orange')) {
					if (pickPhase === 0 && banPhase === 1) {
						if (message.member.roles.cache.some(role => role.name === "Équipe Bleu")) {
							indicationRole = ':blue_circle:';
							userRole = '(bleu)';
						}
						if (message.member.roles.cache.some(role => role.name === "Équipe Orange")) {
							indicationRole = ':orange_circle:';
							userRole = '(orange)';
						}
						if (latestVoteTeam != userRole) {
							if (parseInt(numMap) > 0 && parseInt(numMap) <= Maps.size) { 
								if (listeMapsBan.get(String(numMap))) {
									message.channel.send('Cette map a déjà été bannie !');
									logConsole(user, "pick " + numMap, 16);
								} else {
									if (listeMapsPick.get(numMap)) {
										message.channel.send('Cette map a déjà été pick!');
										logConsole(user, "pick " + numMap, 17);
									} else {
										nomMap = Maps.get(numMap);
										listeMapsPick.set(numMap, true);
										if (pickpick === 0) { indicationNumPick = ':one:'; }
										if (pickpick === 1) { indicationNumPick = ':two:'; }
										concatMapVote = "**";
										concatMapVote += listeMapsVote.get(numMap);
										concatMapVote += "**";
										concatMapVote += ' :white_check_mark:';
										concatMapVote += indicationRole;
										concatMapVote += indicationNumPick;
										listeMapsVote.set(numMap, concatMapVote);
										for (var [key, value] of listeMapsVote){
											concat += key + " - " + value + "\n";
										}
										message.reply(indicationRole + " a choisi " + nomMap);
										message.channel.send(concat);
										concat = "";
										latestVoteTeam = userRole;
										banban = 0;
										pickpick ++;
										if (pickpick === 2) {
											pickPhase ++;
										}
										logConsole(user, "pick " + numMap, 1);
									}
								}
							} else {
								message.channel.send("Cette map n'existe pas");
								logConsole(user, "pick " + numMap, 12);
							}
						} else {
							message.channel.send("Votre équipe a déjà pick une map");
							logConsole(user, "pick " + numMap, 13);
						}

					} else {
						message.channel.send("Vous ne pouvez plus pick");
						logConsole(user, "pick " + numMap, 3);
					}
					
				} else {
					message.channel.send("Vous n'avez pas d'équipe. (!vote bleu/orange)");
					logConsole(user, "pick " + numMap, 3);
				}
			} else {
				message.channel.send("Vous devez ban maintenant (!vote ban)");
				logConsole(user, "pick ", 14);
			} 
		} else {
			message.channel.send("La session de vote n'a pas été lancé. (!vote start)");
			logConsole(user, "pick ", 7);
		}
	}
	if (pickPhase === 1 && banPhase === 2) {
		message.channel.send("-------------------------------\nLe vote est terminé ! Voici les résultat:");
		for (var [key, value] of listeMapsVote) {
			for (var [cle, valeur] of Maps) {
				if (value === valeur) {
					idMap3 = cle;
					newVal = "**" + valeur + "**" + ' :white_check_mark:' + ":tree:";
					listeMapsVote.set(key, newVal);
				}
			}
		}
		for (var [key, value] of listeMapsPick) {
			if (value) {
				idMap = key;
				for (var [cle, valeur] of listeMapsVote) {
					if (cle === idMap) {
						if (valeur.includes(":one:")) {
							map1Concat = "Map 1 - " + valeur.replace(":one:", "") + "\n";
						} else if (valeur.includes(":two:")) {
							map2Concat = "Map 2 - " + valeur.replace(":two:", "") + "\n";
						}
					} else {
						if (cle === idMap3) {
							map3Concat = "Map 3 (decider) - " + valeur.replace(":tree:", "");
						}
					}
				}
			}
		}
		message.channel.send(map1Concat + map2Concat + map3Concat);
		stopBanInter();
	}
	function stopBan() {
		message.reply('a arrêté le vote des maps');
		
		stopBanInter();
	}
	function stopBanInter() {
		voteSession = false;
		pickpick = 0;
		banban = 0;
		banPhase = 0;
		pickPhase = 0;
		latestVoteTeam = "";
		message.member.roles.remove(role1);
		message.member.roles.remove(role2);
		user = message.member.user.username;
		logConsole(user, "stop", 1);
		logConsole(user, "ban", 6);
	}
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
		user = message.member.user.username;
		logConsole(user, "help", 1);
	}
});