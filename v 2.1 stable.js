console.log('Connexion à discordapp.com en cours...')
const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login('Insert your token') // token de connexion

version = '2.1'; // Version du script


bot.on('ready', function (){
	d = new Date();
	  heureDate(d);
	  
	console.log('['+ dformat +']'+ 'Le Bot a démarré')
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
	 banSession = 0;
	 
	 // fonction heure/date
	 function heureDate() {
		dformat = [d.getDate(),
               d.getMonth()+1,
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
	 }

	 
	 
bot.on('message', function (message){
	

	// Vérification de la commandes
	if (message.content.startsWith('!vote')) {
		let args = message.content.split(' ')
		
		switch (args[1]){
			case 'ban':
				;
			break;
			case 'list':
				;
			break;
			case 'help':
				;
			break;
			case 'start':
				;
			break;
			case 'stop':
				;
			break;
			default:
				message.channel.send("Cette commande n'existe pas")
					
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m',''+ args[1] +'','\x1b[31m',' non reconnue','\x1b[0m')
		}

	}
	
	// liste des maps
	if (message.content === '!vote list') {
	  message.channel.send('Voici la liste des cartes: \n')
	  message.channel.send('1 - ' + map1 +'\n2 - ' + map2 +'\n3 - ' + map3 +'\n4 - ' + map4 +'\n5 - ' + map5 +'\n6 - ' + map6 +'\n7 - ' + map7 )
	  
	  // log fonctionnalité
	  d = new Date();
	  heureDate(d);
	  user = message.member.user.username;
	  
	  console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"list"','\x1b[32m',' exécuté','\x1b[0m')
	}
  
	
  if (message.content === '!vote start') {
    message.reply('a lancé un ban des maps') // message.channel.send pour envoyer sans tag et message.reply
	banSession = 1;
	
	// log fonctionnalité
			d = new Date();
			heureDate(d);
			user = message.member.user.username;
	  
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"start"','\x1b[32m',' exécuté','\x1b[0m')
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m','Console','','' ,'--->', '\x1b[33m','Session:','\x1b[37m','"Ban"','\x1b[32m',' lancé','\x1b[0m')
  }
 
 // bannisement n°1
 if (message.content === '!vote ban 1') {
	 if (banSession === 0){ // Vérification session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 1"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
		} else {
			if (ban1===1){
				message.channel.send('Cette map a déjà été bannie !')
		 
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
		
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 1"','\x1b[31m',' refusé','\x1b[0m')
			} else {
				ban1 =1;
				message.reply('a banni Club House')
				
				switch (ban1) {
					case 1:
						 sendmap1='~~1 - ' + map1x +'~~';
					break;
					case 0:
						 sendmap1='1 - ' + map1;
					break;
				}
				switch (ban2) {
					case 1:
						 sendmap2='~~2 - ' + map2x +'~~';
					break;
					case 0:
						 sendmap2='2 - ' +map2;
					break;
				}
				switch (ban3) {
					case 1:
						 sendmap3='~~3 - ' + map3x +'~~';
					break;
					case 0:
						 sendmap3='3 - ' + map3;
					break;
				}
				switch (ban4) {
					case 1:
						 sendmap4='~~4 - ' + map4x +'~~';
					break;
					case 0:
						 sendmap4='4 - ' +map4;
					break;
				}
				switch (ban5) {
					case 1:
						 sendmap5='~~5 - ' +map5x +'~~';
					break;
					case 0:
						 sendmap5='5 - ' + map5;
					break;
				}
				switch (ban6) {
					case 1:
						 sendmap6='~~6 - ' + map6x +'~~';
					break;
					case 0:
						 sendmap6='6 - ' + map6;
					break;
				}
				switch (ban7) {
					case 1:
						 sendmap7='~~7 - ' + map7x +'~~';
					break;
					case 0:
						 sendmap7='7 - ' + map7;
					break;
				}
				
				message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n')   
		
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 1"','\x1b[32m',' exécuté','\x1b[0m')
			}
		}
	}
	
 // bannisement n°2
	if (message.content === '!vote ban 2') {
		if (banSession === 0){ // Vérification session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 2"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
		} else {
			if (ban2===1){
				message.channel.send('Cette map a déjà été bannie !')
		 
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 2"','\x1b[31m',' refusé','\x1b[0m')
			} else {
				ban2 =1;
				message.reply('a banni Consulat')
		
				switch (ban1) {
					case 1:
						 sendmap1='~~1 - ' + map1x +'~~';
					break;
					case 0:
						 sendmap1='1 - ' + map1;
					break;
				}
				switch (ban2) {
					case 1:
						 sendmap2='~~2 - ' + map2x +'~~';
					break;
					case 0:
						 sendmap2='2 - ' +map2;
					break;
				}
				switch (ban3) {
					case 1:
						 sendmap3='~~3 - ' + map3x +'~~';
					break;
					case 0:
						 sendmap3='3 - ' + map3;
					break;
				}
				switch (ban4) {
					case 1:
						 sendmap4='~~4 - ' + map4x +'~~';
					break;
					case 0:
						 sendmap4='4 - ' +map4;
					break;
				}
				switch (ban5) {
					case 1:
						 sendmap5='~~5 - ' +map5x +'~~';
					break;
					case 0:
						 sendmap5='5 - ' + map5;
					break;
				}
				switch (ban6) {
					case 1:
						 sendmap6='~~6 - ' + map6x +'~~';
					break;
					case 0:
						 sendmap6='6 - ' + map6;
					break;
				}
				switch (ban7) {
					case 1:
						 sendmap7='~~7 - ' + map7x +'~~';
					break;
					case 0:
						 sendmap7='7 - ' + map7;
					break;
				}
				
				message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n') 
		
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 2"','\x1b[32m',' exécuté','\x1b[0m')
			}
		}
	}	
 
  // bannisement n°3
	if (message.content === '!vote ban 3') {
		if (banSession === 0){ // Vérification session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 3"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
		} else {
			if (banSession === 0){
				message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 1"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
			} else {
				if (ban3===1){
					message.channel.send('Cette map a déjà été bannie !')
		 
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username;
	  
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 3"','\x1b[31m',' refusé','\x1b[0m')
				} else {
					ban3 =1;
					message.reply('a banni Banque')
		
					switch (ban1) {
					case 1:
						 sendmap1='~~1 - ' + map1x +'~~';
					break;
					case 0:
						 sendmap1='1 - ' + map1;
					break;
				}
				switch (ban2) {
					case 1:
						 sendmap2='~~2 - ' + map2x +'~~';
					break;
					case 0:
						 sendmap2='2 - ' +map2;
					break;
				}
				switch (ban3) {
					case 1:
						 sendmap3='~~3 - ' + map3x +'~~';
					break;
					case 0:
						 sendmap3='3 - ' + map3;
					break;
				}
				switch (ban4) {
					case 1:
						 sendmap4='~~4 - ' + map4x +'~~';
					break;
					case 0:
						 sendmap4='4 - ' +map4;
					break;
				}
				switch (ban5) {
					case 1:
						 sendmap5='~~5 - ' +map5x +'~~';
					break;
					case 0:
						 sendmap5='5 - ' + map5;
					break;
				}
				switch (ban6) {
					case 1:
						 sendmap6='~~6 - ' + map6x +'~~';
					break;
					case 0:
						 sendmap6='6 - ' + map6;
					break;
				}
				switch (ban7) {
					case 1:
						 sendmap7='~~7 - ' + map7x +'~~';
					break;
					case 0:
						 sendmap7='7 - ' + map7;
					break;
				}
				
				message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n') 
		
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username;
	  
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 3"','\x1b[32m',' exécuté','\x1b[0m')
			}
		}
		}
	}
 
  // bannisement n°4
 if (message.content === '!vote ban 4') {
	 if (banSession === 0){ // Vérification Session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 4"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
		} else {
			if (ban4===1){
				message.channel.send('Cette map a déjà été bannie !')
		 
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 4"','\x1b[31m',' refusé','\x1b[0m')
			} else {
				ban4 =1;
				message.reply('a banni Café Dostoyevsky')
		
				switch (ban1) {
					case 1:
						 sendmap1='~~1 - ' + map1x +'~~';
					break;
					case 0:
						 sendmap1='1 - ' + map1;
					break;
				}
				switch (ban2) {
					case 1:
						 sendmap2='~~2 - ' + map2x +'~~';
					break;
					case 0:
						 sendmap2='2 - ' +map2;
					break;
				}
				switch (ban3) {
					case 1:
						 sendmap3='~~3 - ' + map3x +'~~';
					break;
					case 0:
						 sendmap3='3 - ' + map3;
					break;
				}
				switch (ban4) {
					case 1:
						 sendmap4='~~4 - ' + map4x +'~~';
					break;
					case 0:
						 sendmap4='4 - ' +map4;
					break;
				}
				switch (ban5) {
					case 1:
						 sendmap5='~~5 - ' +map5x +'~~';
					break;
					case 0:
						 sendmap5='5 - ' + map5;
					break;
				}
				switch (ban6) {
					case 1:
						 sendmap6='~~6 - ' + map6x +'~~';
					break;
					case 0:
						 sendmap6='6 - ' + map6;
					break;
				}
				switch (ban7) {
					case 1:
						 sendmap7='~~7 - ' + map7x +'~~';
					break;
					case 0:
						 sendmap7='7 - ' + map7;
					break;
				}
				
				message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n') 
		
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 4"','\x1b[32m',' exécuté','\x1b[0m')
			}
		}
	}
 
   // bannisement n°5
 if (message.content === '!vote ban 5') {
	 if (banSession === 0){ // Vérification Session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 5"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
		} else {
			if (ban5===1){
				message.channel.send('Cette map a déjà été bannie !')
		 
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 5"','\x1b[31m',' refusé','\x1b[0m')
			} else {
				ban5 =1;
				message.reply('a banni Frontière')
		
				switch (ban1) {
					case 1:
						 sendmap1='~~1 - ' + map1x +'~~';
					break;
					case 0:
						 sendmap1='1 - ' + map1;
					break;
				}
				switch (ban2) {
					case 1:
						 sendmap2='~~2 - ' + map2x +'~~';
					break;
					case 0:
						 sendmap2='2 - ' +map2;
					break;
				}
				switch (ban3) {
					case 1:
						 sendmap3='~~3 - ' + map3x +'~~';
					break;
					case 0:
						 sendmap3='3 - ' + map3;
					break;
				}
				switch (ban4) {
					case 1:
						 sendmap4='~~4 - ' + map4x +'~~';
					break;
					case 0:
						 sendmap4='4 - ' +map4;
					break;
				}
				switch (ban5) {
					case 1:
						 sendmap5='~~5 - ' +map5x +'~~';
					break;
					case 0:
						 sendmap5='5 - ' + map5;
					break;
				}
				switch (ban6) {
					case 1:
						 sendmap6='~~6 - ' + map6x +'~~';
					break;
					case 0:
						 sendmap6='6 - ' + map6;
					break;
				}
				switch (ban7) {
					case 1:
						 sendmap7='~~7 - ' + map7x +'~~';
					break;
					case 0:
						 sendmap7='7 - ' + map7;
					break;
				}
				
				message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n') 
		
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 5"','\x1b[32m',' exécuté','\x1b[0m')
			}
		}
	}
 
  // bannisement n°6
 if (message.content === '!vote ban 6') {
	 if (banSession === 0){ // Vérification Session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 6"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
		} else {
			if (ban6===1){
				message.channel.send('Cette map a déjà été bannie !')
		 
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 6"','\x1b[31m',' refusé','\x1b[0m')
			} else {
				ban6 =1;
				message.reply('a banni Litoral')
		
				switch (ban1) {
					case 1:
						 sendmap1='~~1 - ' + map1x +'~~';
					break;
					case 0:
						 sendmap1='1 - ' + map1;
					break;
				}
				switch (ban2) {
					case 1:
						 sendmap2='~~2 - ' + map2x +'~~';
					break;
					case 0:
						 sendmap2='2 - ' +map2;
					break;
				}
				switch (ban3) {
					case 1:
						 sendmap3='~~3 - ' + map3x +'~~';
					break;
					case 0:
						 sendmap3='3 - ' + map3;
					break;
				}
				switch (ban4) {
					case 1:
						 sendmap4='~~4 - ' + map4x +'~~';
					break;
					case 0:
						 sendmap4='4 - ' +map4;
					break;
				}
				switch (ban5) {
					case 1:
						 sendmap5='~~5 - ' +map5x +'~~';
					break;
					case 0:
						 sendmap5='5 - ' + map5;
					break;
				}
				switch (ban6) {
					case 1:
						 sendmap6='~~6 - ' + map6x +'~~';
					break;
					case 0:
						 sendmap6='6 - ' + map6;
					break;
				}
				switch (ban7) {
					case 1:
						 sendmap7='~~7 - ' + map7x +'~~';
					break;
					case 0:
						 sendmap7='7 - ' + map7;
					break;
				}
				
				message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n') 
		
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 6"','\x1b[32m',' exécuté','\x1b[0m')
			}
		}
	}
 
  // bannisement n°7
 if (message.content === '!vote ban 7') {
	 if (banSession === 0){ // Vérification Session
			message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 4"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
		} else {
			if (ban7===1){
				message.channel.send('Cette map a déjà été bannie !')
		 
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 7"','\x1b[31m',' refusé','\x1b[0m')
			} else {
				ban7 =1;
				message.reply('a banni Villa')
		
				switch (ban1) {
					case 1:
						 sendmap1='~~1 - ' + map1x +'~~';
					break;
					case 0:
						 sendmap1='1 - ' + map1;
					break;
				}
				switch (ban2) {
					case 1:
						 sendmap2='~~2 - ' + map2x +'~~';
					break;
					case 0:
						 sendmap2='2 - ' +map2;
					break;
				}
				switch (ban3) {
					case 1:
						 sendmap3='~~3 - ' + map3x +'~~';
					break;
					case 0:
						 sendmap3='3 - ' + map3;
					break;
				}
				switch (ban4) {
					case 1:
						 sendmap4='~~4 - ' + map4x +'~~';
					break;
					case 0:
						 sendmap4='4 - ' +map4;
					break;
				}
				switch (ban5) {
					case 1:
						 sendmap5='~~5 - ' +map5x +'~~';
					break;
					case 0:
						 sendmap5='5 - ' + map5;
					break;
				}
				switch (ban6) {
					case 1:
						 sendmap6='~~6 - ' + map6x +'~~';
					break;
					case 0:
						 sendmap6='6 - ' + map6;
					break;
				}
				switch (ban7) {
					case 1:
						 sendmap7='~~7 - ' + map7x +'~~';
					break;
					case 0:
						 sendmap7='7 - ' + map7;
					break;
				}
				
				message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n') 
		
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 7"','\x1b[32m',' exécuté','\x1b[0m')
			}
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
			 banSession = 0;
			 
			 // log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"stop"','\x1b[32m',' exécuté','\x1b[0m')
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m','Console','','' ,'--->', '\x1b[33m','Session:','\x1b[37m','"Ban"','\x1b[31m',' stoppé','\x1b[0m')
	}

	// Help
	if (message.content === '!vote help') {
		message.channel.send('R6Sbot Votemap V:' + version)
		message.channel.send('\nComment faire un vote de map -> <https://tinyurl.com/r6sbot-votemap-comment-faire> \nVoici la liste des commandes: \nPour les commandes de ce bot TOUJOURS commencer par : !vote . \n- Aide: !vote help \n- Liste des maps: !vote list \n- Lancer un vote: !vote start \n- Bannir une map: !vote ban [numéro de la map] \n- Arrêter un vote: !vote stop \n \nGo follow <https://www.twitter.com/Benwarrior37>')
			
		// log fonctionnalité
			d = new Date();
			heureDate(d);
			user = message.member.user.username;
	  
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"help"','\x1b[32m',' exécuté','\x1b[0m')
	}
})
// fin
// Copyright Benjamin Fourmaux -- Beruet