const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('INSERT YOUR TOKEN');
version = '4.0';
bot.on('ready', function () {
	bot.user.setActivity (' les vetomaps (!vote help)', { type: 'WATCHING' }).catch(console.error);
});
var Maps =  new Map();
Maps.set('1', "Club House");
Maps.set('2', "Chalet");
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
bot.on('message', function (message) {
	let role1 = message.guild.roles.cache.find(x => x.name === "Équipe Bleu");
	let role2 = message.guild.roles.cache.find(r => r.name === "Équipe Orange");
	function stopBot() {
		user = message.member.user.username;
		if (user === "Benwarrior 37"){
			message.channel.send("Le bot :robot: redémarre :arrows_counterclockwise:");
			laVoiture.renault();
		} else {
			message.channel.send("Vous n'avez pas le droit d'utiliser cette commande");
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
				message.channel.send("Cette commande n'existe pas");
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
	}	
	function start() {
		message.reply('a lancé un vote des maps');
		voteSession = true;
	}
	function setEquipeBleu(user) {
		
		if (voteSession) {
			if (banPhase !=0 || pickPhase !=0) {
				message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !");
			} else {
				if (message.member.roles.cache.find(r => r.name === 'Équipe Orange')) {
					message.member.roles.remove(role2);
					message.member.roles.add(role1);
					message.reply(" a changer d'équipe (orange -> bleu). BLEU :blue_square:");
				} else {
					message.member.roles.add(role1);
					message.reply("a rejoint l'équipe BLEU :blue_square:");
				}
			}
		} else {
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
		}
	}
	function setEquipeOrange (user) {

		if (voteSession) {
			if (banPhase !=0 || pickPhase !=0) {
				message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !")
			} else {
				if (message.member.roles.cache.find(r => r.name === 'Équipe Bleu')) {
					message.member.roles.remove(role1);
					message.member.roles.add(role2);
					message.member.roles.add(role2);
					message.reply("a changer d'équipe (bleu -> orange). ORANGE :orange_square:");
				} else {
					message.member.roles.add(role2);
					message.reply("a rejoint l'équipe ORANGE :orange_square:");
				}
			}
		} else {
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)");
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
						} else {
							if (latestVoteTeam != userRole) {
								if (parseInt(numMap) > 0 && parseInt(numMap) <= Maps.size) { 
									if (listeMapsBan.get(String(numMap))) {
										message.channel.send('Cette map a déjà été bannie !');
									} else {
										if (listeMapsPick.get(numMap)) {
											message.channel.send('Cette map a déjà été pick!');
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
										}
									}
								} else {
									message.channel.send("Cette map n'existe pas");
								}
							} else {
								message.channel.send("Votre équipe a déjà bannis une map");
							}
						}
					} else {
						message.channel.send("Vous ne pouvez plus ban");
					}
				} else {
					message.channel.send("Vous n'avez pas d'équipe. (!vote bleu/orange)");
				}
			} else {
				message.channel.send("Vous devez pick maintenant (!vote pick)");
			} 
		} else {
			message.channel.send("La session de vote n'a pas été lancé. (!vote start)");
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
								} else {
									if (listeMapsPick.get(numMap)) {
										message.channel.send('Cette map a déjà été pick!');
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
									}
								}
							} else {
								message.channel.send("Cette map n'existe pas");
							}
						} else {
							message.channel.send("Votre équipe a déjà pick une map");
						}
					} else {
						message.channel.send("Vous ne pouvez plus pick");
					}
					
				} else {
					message.channel.send("Vous n'avez pas d'équipe. (!vote bleu/orange)");
				}
			} else {
				message.channel.send("Vous devez ban maintenant (!vote ban)");
			} 
		} else {
			message.channel.send("La session de vote n'a pas été lancé. (!vote start)");
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
	}
});