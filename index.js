const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login('Insert your token') // token de connexion




bot.on('ready', function (){
	bot.user.setGame('Fait les vetomaps (!vote help)').catch(console.error)
})


	 // initialisation des variables map
	 map1 = 'Club House';
	 map2 = 'Consulat';
	 map3 = 'Banque';
	 map4 = 'Café Dostoyevsky';
	 map5 = 'Frontière';
	 map6 = 'Litoral';
	 map7 = 'Villa';
	 
		// variables map bannis
		map1x = map1 + ' :x:';
		map2x = map2 + ' :x:';
		map3x = map3 + ' :x:';
		map4x = map4 + ' :x:';
		map5x = map5 + ' :x:';
		map6x = map6 + ' :x:';
		map7x = map7 + ' :x:';
	
	 // initialisation des variables ban 
	 ban1 = 0;
	 ban2 = 0;
	 ban3 = 0;
	 ban4 = 0;
	 ban5 = 0;
	 ban6 = 0;
	 ban7 = 0;
	 

bot.on('message', function (message){
	
	// liste des maps
	if (message.content === '!vote list') {
	  message.channel.send('Voici la liste des cartes:')
	  message.channel.send('1 - ' + map1)
	  message.channel.send('2 - ' + map2)
	  message.channel.send('3 - ' + map3)
	  message.channel.send('4 - ' + map4)
	  message.channel.send('5 - ' + map5)
	  message.channel.send('6 - ' + map6)
	  message.channel.send('7 - ' + map7)
	}
 
  
	
  if (message.content === '!vote start') {
    message.reply('a lancé un ban des maps') // message.channel.send pour envoyer sans tag et message.reply
  }
 
 // bannisement n°1
 if (message.content === '!vote ban 1') {
		ban1 =1;
		message.reply('a banni Club House')
		
		switch (ban1) {
			case 1:
				message.channel.send('1 - ' + map1x);
			break;
			case 0:
				message.channel.send('1 - ' + map1);
			break;
		}
		switch (ban2) {
			case 1:
				message.channel.send('2 - ' + map2x);
			break;
			case 0:
				message.channel.send('2 - ' +map2);
			break;
		}
		switch (ban3) {
			case 1:
				message.channel.send('3 - ' + map3x);
			break;
			case 0:
				message.channel.send('3 - ' + map3);
			break;
		}
		switch (ban4) {
			case 1:
				message.channel.send('4 - ' + map4x);
			break;
			case 0:
				message.channel.send('4 - ' +map4);
			break;
		}
		switch (ban5) {
			case 1:
				message.channel.send('5 - ' +map5x);
			break;
			case 0:
				message.channel.send('5 - ' + map5);
			break;
		}
		switch (ban6) {
			case 1:
				message.channel.send('6 - ' + map6x);
			break;
			case 0:
				message.channel.send('6 - ' + map6);
			break;
		}
		switch (ban7) {
			case 1:
				message.channel.send('7 - ' + map7x);
			break;
			case 0:
				message.channel.send('7 - ' + map7);
			break;
		}
 }
	
 // bannisement n°2
	if (message.content === '!vote ban 2') {
			 ban2 =1;
		message.reply('a banni Consulat')
		
		switch (ban1) {
			case 1:
				message.channel.send('1 - ' + map1x);
			break;
			case 0:
				message.channel.send('1 - ' + map1);
			break;
		}
		switch (ban2) {
			case 1:
				message.channel.send('2 - ' + map2x);
			break;
			case 0:
				message.channel.send('2 - ' +map2);
			break;
		}
		switch (ban3) {
			case 1:
				message.channel.send('3 - ' + map3x);
			break;
			case 0:
				message.channel.send('3 - ' + map3);
			break;
		}
		switch (ban4) {
			case 1:
				message.channel.send('4 - ' + map4x);
			break;
			case 0:
				message.channel.send('4 - ' +map4);
			break;
		}
		switch (ban5) {
			case 1:
				message.channel.send('5 - ' +map5x);
			break;
			case 0:
				message.channel.send('5 - ' + map5);
			break;
		}
		switch (ban6) {
			case 1:
				message.channel.send('6 - ' + map6x);
			break;
			case 0:
				message.channel.send('6 - ' + map6);
			break;
		}
		switch (ban7) {
			case 1:
				message.channel.send('7 - ' + map7x);
			break;
			case 0:
				message.channel.send('7 - ' + map7);
			break;
		}
 }	
 
  // bannisement n°3
	if (message.content === '!vote ban 3') {
			 ban3 =1;
		message.reply('a banni Banque')
		
		switch (ban1) {
			case 1:
				message.channel.send('1 - ' + map1x);
			break;
			case 0:
				message.channel.send('1 - ' + map1);
			break;
		}
		switch (ban2) {
			case 1:
				message.channel.send('2 - ' + map2x);
			break;
			case 0:
				message.channel.send('2 - ' +map2);
			break;
		}
		switch (ban3) {
			case 1:
				message.channel.send('3 - ' + map3x);
			break;
			case 0:
				message.channel.send('3 - ' + map3);
			break;
		}
		switch (ban4) {
			case 1:
				message.channel.send('4 - ' + map4x);
			break;
			case 0:
				message.channel.send('4 - ' +map4);
			break;
		}
		switch (ban5) {
			case 1:
				message.channel.send('5 - ' +map5x);
			break;
			case 0:
				message.channel.send('5 - ' + map5);
			break;
		}
		switch (ban6) {
			case 1:
				message.channel.send('6 - ' + map6x);
			break;
			case 0:
				message.channel.send('6 - ' + map6);
			break;
		}
		switch (ban7) {
			case 1:
				message.channel.send('7 - ' + map7x);
			break;
			case 0:
				message.channel.send('7 - ' + map7);
			break;
		}
 }
 
  // bannisement n°4
 if (message.content === '!vote ban 4') {
		ban4 =1;
		message.reply('a banni Café Dostoyevsky')
		
		switch (ban1) {
			case 1:
				message.channel.send('1 - ' + map1x);
			break;
			case 0:
				message.channel.send('1 - ' + map1);
			break;
		}
		switch (ban2) {
			case 1:
				message.channel.send('2 - ' + map2x);
			break;
			case 0:
				message.channel.send('2 - ' +map2);
			break;
		}
		switch (ban3) {
			case 1:
				message.channel.send('3 - ' + map3x);
			break;
			case 0:
				message.channel.send('3 - ' + map3);
			break;
		}
		switch (ban4) {
			case 1:
				message.channel.send('4 - ' + map4x);
			break;
			case 0:
				message.channel.send('4 - ' +map4);
			break;
		}
		switch (ban5) {
			case 1:
				message.channel.send('5 - ' +map5x);
			break;
			case 0:
				message.channel.send('5 - ' + map5);
			break;
		}
		switch (ban6) {
			case 1:
				message.channel.send('6 - ' + map6x);
			break;
			case 0:
				message.channel.send('6 - ' + map6);
			break;
		}
		switch (ban7) {
			case 1:
				message.channel.send('7 - ' + map7x);
			break;
			case 0:
				message.channel.send('7 - ' + map7);
			break;
		}
 }
 
  // bannisement n°6
 if (message.content === '!vote ban 6') {
		ban6 =1;
		message.reply('a banni Litoral')
		
		switch (ban1) {
			case 1:
				message.channel.send('1 - ' + map1x);
			break;
			case 0:
				message.channel.send('1 - ' + map1);
			break;
		}
		switch (ban2) {
			case 1:
				message.channel.send('2 - ' + map2x);
			break;
			case 0:
				message.channel.send('2 - ' +map2);
			break;
		}
		switch (ban3) {
			case 1:
				message.channel.send('3 - ' + map3x);
			break;
			case 0:
				message.channel.send('3 - ' + map3);
			break;
		}
		switch (ban4) {
			case 1:
				message.channel.send('4 - ' + map4x);
			break;
			case 0:
				message.channel.send('4 - ' +map4);
			break;
		}
		switch (ban5) {
			case 1:
				message.channel.send('5 - ' +map5x);
			break;
			case 0:
				message.channel.send('5 - ' + map5);
			break;
		}
		switch (ban6) {
			case 1:
				message.channel.send('6 - ' + map6x);
			break;
			case 0:
				message.channel.send('6 - ' + map6);
			break;
		}
		switch (ban7) {
			case 1:
				message.channel.send('7 - ' + map7x);
			break;
			case 0:
				message.channel.send('7 - ' + map7);
			break;
		}
 }
 
  // bannisement n°7
 if (message.content === '!vote ban 7') {
		ban7 =1;
		message.reply('a banni Villa')
		
		switch (ban1) {
			case 1:
				message.channel.send('1 - ' + map1x);
			break;
			case 0:
				message.channel.send('1 - ' + map1);
			break;
		}
		switch (ban2) {
			case 1:
				message.channel.send('2 - ' + map2x);
			break;
			case 0:
				message.channel.send('2 - ' +map2);
			break;
		}
		switch (ban3) {
			case 1:
				message.channel.send('3 - ' + map3x);
			break;
			case 0:
				message.channel.send('3 - ' + map3);
			break;
		}
		switch (ban4) {
			case 1:
				message.channel.send('4 - ' + map4x);
			break;
			case 0:
				message.channel.send('4 - ' +map4);
			break;
		}
		switch (ban5) {
			case 1:
				message.channel.send('5 - ' +map5x);
			break;
			case 0:
				message.channel.send('5 - ' + map5);
			break;
		}
		switch (ban6) {
			case 1:
				message.channel.send('6 - ' + map6x);
			break;
			case 0:
				message.channel.send('6 - ' + map6);
			break;
		}
		switch (ban7) {
			case 1:
				message.channel.send('7 - ' + map7x);
			break;
			case 0:
				message.channel.send('7 - ' + map7);
			break;
		}
 }
  
	// Stop ban des maps + réinitialisation variables ban
	if (message.content === '!vote stop') {
			 message.reply('a arrêté le vote des maps')
			 ban1 = 0;
			 ban2 = 0;
			 ban3 = 0;
			 ban4 = 0;
			 ban5 = 0;
			 ban6 = 0;
			 ban7 = 0;
	}

	// Help
	if (message.content === '!vote help') {
			message.channel.send('R6Sbot Votemap V: beta 1.2')
			message.channel.send('Comment faire un vote de map -> https://tinyurl.com/r6sbot-votemap-comment-faire')
			message.channel.send('Voici la liste des commandes:')
			message.channel.send('Pour les commandes de ce bot TOUJOURS commencer par : !vote .')
			message.channel.send('- Aide: !vote help')
			message.channel.send('- Liste des maps: !vote list')
			message.channel.send('- Lancer un vote: !vote start')
			message.channel.send('- Bannir une map: !vote ban [numéro de la map]')
			message.channel.send('- Arrêter un vote: !vote stop')
			message.channel.send(' ')
			message.channel.send('Go follow https://www.twitter.com/Benwarrior37')
	}

})
// fin