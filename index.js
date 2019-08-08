console.log('Connexion à discordapp.com en cours...')
const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login('Insert your token') // token de connexion

version = '2.4'; // Version du script


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
	 statutRole= 0;
	 
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
			case 'bleu':
				;
			break;
			case 'orange':
				;
			break;
			default:
				message.channel.send("Cette commande n'existe pas")
				
				user= message.member.user.username;
				
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
  
	
// Start	
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
  
// Assination équipe
		// équipe bleu
		if(message.content==='!vote bleu'){
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"bleu"','\x1b[32m',' exécuté','\x1b[0m')
			
			if (banSession===1){
				if (ban1===1 || ban2===1 || ban3===1 || ban4===1 || ban5===1 || ban6===1 || ban7===1){
					
					message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !")
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user= 'Console';
						
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"bleu"','\x1b[31m',' refusé','\x1b[0m', '/!/ session ban en cours','\x1b[0m')
					
				} else {
						if (message.member.roles.find(r => r.name === 'Équipe Orange')){
							
							let role2 = message.guild.roles.find(r=> r.name === 'Équipe Orange')
							message.member.removeRole(role2)
							
							let role1 = message.guild.roles.find(r => r.name === 'Équipe Bleu')
								message.member.addRole(role1)
								statutRole=1;
								
								message.reply("a changer d'équipe (orange -> bleu). BLEU :blue_book:")

							
							// log fonctionnalité
									d = new Date();
									heureDate(d);
									user = message.member.user.username;
					
									console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m Console','' ,'--->', '\x1b[33m','Role:','\x1b[37m','"bleu (changement)"  pour', +user+ '\x1b[32m',' exécuté','\x1b[0m')
						} else {	

								let role = message.guild.roles.find(r => r.name === 'Équipe Bleu')
				
								message.member.addRole(role)
								statutRole=1;

					
								message.reply("a rejoint l'équipe BLEU :blue_book:")
				
								// log fonctionnalité
									d = new Date();
									heureDate(d);
									user = message.member.user.username;
					
									console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m Console','' ,'--->', '\x1b[33m','Role:','\x1b[37m','"bleu"  pour', +user+ '\x1b[32m',' exécuté','\x1b[0m')
						}
				}
				
			} else {
				message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"bleu"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
			}
		}
		
		// équipe orange
		if(message.content==='!vote orange'){
			
			// log fonctionnalité
				d = new Date();
				heureDate(d);
				user = message.member.user.username;
	  
				console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"orange"','\x1b[32m',' exécuté','\x1b[0m')
			
			if (banSession===1){
				if (ban1===1 || ban2===1 || ban3===1 || ban4===1 || ban5===1 || ban6===1 || ban7===1){
					
					message.channel.send("Vous n'avez pas le droit de changer de team en cours de ban !")
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user= 'Console';
					
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"orange"','\x1b[31m',' refusé','\x1b[0m', '/!/ session ban en cours','\x1b[0m')
					
				} else {
						if (message.member.roles.find(r => r.name === 'Équipe Bleu')){
							
							let role2 = message.guild.roles.find(r => r.name === 'Équipe Bleu')
							message.member.removeRole(role2)
							
							let role1 = message.guild.roles.find(r => r.name === 'Équipe Orange')
								message.member.addRole(role1)
								statutRole=1;
								
								message.reply("a changer d'équipe (bleu -> orange). ORANGE :orange_book:")

							
							// log fonctionnalité
									d = new Date();
									heureDate(d);
									user = message.member.user.username;
					
									console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m Console','' ,'--->', '\x1b[33m','Role:','\x1b[37m','"orange (changement)"  pour', +user+ '\x1b[32m',' exécuté','\x1b[0m')
						} else {
					
								let role = message.guild.roles.find(r => r.name === 'Équipe Orange')
				
								message.member.addRole(role)
								statutRole = 1;
				
								message.reply("a rejoint l'équipe ORANGE :orange_book:")
				
								// log fonctionnalité
									d = new Date();
									heureDate(d);
									user = message.member.user.username;
	  
									console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m Console','' ,'--->', '\x1b[33m','Role:','\x1b[37m','"orange"  pour', +user+ '\x1b[32m',' exécuté','\x1b[0m')
						}
				}
				
			} else {
				message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
	  
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"orange"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
			}
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
			if (ban1===1){// Vérification si ban 1 déjà exécuté
				message.channel.send('Cette map a déjà été bannie !')
				
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
		
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 1"','\x1b[31m',' refusé','\x1b[0m')
			} else {
					if (statutRole===0){// Vérification statut des rôles
						message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)")
						// log fonctionnalité
							d = new Date();
							heureDate(d);
							user = message.member.user.username;
	  
							console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 1"','\x1b[31m',' refusé','\x1b[0m', '/!/ no team','\x1b[0m')
					} else {	
					ban1 =1;
				
					if (message.member.roles.find(r => r.name === 'Équipe Bleu')){
						indication1Role = ':blue_book:';
						userRole = '(bleu)'
					} else if (message.member.roles.find(r => r.name === 'Équipe Orange')){
						indication1Role = ':orange_book:';
						userRole = '(orange)'
					}
					message.reply('a banni Club House')
				
					switch (ban1) {
						case 1:
							sendmap1='~~1 - ' + map1x +'~~' + indication1Role;
						break;
						case 0:
							sendmap1='1 - ' + map1;
						break;
					}
					switch (ban2) {
						case 1:
							sendmap2='~~2 - ' + map2x +'~~' + indication2Role;
						break;
						case 0:
							sendmap2='2 - ' +map2;
						break;
					}
					switch (ban3) {
						case 1:
							sendmap3='~~3 - ' + map3x +'~~' + indication3Role;
						break;
						case 0:
							sendmap3='3 - ' + map3;
						break;
					}
					switch (ban4) {
						case 1:
							sendmap4='~~4 - ' + map4x +'~~' + indication4Role;
						break;
						case 0:
							sendmap4='4 - ' +map4;
						break;
					}
					switch (ban5) {
						case 1:
							sendmap5='~~5 - ' +map5x +'~~' + indication5Role;
						break;
						case 0:
							sendmap5='5 - ' + map5;
						break;
					}
					switch (ban6) {
						case 1:
							sendmap6='~~6 - ' + map6x +'~~' + indication6Role;
						break;
						case 0:
							sendmap6='6 - ' + map6;
						break;
					}
					switch (ban7) {
						case 1:
							sendmap7='~~7 - ' + map7x +'~~' + indication7Role;
						break;
						case 0:
							sendmap7='7 - ' + map7;
						break;
					}
				
					message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n')   
		
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username +userRole;
						
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 1"','\x1b[32m',' exécuté','\x1b[0m')
				}
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
			if (ban2===1){// Vérification si ban 2 déjà exécuté
				message.channel.send('Cette map a déjà été bannie !')
				
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
		
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 2"','\x1b[31m',' refusé','\x1b[0m')
			} else {
					if (statutRole===0){// Vérification statut des rôles
						message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)")
						// log fonctionnalité
							d = new Date();
							heureDate(d);
							user = message.member.user.username;
	  
							console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 2"','\x1b[31m',' refusé','\x1b[0m', '/!/ no team','\x1b[0m')
					} else {
					ban2 =1;
					
					if (message.member.roles.find(r => r.name === 'Équipe Bleu')){
						indication2Role = ':blue_book:';
						userRole = '(bleu)'
					} else if (message.member.roles.find(r => r.name === 'Équipe Orange')){
						indication2Role = ':orange_book:';
						userRole = '(orange)'
					}
					message.reply('a banni Consulat')
				
					switch (ban1) {
						case 1:
							sendmap1='~~1 - ' + map1x +'~~' + indication1Role;
						break;
						case 0:
							sendmap1='1 - ' + map1;
						break;
					}
					switch (ban2) {
						case 1:
							sendmap2='~~2 - ' + map2x +'~~' + indication2Role;
						break;
						case 0:
							sendmap2='2 - ' +map2;
						break;
					}
					switch (ban3) {
						case 1:
							sendmap3='~~3 - ' + map3x +'~~' + indication3Role;
						break;
						case 0:
							sendmap3='3 - ' + map3;
						break;
					}
					switch (ban4) {
						case 1:
							sendmap4='~~4 - ' + map4x +'~~' + indication4Role;
						break;
						case 0:
							sendmap4='4 - ' +map4;
						break;
					}
					switch (ban5) {
						case 1:
							sendmap5='~~5 - ' +map5x +'~~' + indication5Role;
						break;
						case 0:
							sendmap5='5 - ' + map5;
						break;
					}
					switch (ban6) {
						case 1:
							sendmap6='~~6 - ' + map6x +'~~' + indication6Role;
						break;
						case 0:
							sendmap6='6 - ' + map6;
						break;
					}
					switch (ban7) {
						case 1:
							sendmap7='~~7 - ' + map7x +'~~' + indication7Role;
						break;
						case 0:
							sendmap7='7 - ' + map7;
						break;
					}
				
					message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n')   
		
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username +userRole;
						
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 2"','\x1b[32m',' exécuté','\x1b[0m')
				}
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
			if (ban3===1){// Vérification si ban 3 déjà exécuté
				message.channel.send('Cette map a déjà été bannie !')
				
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
		
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 3"','\x1b[31m',' refusé','\x1b[0m')
			} else {
					if (statutRole===0){// Vérification statut des rôles
						message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)")
						// log fonctionnalité
							d = new Date();
							heureDate(d);
							user = message.member.user.username;
	  
							console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 3"','\x1b[31m',' refusé','\x1b[0m', '/!/ no team','\x1b[0m')
					} else {
					ban3 =1;
				
					if (message.member.roles.find(r => r.name === 'Équipe Bleu')){
						indication3Role = ':blue_book:';
						userRole = '(bleu)'
					} else if (message.member.roles.find(r => r.name === 'Équipe Orange')){
						indication3Role = ':orange_book:';
						userRole = '(orange)'
					}
					message.reply('a banni Banque')
				
					switch (ban1) {
						case 1:
							sendmap1='~~1 - ' + map1x +'~~' + indication1Role;
						break;
						case 0:
							sendmap1='1 - ' + map1;
						break;
					}
					switch (ban2) {
						case 1:
							sendmap2='~~2 - ' + map2x +'~~' + indication2Role;
						break;
						case 0:
							sendmap2='2 - ' +map2;
						break;
					}
					switch (ban3) {
						case 1:
							sendmap3='~~3 - ' + map3x +'~~' + indication3Role;
						break;
						case 0:
							sendmap3='3 - ' + map3;
						break;
					}
					switch (ban4) {
						case 1:
							sendmap4='~~4 - ' + map4x +'~~' + indication4Role;
						break;
						case 0:
							sendmap4='4 - ' +map4;
						break;
					}
					switch (ban5) {
						case 1:
							sendmap5='~~5 - ' +map5x +'~~' + indication5Role;
						break;
						case 0:
							sendmap5='5 - ' + map5;
						break;
					}
					switch (ban6) {
						case 1:
							sendmap6='~~6 - ' + map6x +'~~' + indication6Role;
						break;
						case 0:
							sendmap6='6 - ' + map6;
						break;
					}
					switch (ban7) {
						case 1:
							sendmap7='~~7 - ' + map7x +'~~' + indication7Role;
						break;
						case 0:
							sendmap7='7 - ' + map7;
						break;
					}
				
					message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n')   
		
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username +userRole;
						
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 3"','\x1b[32m',' exécuté','\x1b[0m')
				}
			}
	}
}

// bannisement n°4
 if (message.content === '!vote ban 4') {
	if (banSession === 0){ // Vérification session
		message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
		// log fonctionnalité
			d = new Date();
			heureDate(d);
			user = message.member.user.username;
	  
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 4"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
	} else {
			if (ban4===1){// Vérification si ban 4 déjà exécuté
				message.channel.send('Cette map a déjà été bannie !')
				
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
		
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 4"','\x1b[31m',' refusé','\x1b[0m')
			} else {
					if (statutRole===0){// Vérification statut des rôles
						message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)")
						// log fonctionnalité
							d = new Date();
							heureDate(d);
							user = message.member.user.username;
	  
							console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 4"','\x1b[31m',' refusé','\x1b[0m', '/!/ no team','\x1b[0m')
					} else {
					ban4 =1;
				
					if (message.member.roles.find(r => r.name === 'Équipe Bleu')){
						indication4Role = ':blue_book:';
						userRole = '(bleu)'
					} else if (message.member.roles.find(r => r.name ===  'Équipe Orange')){
						indication4Role = ':orange_book:';
						userRole = '(orange)'
					}
					message.reply('a banni Café Dostoyevsky')
				
					switch (ban1) {
						case 1:
							sendmap1='~~1 - ' + map1x +'~~' + indication1Role;
						break;
						case 0:
							sendmap1='1 - ' + map1;
						break;
					}
					switch (ban2) {
						case 1:
							sendmap2='~~2 - ' + map2x +'~~' + indication2Role;
						break;
						case 0:
							sendmap2='2 - ' +map2;
						break;
					}
					switch (ban3) {
						case 1:
							sendmap3='~~3 - ' + map3x +'~~' + indication3Role;
						break;
						case 0:
							sendmap3='3 - ' + map3;
						break;
					}
					switch (ban4) {
						case 1:
							sendmap4='~~4 - ' + map4x +'~~' + indication4Role;
						break;
						case 0:
							sendmap4='4 - ' +map4;
						break;
					}
					switch (ban5) {
						case 1:
							sendmap5='~~5 - ' +map5x +'~~' + indication5Role;
						break;
						case 0:
							sendmap5='5 - ' + map5;
						break;
					}
					switch (ban6) {
						case 1:
							sendmap6='~~6 - ' + map6x +'~~' + indication6Role;
						break;
						case 0:
							sendmap6='6 - ' + map6;
						break;
					}
					switch (ban7) {
						case 1:
							sendmap7='~~7 - ' + map7x +'~~' + indication7Role;
						break;
						case 0:
							sendmap7='7 - ' + map7;
						break;
					}
				
					message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n')   
		
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username +userRole;
						
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 4"','\x1b[32m',' exécuté','\x1b[0m')
				}
			}
	}
}

// bannisement n°5
 if (message.content === '!vote ban 5') {
	if (banSession === 0){ // Vérification session
		message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
		// log fonctionnalité
			d = new Date();
			heureDate(d);
			user = message.member.user.username;
	  
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 5"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
	} else {
			if (ban5===1){// Vérification si ban 5 déjà exécuté
				message.channel.send('Cette map a déjà été bannie !')
				
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
		
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 5"','\x1b[31m',' refusé','\x1b[0m')
			} else {
					if (statutRole===0){// Vérification statut des rôles
						message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)")
						// log fonctionnalité
							d = new Date();
							heureDate(d);
							user = message.member.user.username;
	  
							console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 5"','\x1b[31m',' refusé','\x1b[0m', '/!/ no team','\x1b[0m')
					} else {
					ban5 =1;
				
					if (message.member.roles.find(r => r.name ===  'Équipe Bleu')){
						indication5Role = ':blue_book:';
						userRole = '(bleu)'
					} else if (message.member.roles.find(r => r.name ===  'Équipe Orange')){
						indication5Role = ':orange_book:';
						userRole = '(orange)'
					}
					message.reply('a banni Frontière')
				
					switch (ban1) {
						case 1:
							sendmap1='~~1 - ' + map1x +'~~' + indication1Role;
						break;
						case 0:
							sendmap1='1 - ' + map1;
						break;
					}
					switch (ban2) {
						case 1:
							sendmap2='~~2 - ' + map2x +'~~' + indication2Role;
						break;
						case 0:
							sendmap2='2 - ' +map2;
						break;
					}
					switch (ban3) {
						case 1:
							sendmap3='~~3 - ' + map3x +'~~' + indication3Role;
						break;
						case 0:
							sendmap3='3 - ' + map3;
						break;
					}
					switch (ban4) {
						case 1:
							sendmap4='~~4 - ' + map4x +'~~' + indication4Role;
						break;
						case 0:
							sendmap4='4 - ' +map4;
						break;
					}
					switch (ban5) {
						case 1:
							sendmap5='~~5 - ' +map5x +'~~' + indication5Role;
						break;
						case 0:
							sendmap5='5 - ' + map5;
						break;
					}
					switch (ban6) {
						case 1:
							sendmap6='~~6 - ' + map6x +'~~' + indication6Role;
						break;
						case 0:
							sendmap6='6 - ' + map6;
						break;
					}
					switch (ban7) {
						case 1:
							sendmap7='~~7 - ' + map7x +'~~' + indication7Role;
						break;
						case 0:
							sendmap7='7 - ' + map7;
						break;
					}
				
					message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n')   
		
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username +userRole;
						
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 5"','\x1b[32m',' exécuté','\x1b[0m')
				}
			}
	}
}

// bannisement n°6
 if (message.content === '!vote ban 6') {
	if (banSession === 0){ // Vérification session
		message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
		// log fonctionnalité
			d = new Date();
			heureDate(d);
			user = message.member.user.username;
	  
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 6"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
	} else {
			if (ban6===1){// Vérification si ban 6 déjà exécuté
				message.channel.send('Cette map a déjà été bannie !')
				
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
		
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 6"','\x1b[31m',' refusé','\x1b[0m')
			} else {
					if (statutRole===0){// Vérification des statut des rôles
						message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)")
						// log fonctionnalité
							d = new Date();
							heureDate(d);
							user = message.member.user.username;
	  
							console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 6"','\x1b[31m',' refusé','\x1b[0m', '/!/ no team','\x1b[0m')
					} else {
					ban6 =1;
				
					if (message.member.roles.find(r => r.name ===  'Équipe Bleu')){
						indication6Role = ':blue_book:';
						userRole = '(bleu)'
					} else if (message.member.roles.find(r => r.name ===  'Équipe Orange')){
						indication6Role = ':orange_book:';
						userRole = '(orange)'
					}
					message.reply('a banni Litoral')
				
					switch (ban1) {
						case 1:
							sendmap1='~~1 - ' + map1x +'~~' + indication1Role;
						break;
						case 0:
							sendmap1='1 - ' + map1;
						break;
					}
					switch (ban2) {
						case 1:
							sendmap2='~~2 - ' + map2x +'~~' + indication2Role;
						break;
						case 0:
							sendmap2='2 - ' +map2;
						break;
					}
					switch (ban3) {
						case 1:
							sendmap3='~~3 - ' + map3x +'~~' + indication3Role;
						break;
						case 0:
							sendmap3='3 - ' + map3;
						break;
					}
					switch (ban4) {
						case 1:
							sendmap4='~~4 - ' + map4x +'~~' + indication4Role;
						break;
						case 0:
							sendmap4='4 - ' +map4;
						break;
					}
					switch (ban5) {
						case 1:
							sendmap5='~~5 - ' +map5x +'~~' + indication5Role;
						break;
						case 0:
							sendmap5='5 - ' + map5;
						break;
					}
					switch (ban6) {
						case 1:
							sendmap6='~~6 - ' + map6x +'~~' + indication6Role;
						break;
						case 0:
							sendmap6='6 - ' + map6;
						break;
					}
					switch (ban7) {
						case 1:
							sendmap7='~~7 - ' + map7x +'~~' + indication7Role;
						break;
						case 0:
							sendmap7='7 - ' + map7;
						break;
					}
				
					message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n')   
		
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username +userRole;
						
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 6"','\x1b[32m',' exécuté','\x1b[0m')
				}
			}
	}
}

// bannisement n°7
 if (message.content === '!vote ban 7') {
	if (banSession === 0){ // Vérification session
		message.channel.send("La session de ban n'a pas été lancé. (!vote start)")
			
		// log fonctionnalité
			d = new Date();
			heureDate(d);
			user = message.member.user.username;
	  
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 7"','\x1b[31m',' refusé','\x1b[0m', '/!/ pas de session ban','\x1b[0m')
	} else {
			if (ban7===1){// Vérification si ban 7 déjà exécuté
				message.channel.send('Cette map a déjà été bannie !')
				
				// log fonctionnalité
					d = new Date();
					heureDate(d);
					user = message.member.user.username;
		
					console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 7"','\x1b[31m',' refusé','\x1b[0m')
			} else {
					if (statutRole===0){// Vérification statut des rôles
						message.channel.send(" Vous n'avez pas d'équipe. (!vote bleu/orange)")
						// log fonctionnalité
							d = new Date();
							heureDate(d);
							user = message.member.user.username;
	  
							console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 7"','\x1b[31m',' refusé','\x1b[0m', '/!/ no team','\x1b[0m')
					} else {
					ban7 =1;
				
					if (message.member.roles.find(r => r.name ===  'Équipe Bleu')){
						indication7Role = ':blue_book:';
						userRole = '(bleu)'
					} else if (message.member.roles.find(r => r.name ===  'Équipe Orange')){
						indication7Role = ':orange_book:';
						userRole = '(orange)'
					}
					message.reply('a banni Villa')
				
					switch (ban1) {
						case 1:
							sendmap1='~~1 - ' + map1x +'~~' + indication1Role;
						break;
						case 0:
							sendmap1='1 - ' + map1;
						break;
					}
					switch (ban2) {
						case 1:
							sendmap2='~~2 - ' + map2x +'~~' + indication2Role;
						break;
						case 0:
							sendmap2='2 - ' +map2;
						break;
					}
					switch (ban3) {
						case 1:
							sendmap3='~~3 - ' + map3x +'~~' + indication3Role;
						break;
						case 0:
							sendmap3='3 - ' + map3;
						break;
					}
					switch (ban4) {
						case 1:
							sendmap4='~~4 - ' + map4x +'~~' + indication4Role;
						break;
						case 0:
							sendmap4='4 - ' +map4;
						break;
					}
					switch (ban5) {
						case 1:
							sendmap5='~~5 - ' +map5x +'~~' + indication5Role;
						break;
						case 0:
							sendmap5='5 - ' + map5;
						break;
					}
					switch (ban6) {
						case 1:
							sendmap6='~~6 - ' + map6x +'~~' + indication6Role;
						break;
						case 0:
							sendmap6='6 - ' + map6;
						break;
					}
					switch (ban7) {
						case 1:
							sendmap7='~~7 - ' + map7x +'~~' + indication7Role;
						break;
						case 0:
							sendmap7='7 - ' + map7;
						break;
					}
				
					message.channel.send(sendmap1+ '\n' +sendmap2+ '\n' +sendmap3+ '\n'+sendmap4+ '\n'+sendmap5+ '\n' +sendmap6+ '\n' +sendmap7+ '\n')   
		
					// log fonctionnalité
						d = new Date();
						heureDate(d);
						user = message.member.user.username +userRole;
						
						console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"ban 7"','\x1b[32m',' exécuté','\x1b[0m')
				}
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
		message.channel.send('\nComment faire un vote de map -> <https://tinyurl.com/r6sbot-votemap-comment-faire> \nVoici la liste des commandes: \nPour les commandes de ce bot TOUJOURS commencer par : !vote . \n- Aide: !vote help \n- Liste des maps: !vote list \n- Lancer un vote: !vote start \n Chosir une équipe: !vote bleu/orange \n- Bannir une map: !vote ban [numéro de la map] \n- Arrêter un vote: !vote stop \n \nGo follow <https://www.twitter.com/Benwarrior37>')
			
		// log fonctionnalité
			d = new Date();
			heureDate(d);
			user = message.member.user.username;
	  
			console.log('['+ dformat +']'+'\x1b[33m','User:','\x1b[0m' +user+'','' ,'--->', '\x1b[33m','Commande:','\x1b[37m','"help"','\x1b[32m',' exécuté','\x1b[0m')
	}
})
// fin
// Copyright Benjamin Fourmaux -- Beruet