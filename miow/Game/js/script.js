/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: '',
	},
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'mainmenu': 'mainmenu.mp3',
	'mainmenu2': 'mainmenu2.mp3',
	'angry': 'angry.mp3',
	'happy': 'happy.mp3',
	'normal': 'normal.mp3',
	'normal2': 'normal2.mp3',
	'romantic': 'romantic.mp3',
	'romantic2': 'romantic2.mp3',
	'romantic3': 'romantic3.mp3',
	'sad': 'sad.mp3',
	'surprise': 'surprised.mp3',
	'scary': 'scary.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	'ahivebeenwaiting': 'Hayato/ahivebeenwaiting.mp3',
	'anyways': 'Hayato/anyways.mp3',
	'becauseimyourboyfriend': 'Hayato/becauseimyourboyfriend.mp3',
	'ehhstopitimeandontbutuh': 'Hayato/ehhstopitimeandontbutuh.mp3',
	'ahhyouresoperfect': 'Hayato/ahhyouresoperfect.mp3',
	'ohgogetreadynow': 'Hayato/ohgogetreadynow.mp3',
	'goodmorningB': 'Hayato/goodmorningB.mp3',
	'didyouhityourhead': 'Hayato/didyouhityourhead.mp3',
	'thiswillbeyourlastleep': 'Hayato/thiswillbeyourlastleep.mp3',
	'mhm': 'Hayato/mhm.mp3',
	'didyouseriously': 'Hayato/didyouseriously.mp3',
	'iloveyoursleepyvoice': 'Hayato/iloveyoursleepyvoice.mp3',
	'stopmessingwithme': 'Hayato/stopmessingwithme.mp3',
	'thatsright': 'Hayato/thatsright.mp3',
	'weveonlybeentogether': 'Hayato/weveonlybeentogether.mp3',
	'woahyoulooksoperfect': 'Hayato/woahyoulooksoperfect.mp3',
	'wentbacktosleep': 'Hayato/wentbacktosleep.mp3',
	'thenillputyoutosleep': 'Hayato/thenillputyoutosleep.mp3',
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'cloth': 'cloth.mp3',
	'door': 'door.mp3',
	'shower': 'shower.mp3',
	'scream': 'scream.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'narrator': 'narrator.png',
	'emptyroom': 'emptyroom.png',
	'bedroom': 'bedroom.png',
	'outsidehouse': 'outsidehouse.png',
	'shower': 'shower.png',
});


// Define the Characters
monogatari.characters ({
	'M': {
		name: '{{player.name}}'
	},
	'h': {
		name: 'Himari',
		directory: 'Himari',
		color: '#f3abb6',
		sprites: {
            angry: 'angry.png',
			angryZoomed: 'angryZoomed.png',
            flustered: 'flustered.png',
			flusteredZoomed: 'flusteredZoomed.png',
			flustered2: 'flustered2.png',
			flustered2Zoomed: 'flustered2Zoomed.png',
            normal: 'normal.png',
			normalZoomed: 'normalZoomed.png',
            surprised: 'surprised.png',
			surprisedZoomed: 'surprisedZoomed.png'
        }
	},
	'H': {
		name: 'Hayato',
		directory: 'Hayato',
		color: '#84B4E5',
		sprites: {
			angry: 'angry.png',
			angryZoomed: 'angryZoomed.png',
            flustered: 'flustered.png',
			flusteredZoomed: 'flusteredZoomed.png',
			flustered2: 'flustered2.png',
			flustered2Zoomed: 'flustered2Zoomed.png',
            normal: 'normal.png',
			normalZoomed: 'normalZoomed.png',
            surprised: 'surprised.png',
			surprisedZoomed: 'surprisedZoomed.png'
		}
	},
	'n': {
		name: 'Monika',
		directory: 'narrator',
		sprites: {
			narratormain: 'narratormain.png'
		}
	},
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'play music mainmenu2 with fade 2 loop volume 50',
		'show scene #f7f6f6 with fadeIn',
		{
			'Input': {
				'Text': 'What should we call you?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': "You know this isn't a name!",
			}
		},
		'n Hi {{player.name}} Welcome to Purrfect Match!',
		'show character H normal at left',
		'show character h normal at right',
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 900000,
					// The function to run when the time is over
					callback: () => {
						//Click the "narrator" button.
						monogatari.element().find('[data-choice="narrator"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Dialog': 'n Who will be your lover?',
				'Boy': {
					'Text': 'Boy',
					'Do': 'jump Boy',
					'Class': 'boyButton',
				},
				'Girl': {
					'Text': 'Girl',
					'Do': 'jump Girl',
					'Class': 'girlButton',
				},
				'narrator': {
					'Text': 'Narrator',
					'Do': 'jump Narrator',
					'Class': 'invisible',
				}
			}
		}
	],

	//Narrator lol
	'Narrator': [
		'stop music mainmenu2',
		'play music scary with loop volume 100',
		'show scene emptyroom',
		'show character n narratormain at center with zoomIn',
		'wait 3000',
		'n Well, do you want to date me?',
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 3000,
					// The function to run when the time is over
					callback: () => {
						//Click the "No" button.
						monogatari.element().find('[data-choice="No"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump narratoryes',
				},
				'No': {
					'Text': 'Ṉ̸̺͖͓̮̖̯͎̙̤́̐̉ǫ̵̘̖̼͖̹͓̲̜̠͖͒̅̋̈́͗̄̂͒̐̑̎͊́̕͠',
					'Do': 'jump narratorno',
				}
			}
		}
	],

	'narratoryes': [
		'n Just kidding, no.',
		'wait 2000',
		'jump narratorno',
	],

	'narratorno': [
		'play sound scream volume 100 loop',
		'hide character n narrator',
		'show scene narrator with heartBeat duration 20s',
		'wait 1000',
		'n N̵̪͔̙̜̱͔̰͓̈́͐̑͋̐̂̿̈́̾̌̔̋̋͝ͅÓ̸̩̲̤͓̱̪N̸̨̥̥̰̭̗̮͕̙͉̥̯̥̲͗̃͂̏Ǫ̵̢̯̝̗̪̮̦̱͇̰͓̳̉̔̀́̀̅N̶̮̯͖̤̼͓̜͚̣̣͇̖̠̿̑ͅO̵͚̗̦̘̰̮͖͎̹̝̼͍̦̎̽̇̈́͌́̎̕͠͝͝N̶̖̦̻͚̭̾͛̈́͌̂̊̇͊̀̈Ơ̷̡̧͓͖̪̯̙̠̖̞̗̈̿͑̒̍̈́̍́̍̓̕͘͝ͅͅŅ̸̞̫̝̑Ò̷̪̺͈̯͖̱͖͈̮̗̔͋̐̈́̊̋͒͝N̴̦̽Ǫ̸̰̩̥̺̜̞͖̭̮̫̤͔̂́͊͒̈́̎͑̊͌͘Ṇ̷̢̯̰̗̭̼̱͇͓̹͖͒̎̇̈́͒̍͂̆̈́͑̎͐̋̚͝Ơ̴̡̻̦̟͕̇̀̇͒͒̋͜͠Ń̸̛̩͐͋̕Ǒ̸̳͕̱̌͒̐͒͊͊Ņ̸̝͉̥̪̤̙̗͍͕̌̾̓̂̊̇̆̍͆̈̈́̕͝ͅO̴̹͍̼̗̔̈́̿̎̀͐̚͝N̵̲̊̈́Ö̷̼̠̩̤͈̖͎́̆̾̅̈́̒̍͊̓͘͝͠͝N̴̬͚͋̓͝Ó̵̺̠̖̠̪̠̝͖͕̱̟̮̔̄͂͐̐̈́̾̌͌̉̓͘͘Ơ̶͇̈́̇́̍̾̑̚ͅ-',
		'wait 1000',
		'show scene narrator with heartBeat duration 20s',
		'n Ṉ̸̢̡̧̨̨̡̨̡̨̩̤͈̗̜̳̙̹̖͕̬̘̫̤͖̺̰͍̰͎̩͓̯̲͚̺͎̣̪͍̙̮͔͎̳͍͍̻̼͎̭͈̗͕̰͓̟̳̫̼̟͎̼͈̞̲̹͍̣̹̞̩̪̝͖̣͆͜͜͜ͅͅƠ̵̧̨̨̡̡͙͇̙̬̝̞̮̟̭̤̦̼̯̣̣̞̱͇̫̞̲̲̺̣̘̞͖͙̣̫̹͇̦̯͔̩͍͈̝̘̼̱̫̱͈̬̲̩͓̼̝̯̗͔̼̺̲͍̼̜̫͔͈̥̮͕̳̞̖̣̘̰̭̯̖͔̻͓͇̥̯͚̩̙͔͍͙̯̍͋̌̽̑͊͑̒̋̀̉̑͗̉̀̈́͋̅̓̉̋̌̃̌̓͒̓͂́͛̽̊̇͊̉̔͐̔͋͂̄̂̀͋͋̾̋́̋͂̋̕̕̕̚͝͝͝͠͝͝ͅÑ̸̢̢̡̢̧̢̨̢̢̧̨̡̛͙̩̘̱̫̫̫̫̬̹̙͓̹̫̘̰͇̞̻̯̥̳̻̰̦̩͕̗̻̭͙͖̝̠̟̲̱̮̜̣̖̲̞̠̹̣͔̝͉̫̯̲̫̭̥̪̬̯̖̝̼̘͈̙̙̞̐̈͐̐͛̀͗͒̔̇̂̐̎̓̃̆͗͛̏̓̆̈́̇́̈́̃̀̈́͑̽̌̍͛̆͐͂̓̅͛̀̏̾̂͐̂̒̈́̀̓̇̈́̉̈́͛̋̋̉̋͗̇̀̐̓̈́̔́̓̾̐̀͘̚̕͜͠͝͝͝͝͝ͅͅƠ̸̧̛̹̳̟͎͚̠͉͉͍̹̦̱̞̫̼͍͎̜̠̙̾̅̀͋͆̾͛̽͆̈́̅̈̾̑̅̅̿̿̊͌̅́̊̆̽̾́̒̋̎̂̑͌͋̎͒̃̎̄̔͋̿̐̇̌̈̓̈́̑̀̒̉͌̄͑͑̀̎͛͆̕͘̕͘͜͝͝͠͝ͅN̶̡̡̡̧̧̢̧̡̡̛̟̥͙̰̜̝̝̗̺̠̻̪̪̖̲͕̣̰̬͈͓̜̱͖̣̺̩̺̞͖̺͎̲̮̭͎̣̻̭̝̳̯̮͇̼͕̥͇̼̪̪̺͍̳̭̙̦̻̣̞̖͖̩̩̦͉̖͇͙̼̲̳̝̲̯͚̱̻͓̼̠̭̠̣̹̬͎̘̹̘̠͔͖̠̜̳͗̓̋̃͆̎̑̎̉̏̒̉̽̂̈́͐̒́͋̌̂͆̀̍͑̅̃̇̐̍͋̇̎̍̇̀̊͌̍̄̇̿̈́͂́̅̓͗̑͘͘͘̕͜͜͜͜͝͝͝͝Ǫ̵̧̨̨̡̢̛̠̩̠͇̟͉̞̜̮̱̯̲̘̖̺̞̯̣̜͎̻̫̜͎͉̤̭̗̪͍͎͕̈́͐̆̇̔̇͌̈́͒̄̆́͊̔̎͛́͒̃̈́̿̏̂̆̽̏̉̓̅͆̉̂́̌̓͌͆̓̊̅̈́̑̒̾̎͗̒̏̄̊̄̈́̀̑̀͊͊̆͂͛͛̀͌̂̃̀̅̀̈́̃̿̋̌̄̽̔̀͂́̎̄̐͑̌́̎̆̀̓̎́̈́͘͘̚̚͘̕͘̕͝͠͝N̴͙͈̜̳̳͙̝̞̬̹͙͎̻̋̀̀̈́͐̋̐͝ͅƠ̸̡̛̼̙̮̝͈̬͎̫̳̻̩̤͍̂̓͐̓͂͆͊͋́̇͊̂͐͒́̏͗̇̐̊̔̓̍́̾̑̓͋̒͛̄̀̆̆̽̎̃̄̈͂̓̐̑̀́͊̌̆̏̎͂̉̽̾̽͂̌̓̎̓̊́̊̾̾͗̑̀̏̍̂̉̒̓̈́̏̚͘͘͘͘̚͘͝͠͝͠N̸̨̛̛͇̰̘͉̝̞͙̼̲͍̙̮̳͎̥͚̥̜̝̹̝͔̘̖̫̖̙̫̱̹̖͍͇̞͒͒̏̐́̇̅̎̈̐̒͗̾̐͋͐̈͒̃͂̿̃̓̎̿͑̊̈́̈́͆̉̔͒̓͑̔̔̿̿́̒̈̽̈̊̀̊̍̉̄͊͑̃̌̋͆̀̄͒̀̋̈́͌̅͂̔̾̿̅͒̓̽̿͑̏͋̿͑͒̿̂̆̒̄̚̕͘͘͘̚͘͠͠Ǫ̵̨̨̢̢̡̛͉̻̳͎͈͖͙̖͖̝̣̗̦̲̦͙͇̠͍̘̼̦͔͙̳̬̤̳̰͖̱̝̩̯̘͔͖̪̼̲͎̬͖͖͖̦͍͛̒̅͑̾̽̿͗̓̊̅̓͐̀̒̐̎͝ͅͅN̵̰̤͈͕̩̫̟͙͎̹̼͓̩̫̞̙̳͇̤̬̬̗̳͓̼̼̙̺͍͇̦͇͉͗̑̓͒̌̆̿̾̏͐̅͌͐̀̐̂̎̏̾̋̐̓͌̑͋̚͘͜͝ͅǪ̶̡̡̨̢̛̛̛̟̤̮̳̬̲̠͇̙̮̰̻̙̝͎̗̟͖̖̹͙̖̟̼̼͉̬̯͉̺̯̩̖̼̳̜̣̱͖͍͎̮̦̳͙̺̱͍̯̈̊̀̏̃̌͋̿̎̐̈̐͛̔͒͑͐̑͌̍̅̍̑̋͛̋̂̊̍̓́̈́͐̑̃͊͒̇̾͊͊͒̌̾̓́̏̍̋̾̀̑͐̾͒̈́̓̒̽̍̌̏͂̄̎̇͑̎̅̔̀̉͂̄̎͑̏̊̀̍̋͑͒͛̎̐̕͘̚͘̚̚̕͘̕͜͝͝͝͝͝͝͝N̵̛̲̰̈́̽̾̈̈́̿̀͌̈́̒͊͌̅̀̀͆̃͌̎͗̄͛̄̇̕̚̚͝͝Ǫ̵̡̢̡̧̡̧̡̧̛͚͇̬̠̮͔̹̰̜͈̜̝͖͔̟͙̣̰͓̯̭͖̼̣̩̠̯̭̯̜̳̤͈̥̫̺̦̩̼͍̭̻̮̱̠̗͖̮͕̼͎̭̹͕̯̟̰̙͖͎͍̥̱̱͖͈͚̝̩̞̼̱̹͈͓͉͖̩̗̫̑̿͒̋͊͆͌͌̇́̊̿͘͝ͅͅN̶̡̨̧̨̡̨̧̨̛̛̰͉̰̫̲̟͖̭̥̳͇̹̤̦̻̟̳̗̬̪̭͍̪͙̺̩̭͖̲̤̬̣͈̮̖̟̥̤͚̖̙̰̫̜̲̮̹̠̦͈͍̣̲͚͛͗̏̀͛̉͆̀̑̐́̿̀̓̏̏̓̏̿́͆̈́̈́̈́̌̂̃̇́̈́̀̔͛̿́̑̆̔̓͌̈́͊͂́̈̏̓̾̿̋͛͌̌̓͂̑̽̀͛̂̈́̀̄̀̅̏̉͒͂̇̌̀͘̕̕̚̕͜͜͝͝͝͝ͅͅÓ̷̡̡̨̨̨̧̡̨̲̫̻̼͈̻̭̬͍̟͇̭̖̬͈̠̼̠̠̼͙̭̼̣̝͇̻̙̯̠͔̜͉̠̪͖̫̠̘̮͇̫̘̲̖̬̩̦̮̬̦͔̝̪͈̮̩͇͎̲͕̥͙̞͇̙̻̻̭̘̺̥̻͕̩͎͕̩̳̞͍̼̰͙͎̱̭̗̱͔̅̽̃̾̏̋̐̚͜͜͜͜ͅN̶̡̨̢̧̨̡̡̨̡͙͙̪̯̦̳̟̤͖͖̞̺̻̻͇͙̙̥̦̩̙̻̺͕͇̠̗̞͖̪̥͈̼̜͉̹̻̯͉̠̥͚̠͓͎̘̟̜̫̞̲̫̹͔̹͙̝͖͙̦͉̙̘̬̙̺̞͍͕̰̻̬͓̬̣̭̻̠̞̂̊͆̔̇͐̄̀͜͜͜ͅͅͅO̴̧̧̡̡̨̧̧̢͎͈͓͓̹̤̻̝̜͕̦̫̝͔̜̪̮̩̘̙̟̗̗̪̙̳̝͍͕͎̞͖͈͕͙͉̤͍͍̖̝̦̙͉͉͖̥̱̞̼͓̜̤̬̠̩̜̙̤̰̻͖͖͎͚̗͈̞̼̭͖̜̎͒̿̓̈́̆͋̎͆̈́̑͒́͋͗͋̓͒͛͌͋̌̓̌̍̕̚̚̕͜͜͝͠͝͝͠N̶̡̧̢̧̨̧̡̨̨̨̧̛̛̛̛̺͕͙̱̤̬̯͙̫̤͔̦̺͍̩̪̖̦̦̜̫͎̬̞̥͉̳̬͙͎̰̳̗̘͉̮̱̺̗͖̥̪̱̬͍͍͚̱̞̜͎̳͔͈̰̣͚̣̰̘̭̙̲͍̩̣̻͖̪͕̹̩̙̤̗̼̝͈̤͖̠̖̈͌̀͐̈́͛̓̈́̉̐̄̈̓͌͑̀̉͒̓̋̾̀̄̋̌͋́̊́̊̇̊̓̓̃͌̆̇́̏͗̈́̈́̏̔̎̒̊́̄̆̿͌̂͐͂̂̐̄̋͋̀̌̌̌̊̇̉͑́͗̋̐̿̕̚͘̕̕͘͘̕͜͜͠͝͝͝͝͠͠ͅǪ̷̡̢̢̢̢̢̨̛̛̛̛͕̖̗̫̦̳͇̱̠̩͙̩̮͔͇͍̥̫͎̻̰̬̙͕͖͇̞͕̲̪͈̖̤̬̭͖̠̖͇̮̲̬̰̼̪̬͉̮͍̰͓̯̹̩̱̝͉͈̦̻̫̲͚̝͙̼̻͔͇̱̮̥̠̱̯͍̤̣̹̙͕͇͇͈̩̳͖̫̖̘̲̮̥̤̪̦̰͇̮̥̦̩̅̂̽̐͋͆͌̇̅̇̑͑̃̃̎̆̀̅̾̏̾̔̂̋͐̉̈́̈́̍͂́̄̄̆̈́̅̈́̈́̾͐̋̌̅́̈̋̌̀͛͂̽̔̏̔̄̎̔̅̒̌͐̎͑̾͐̐̈̉̎̔̉̄̉̍̈́̏̐́̔͊̕͘͘͘̕͘̚̕͘̚͜͝͠͝͝ͅͅͅͅͅÑ̸̨̡̢̨̧̧̡̢̧̛̛̥̱̤̰̣̻̤͉̘̪͎̥̤̺̳͍̬̪̯̲̥̠̬̙͚̖̗̻̙̻͙̜̦̖̘̙̞̼̥̙̖̖͇̹͉͓̖̥͔̺̪̙͈̱̫͔̳̯̝̹̞̙̪̥͙͙͓͍͕͚̝̭̥̉̉̿̐̉̍͗̆̈́́͋͂̐̓͆̃̊͆́̑̿̋̄̅͂̒̌͒̈́̇͌̍͑̒̐̈̌̔͐̒͑̊͂̔̄́̊̊͒͌̓͒̅̾͂͛̾̿͛̈́̒̎̅̇̐̓̿̀̈́̃̾̓͆̍̇̑̿͑͐̈̊̓̉͋̾̓̆́́̍̊͊̆̆̍͑̔̇̾̏͌̋̕͘͘̕͘͘̕͜͜͝͝͝͝ͅͅǪ̴̛̛̳͙̗̜̪̖̮̳̟̯͆͗̎͌̍̈̉̾̇̎̌̈́̄͛̉̒̒͌̐̉̂̋̓͂̇͛̉̈́̎͌̈́̃̍͒̽̍͒͒͋̋́͊̾͂͛̿͑̇̎̽̿̈́͆̋̿͌̒̽̋̏̈́͊́̎̔̀̂̇̑̓͗̎́̚͝͝͝͝͝ͅỠ̶̧̡̨̢̛̛͔̙͍͔̞͓̲̭̮̺̺̞̬̮̰͖̣̗̥̭̫̹̟̳̜͚̬̟̗̤̱̗̳̟̞͉̜̥̤̳̣̩̠̞͍̞̏̽̑̍̄̈́̄̓́̀́̌̒̈́̓͐̏̋̔͋͂̈́̈́̒̎̒͒̂̍̅̋̾͛͌̂̒̎̓̈́̉̈́̇̅̾́͆̾͒̏̾̽̌̈́̓́̀̔͌̉̇͛̈̐̂̔̄̽̊́̓̄̈́̄̈́͋̒͐̔̎̄̿͂̈́̀͒̅͂͆͛͛̊̍̎̕̚̕͘̕͘̚͜͜͜͝͝͠͠͠͝͠͠͝ͅN̵̡̡̨̡̡̨̛̛̼̲̙͚̬̬̮͉̝̮̲͓̭̮̜̲͔̺̹̹̯̳̩̺͕̲͇̣̺̦̮̝̳͍͚̺̟͍͎̙̺̱̻̖͚̰̹̗̭͈̣̲̘̦͇̞͎͎̻͎̻̦̘̼̣̺̥̦̝̲̝͔̖̖̟̭̺̫͓̺͚̤͙̥̘̯̝͙̥̱̋̒̀̒̇̓̆̀̒̉̑̈́̂̀̎̐͊̓̔̂͊͊́̓̿͛̍̈́̃̿̿̽͛̓̈́̈̍͜͝͝͠ͅǪ̶̧̡̡̢̡̡̡̧̡̨̧̨̧̢̡̢̗̙̥̙̞̳͉̳͎̣͎͈̯̰̣͓̣̲̘̥͔̫̬̻͚̹̟͙̳͚͈͖̪̩͎̟͇͉̜̞̲̺̱̹̟̭̗̗̙̠̙̤̦͚̥̪̬̻͇̙͓̞͇̝̻̮͙̣̤̖̣͎̪̤̗͇̻̜̝̺̩̻̥̞̜͉͎̣̝̤̲̊́̑̀̈́̿̎̃̃͒͛̏̽́͑̉̄̈́̂̿̋͋̐̇̌͂̉̿͑͊̔̍̇̾̋͂͆̊͗̊̍͒͊̆̄̍́́̍̔̄͗͗̈́̄̊̐̐͛́̌̌͆̎̽͑̿̿̂̈́͂̆̓̾̉͑́̂͗͑̑̓̎̈̔̿́̒̇͗́̈́͂̂̇̓͋͑̏̏́̽͛̂̽̉͘̚̚̚̚͜͜͜͝͝͠͝͝͠ͅͅͅͅN̴̡̧̧̧̢̧̨̢̢̛̛̛̛̬̥̣̪̲̩̣̟̟̼̲̙͉͖̱͙̳̘͉̟͍̬̞̗̘̪̫̱͕̳̹̙͎͔͙̲͚̲͕̘͍͔̝̰̖̺͚͓̰̦̖̫̥̗͇̩͕̝̮̳̘̥̭̪͓͔̠͔̘͚̦͓̯̠͓̣͕͓͔̖̗̝̬̝̪̠̖͕͍͍͇͉͚̮̄̈̓̃̾͆̈́̿̌̋̍̈̅̈́͋̀́̌̌̏̈̋̆͐̇̄̅͌̌͐̂̔͐̐́̑͑͌̈́̄̋̈͒̊͋̃͐͋̈̆͒̍̃͛̀̔̋͑̒̈͂͑̇̀̈́̓͑̒̈́̏̎̆̀͛͛̚͘̚̚͜͜͜͜͝͝͝͝͝͝͝ͅͅƠ̵̧̢̛̙͎͇̻͕̯͈͓̙̩̟̮̺̜̪̭̺̦͒͑͊̍̾̀͊̊̈́͒̽͊̉͋̂̋̌́͛̌͐́͗̄͜͜͝ͅŅ̸̨̢̨̧̡̢̧̢̧̛̛̯͙̬͇͉̟͔̰͙͎̥͚͕͉̫͓̘̫͓̱̬̟̹͕̦͖͉͙̝̖̭̫̙̥̥̺̳͖͍̟͇̟̰̭͚̲͚̩̗̞̹͈͍̦͇̹͖̙̫̝̙̠͉͈̝͉̺̻̲̺̫͇̳̞̪̼̪̖̞͚͙͚͖̫͕̳͚̤̻̘͇́̎̿́̽̌͗̉͌͆̎̓̆́̈͋̓̌͒͛͊͛̌̾̅́́͌̂̈́͗̐̐͐͛͒͆̏́̌̂͊̆͌͛̅̋̏̄̄̈́̈́̄̓̿̈͂͋̉̈́̓̐̋͋͋̓̏̌̇͐̊̔́̏͛́̿͛̓̚͘̚͘̚͘͘͝͝͠͠͝͝͠͝͝͝ͅO̵̡̨̨̨̧̨̡̡̢̨̳̤̖̪̘̳̗̮̬͍͈̠̪̻̯̩̠̗͓͖͚͎͉̥͓̺͎͖̬̥̰̲̱̰̥̖̩̘̰͔͕͍̲̦̮͔̟̤̤̺̝̺̗̼̙̤̫͕̣̯̱̱̞̻̗̬̦̹̮͈͓͕̭̞̜̪͕̼͙̣͔͇͇̮̯̗͎̲̥͕̜̪̰̮̯̅̿͊̓̑̉̍͑̅̈́̑́̊̋̄̒̃̽͂͊̕͝ͅͅŅ̸̛̟̱̥͙̗͈̰̪̩͕̗̦̭͚̮̤̱͕̼̟̭̗͑̀͊͌̀̔̇̀͑̈́́͑̀̒́̎̂̔̈́̋͒̆̂͌̑̿͑͂̓̊́̏̍̓̀̄̓͗̀̉̓̉̄̀̀̀̀͊͌́͐̿͌͆̀̎̔̇̉̇̄̽̔̀̆̅̓̊́͘̚̕̚͘̚͘̚͜͠͝͠ͅƠ̴̧̧̢̡̡̧̛̞̟̹͚̠͈̱̜͔̗̪̹̤̩͚̝̦̻̖̙̫̙̲̼̦͓̖̰͎̫̣͕̲̙̟͎̱̼̞̝̘͇̻͈̺͚͉͕̳̫͎̗̬̱̈́̉̓̆́̓̍̅͒̀̏̈́̓̏͊̓̀̏͒̌̽̊̑̄̆̓͛̿̆͛̃̀̅̽͒͌͆́͂͋́̃̔͌̈͊͊̇̃̀̈́́̆̂̔̏̈́̉́͂̾͑̚͘̕̕͘͜͝͝͠͠͝͝͝N̴̡̨̨̛̰̙̦͕̱͍͔̘̦͎͙̰̹̜̥̘̗͕͕̬͕̞̱͙̘͔̥͍̯̹̪̣̝̠͈͖̰̝̲̩̱͙̮͉̣̪͓̥̫̣̞̭̮̭̅̏͛̀̓̍͑́͛͒̐̈̀̉̋͆̾̌̇̀́̄̀͆̍̏͌̒͑͆̋̀̀͒͑̒̽̇̕͘̕̕̕͜͝͝͝ͅǪ̵̧̢̨̧̨̢̞͇̘͎͈͇̙͉͔̠͔̜̥̠̹̯͙̩̬̘̫͓̩͔̩̮̮̝̘̙̙̹̯̠͖͉̲͙̟̖̦̮̩̠̬̖̬̱͖̙̦̟̞̺̻̳̯͍̼͙͚̲̙̘̝̰̙̺̮̙͕͈͈̟̹͉̟̞̪̞̞͕̫͇͍̣̲̟̬̩̜͇͇͓̬͎̯͇͍̤͖̰̻͕͇̑̋́͐̈́̓̏͊́́̄̅͋̽̾̌̍̏͆̊͌̈́̌̓͆͛͊̚̚̕̕̚̚̚̕͜͜͜͠͠ͅͅͅͅN̵̨̢̨̧̢̡̨̢̢̛͙̺̗̖̞̱̬̮̬̺̰̖̘̜͎̪̥͇̹̹̫̠̣͉͎̦̘̼̣̯͖̳̹͓̹̞̫̲̖̗͍̳͉̰̯̖͔̰̬̞̗̭͉̱̼̦͖͕̤̦̜̞̮̞͚̻̣̱͒͌̄̅͒̍̓̋̀͐̆́͌̎̊͊͌̂̿̓̓̓̔̅̅̽̏̓̾̋̊̊̈́̿͋͛̎̏̄̇̽͊͐̆͒͐͗͆̈́͐̄̏̆͒̉̀̎̔͆̋̏̅̏͑̋̿̏͘̕͘̕͘͜͝͝͠ͅƠ̶̢̨̡̧̪̗̬̥͓̻̝̱͍̗͕̣͓͎̻͚͔̤̤̩̗̼̠̙̥̹͉̯͖̜̠̠̟̝̤̲͓͇̘̞̳̝̰̩̗̪̟̎̃̈́́̇͆̈́̌͑́̉̾̈́̄̓̎͐̀̍̌͂̾̀̃̾̂̇̐̌̆͒̔̍͛̈́̄̔͌̔̔̎̏́͋̓͐̿̈͊̓̾͐̂̀̐̀́̿̃̇̒̈́̚̚̕͘̕͝N̶̢̡̧̢̨̧̛̛̼̬͔̝̥̟͔̜̮̗̼̤͙͇̣̖̳̺̖̖̺̫̜̻̦͓̣̞͈̰̜̗̗͎̯̘̯̙͔̪͍͈̘̟̞͓̟͇̝̮͔͔̠̩̜̦͔͖͍̝͍̙̼͔͇̗̣͉̞͎̺̜̲̘̏͒̋̇̓̄̾̌̓́̽̉̅͗͂̔̆̏̑̊̒̓̑͆̅̍̾͑͌͐͐̎͒̂̿͐̀̑́̑̈́̄̄͛͂̓̆͛̈̋͆̀̓̈́̊̀̂͂̉̾̀̀͆̃̑̑̿̉̍̌̊̂̉̀̾̿́̎̾̅̒̊͌̏͗̈́̈́̈́̋̈́͑̕͘͘̚͘͘̕̚͜͜͝͠͠͠͠͝͠͝͠͝͠ͅͅÖ̶̧̢̱͙̰̟̬̩̜̟̬͇̮̩̹̲N̵̨̡̡̢̡̡̨̡̨̧̛̜͉͎̯̟͕͖͙̰̺̞͚̞̱̠̮̯̫̪̝͎͉̱͚͇͙͎̜̝̼͚̺̱̦̝̹̲͖̞̦̖̳̣̞̪̰̤̼̹͔̦̩͉͕̘̖̪͈̼̞͕̯̪̳͙̰̠̖̟̖̑̀͌͆͑̈̋̑̆͗͒̏̀́͒̀̔̕͜͜͝͝͠͠ͅȌ̶͖̬̹͍̹̱̙̱̠͍̣̮̫͙̠̭̙̻͙̬̼̬̺͈̽̂͋̽̓̐͛̿̊̈́̉͛̈́̂̿̈́͑̓́̈́̉͒̃͗̊̒̀̍̏͌͋̐̈́͊̓̏͂̒̊̎̉̿̀̈̓̓̇̀̀̿͆̅̓̈́̐̅̔͌͘̚̚͠͠͠͝͝͝ͅN̷̢̧̧̨̡̢̛̛͚̱̥̪͎̱̼̠̪̠̠͚̬̮͚͙̦̦̥̻͕͚̱̮̻̺͙̹̟̲̟̼̮̲̞̞̼͙̺̦͖̦͎̣͇̱͓̠̜̹̤̬̬̯̤̗͍͉̝̬͓̮̙̮̻̯͇̬͈̭͔̠͓͍͈͖͍̲̜̹͍̮̤͇̗͓͍̙̦͓̞͚̺̫͈͉̝̘͕̝͎̙̭͙͛̽́͐͋̃̈́̋̍̾̉̈́̀̽̉͋̌̑̊̃͜͜͜͜ͅͅỜ̸̢̡̡̛̗̺̰̗̮̪͔͑́̈̈́͂̈́̽̾̓͒̄̔̑͒͒͂͗̈́̔͐̌̒̊̉͆̄́̌̒̎̎̿̎̉́͂̏͑͗̀̑͌̂̔̌̾̇̓͑̈́̂̏͋̾̌̈́́̈́̈̏̀͋̃̓̆̈́́͛͊̿͌̎̋̾̍̒̄̓͒͗̏͐͆͌͘̕̚̚͘͘͘̚̚͝͝͝͝͝͠͝N̶̢̡̧̢̨̧̡̛̩̠͔̥̜͍͙͇̙̮̣̠̦̦̪̻͖̺͈͉̮͔̻͇͖͍̜̘͓̹̱̖̻͍̮̺̞̗̙̳̖͉̗̳̘̫̼̫͍̬̮̲̥̣͔̟͕̭̭̤͎͇̞͐̆́̄́̈̒͊͂̋̓́̈́̾̈́̓͆̈́̈́̀͂́́͑̔̒̇̈́̆̾̒͊̐̉̓̑̌̋̍͑̚̕̕͘̕͜͜͜͠͝͝Ơ̴̧̧̨̛͎̤̟̟̗̜̱̺͍̫̱̣̫̩̖̝͍̜̱͈̳̟̞̟͚̼͍͙͔̤̲͙͙̗̪̤͔̩̺̭̮̦̠͔͎̞͗̑̽̇͐̏̆̌̏̾̈́̍̃̂̊́̓̒̍̾̄̂̅̈́̄̌̈́́̎̈͆̀́̃͒̆̾̉̒̓͆̋͐͂̓̀̾̓͂̈́̈́̈́̽̉͑̏̌͐̓̐̾͐͊̈́̑̚̚͘̕̕̕̕̚͘͘͜͠͠͝ͅŅ̷̡̡̧̨̩̠̘̪̩͍̫͓͉̪̻̭̪̩̫̩̘̟̖̜̱͕͍̘̹͇̹͉̮̤̠̣͚͍̪͕̻͎̬̳͇̥̻̤̦̼͍̣̰̩̖̖̳̮̪̩̼͕̘̦̳̑͌͋̈́͒͊́̅́͌̐͋̈́̀̐̽̐̏̾͐͛̕͜͝ͅƠ̷̧̡̢̨̨̢̛̛̛̪̹̩̫͉̝̲͈͎̙̥̱̠̜̣͚̞͚̜̣͎̰̞̫̺͉̥̭̘̦̖͖͕̞̭͉̭̩̣̱͚̘̰̜̘̩͈͕͕̜̖̩̻͍͎̱͔̖̹̙̩̝͕̹̩̗̞̾̋̃̇͊́͛̐́͂̊̇͋̊͋̉͒͑̌̓͑̓̓̀̌́̈́̈̒́͋̓͌͛̌̎̈́̋̈́̈͌̔̄̓͂̈́̿̑̉̒̂͊͋̂̈̍̋͌̓̋͑̒̋͛̒̉́̾͒̐͗͑̎̀̓̀̊͆̽͂̓̈́̂̍̊͗̚͘̕̚̚̕̕̚͜͜͠͝͝͝͠͝͝͝͝͝͠͠ͅƠ̷̡̧̨̛̺̖̼̙̳̹̼͇̖̜̠̦̠͎͓̭̯͉̣͖͔̽̋̔̂̑͌̍̿̅̄͛̒̀̎͒̐̈́́̾̎̎̉̀̌͛̉͒̌̉͑͒̀̈́̓͂̂̔̄͑͌̉͆͌̆̀̒́̆̌̎͗̊̀̔̓̀̚̕̚͘̚͘͜͝͝͠͠͝-',
		'show scene narrator with zoomIn',
		'jump narratorloop',
	],

	'narratorloop': [
		'show scene narrator with heartBeat duration 20s',
		'wait 1000',
		'n N̵̪͔̙̜̱͔̰͓̈́͐̑͋̐̂̿̈́̾̌̔̋̋͝ͅÓ̸̩̲̤͓̱̪N̸̨̥̥̰̭̗̮͕̙͉̥̯̥̲͗̃͂̏Ǫ̵̢̯̝̗̪̮̦̱͇̰͓̳̉̔̀́̀̅N̶̮̯͖̤̼͓̜͚̣̣͇̖̠̿̑ͅO̵͚̗̦̘̰̮͖͎̹̝̼͍̦̎̽̇̈́͌́̎̕͠͝͝N̶̖̦̻͚̭̾͛̈́͌̂̊̇͊̀̈Ơ̷̡̧͓͖̪̯̙̠̖̞̗̈̿͑̒̍̈́̍́̍̓̕͘͝ͅͅŅ̸̞̫̝̑Ò̷̪̺͈̯͖̱͖͈̮̗̔͋̐̈́̊̋͒͝N̴̦̽Ǫ̸̰̩̥̺̜̞͖̭̮̫̤͔̂́͊͒̈́̎͑̊͌͘Ṇ̷̢̯̰̗̭̼̱͇͓̹͖͒̎̇̈́͒̍͂̆̈́͑̎͐̋̚͝Ơ̴̡̻̦̟͕̇̀̇͒͒̋͜͠Ń̸̛̩͐͋̕Ǒ̸̳͕̱̌͒̐͒͊͊Ņ̸̝͉̥̪̤̙̗͍͕̌̾̓̂̊̇̆̍͆̈̈́̕͝ͅO̴̹͍̼̗̔̈́̿̎̀͐̚͝N̵̲̊̈́Ö̷̼̠̩̤͈̖͎́̆̾̅̈́̒̍͊̓͘͝͠͝N̴̬͚͋̓͝Ó̵̺̠̖̠̪̠̝͖͕̱̟̮̔̄͂͐̐̈́̾̌͌̉̓͘͘Ơ̶͇̈́̇́̍̾̑̚ͅ-',
		'wait 1000',
		'show scene narrator with heartBeat duration 20s',
		'n Ṉ̸̢̡̧̨̨̡̨̡̨̩̤͈̗̜̳̙̹̖͕̬̘̫̤͖̺̰͍̰͎̩͓̯̲͚̺͎̣̪͍̙̮͔͎̳͍͍̻̼͎̭͈̗͕̰͓̟̳̫̼̟͎̼͈̞̲̹͍̣̹̞̩̪̝͖̣͆͜͜͜ͅͅƠ̵̧̨̨̡̡͙͇̙̬̝̞̮̟̭̤̦̼̯̣̣̞̱͇̫̞̲̲̺̣̘̞͖͙̣̫̹͇̦̯͔̩͍͈̝̘̼̱̫̱͈̬̲̩͓̼̝̯̗͔̼̺̲͍̼̜̫͔͈̥̮͕̳̞̖̣̘̰̭̯̖͔̻͓͇̥̯͚̩̙͔͍͙̯̍͋̌̽̑͊͑̒̋̀̉̑͗̉̀̈́͋̅̓̉̋̌̃̌̓͒̓͂́͛̽̊̇͊̉̔͐̔͋͂̄̂̀͋͋̾̋́̋͂̋̕̕̕̚͝͝͝͠͝͝ͅÑ̸̢̢̡̢̧̢̨̢̢̧̨̡̛͙̩̘̱̫̫̫̫̬̹̙͓̹̫̘̰͇̞̻̯̥̳̻̰̦̩͕̗̻̭͙͖̝̠̟̲̱̮̜̣̖̲̞̠̹̣͔̝͉̫̯̲̫̭̥̪̬̯̖̝̼̘͈̙̙̞̐̈͐̐͛̀͗͒̔̇̂̐̎̓̃̆͗͛̏̓̆̈́̇́̈́̃̀̈́͑̽̌̍͛̆͐͂̓̅͛̀̏̾̂͐̂̒̈́̀̓̇̈́̉̈́͛̋̋̉̋͗̇̀̐̓̈́̔́̓̾̐̀͘̚̕͜͠͝͝͝͝͝ͅͅƠ̸̧̛̹̳̟͎͚̠͉͉͍̹̦̱̞̫̼͍͎̜̠̙̾̅̀͋͆̾͛̽͆̈́̅̈̾̑̅̅̿̿̊͌̅́̊̆̽̾́̒̋̎̂̑͌͋̎͒̃̎̄̔͋̿̐̇̌̈̓̈́̑̀̒̉͌̄͑͑̀̎͛͆̕͘̕͘͜͝͝͠͝ͅN̶̡̡̡̧̧̢̧̡̡̛̟̥͙̰̜̝̝̗̺̠̻̪̪̖̲͕̣̰̬͈͓̜̱͖̣̺̩̺̞͖̺͎̲̮̭͎̣̻̭̝̳̯̮͇̼͕̥͇̼̪̪̺͍̳̭̙̦̻̣̞̖͖̩̩̦͉̖͇͙̼̲̳̝̲̯͚̱̻͓̼̠̭̠̣̹̬͎̘̹̘̠͔͖̠̜̳͗̓̋̃͆̎̑̎̉̏̒̉̽̂̈́͐̒́͋̌̂͆̀̍͑̅̃̇̐̍͋̇̎̍̇̀̊͌̍̄̇̿̈́͂́̅̓͗̑͘͘͘̕͜͜͜͜͝͝͝͝Ǫ̵̧̨̨̡̢̛̠̩̠͇̟͉̞̜̮̱̯̲̘̖̺̞̯̣̜͎̻̫̜͎͉̤̭̗̪͍͎͕̈́͐̆̇̔̇͌̈́͒̄̆́͊̔̎͛́͒̃̈́̿̏̂̆̽̏̉̓̅͆̉̂́̌̓͌͆̓̊̅̈́̑̒̾̎͗̒̏̄̊̄̈́̀̑̀͊͊̆͂͛͛̀͌̂̃̀̅̀̈́̃̿̋̌̄̽̔̀͂́̎̄̐͑̌́̎̆̀̓̎́̈́͘͘̚̚͘̕͘̕͝͠͝N̴͙͈̜̳̳͙̝̞̬̹͙͎̻̋̀̀̈́͐̋̐͝ͅƠ̸̡̛̼̙̮̝͈̬͎̫̳̻̩̤͍̂̓͐̓͂͆͊͋́̇͊̂͐͒́̏͗̇̐̊̔̓̍́̾̑̓͋̒͛̄̀̆̆̽̎̃̄̈͂̓̐̑̀́͊̌̆̏̎͂̉̽̾̽͂̌̓̎̓̊́̊̾̾͗̑̀̏̍̂̉̒̓̈́̏̚͘͘͘͘̚͘͝͠͝͠N̸̨̛̛͇̰̘͉̝̞͙̼̲͍̙̮̳͎̥͚̥̜̝̹̝͔̘̖̫̖̙̫̱̹̖͍͇̞͒͒̏̐́̇̅̎̈̐̒͗̾̐͋͐̈͒̃͂̿̃̓̎̿͑̊̈́̈́͆̉̔͒̓͑̔̔̿̿́̒̈̽̈̊̀̊̍̉̄͊͑̃̌̋͆̀̄͒̀̋̈́͌̅͂̔̾̿̅͒̓̽̿͑̏͋̿͑͒̿̂̆̒̄̚̕͘͘͘̚͘͠͠Ǫ̵̨̨̢̢̡̛͉̻̳͎͈͖͙̖͖̝̣̗̦̲̦͙͇̠͍̘̼̦͔͙̳̬̤̳̰͖̱̝̩̯̘͔͖̪̼̲͎̬͖͖͖̦͍͛̒̅͑̾̽̿͗̓̊̅̓͐̀̒̐̎͝ͅͅN̵̰̤͈͕̩̫̟͙͎̹̼͓̩̫̞̙̳͇̤̬̬̗̳͓̼̼̙̺͍͇̦͇͉͗̑̓͒̌̆̿̾̏͐̅͌͐̀̐̂̎̏̾̋̐̓͌̑͋̚͘͜͝ͅǪ̶̡̡̨̢̛̛̛̟̤̮̳̬̲̠͇̙̮̰̻̙̝͎̗̟͖̖̹͙̖̟̼̼͉̬̯͉̺̯̩̖̼̳̜̣̱͖͍͎̮̦̳͙̺̱͍̯̈̊̀̏̃̌͋̿̎̐̈̐͛̔͒͑͐̑͌̍̅̍̑̋͛̋̂̊̍̓́̈́͐̑̃͊͒̇̾͊͊͒̌̾̓́̏̍̋̾̀̑͐̾͒̈́̓̒̽̍̌̏͂̄̎̇͑̎̅̔̀̉͂̄̎͑̏̊̀̍̋͑͒͛̎̐̕͘̚͘̚̚̕͘̕͜͝͝͝͝͝͝͝N̵̛̲̰̈́̽̾̈̈́̿̀͌̈́̒͊͌̅̀̀͆̃͌̎͗̄͛̄̇̕̚̚͝͝Ǫ̵̡̢̡̧̡̧̡̧̛͚͇̬̠̮͔̹̰̜͈̜̝͖͔̟͙̣̰͓̯̭͖̼̣̩̠̯̭̯̜̳̤͈̥̫̺̦̩̼͍̭̻̮̱̠̗͖̮͕̼͎̭̹͕̯̟̰̙͖͎͍̥̱̱͖͈͚̝̩̞̼̱̹͈͓͉͖̩̗̫̑̿͒̋͊͆͌͌̇́̊̿͘͝ͅͅN̶̡̨̧̨̡̨̧̨̛̛̰͉̰̫̲̟͖̭̥̳͇̹̤̦̻̟̳̗̬̪̭͍̪͙̺̩̭͖̲̤̬̣͈̮̖̟̥̤͚̖̙̰̫̜̲̮̹̠̦͈͍̣̲͚͛͗̏̀͛̉͆̀̑̐́̿̀̓̏̏̓̏̿́͆̈́̈́̈́̌̂̃̇́̈́̀̔͛̿́̑̆̔̓͌̈́͊͂́̈̏̓̾̿̋͛͌̌̓͂̑̽̀͛̂̈́̀̄̀̅̏̉͒͂̇̌̀͘̕̕̚̕͜͜͝͝͝͝ͅͅÓ̷̡̡̨̨̨̧̡̨̲̫̻̼͈̻̭̬͍̟͇̭̖̬͈̠̼̠̠̼͙̭̼̣̝͇̻̙̯̠͔̜͉̠̪͖̫̠̘̮͇̫̘̲̖̬̩̦̮̬̦͔̝̪͈̮̩͇͎̲͕̥͙̞͇̙̻̻̭̘̺̥̻͕̩͎͕̩̳̞͍̼̰͙͎̱̭̗̱͔̅̽̃̾̏̋̐̚͜͜͜͜ͅN̶̡̨̢̧̨̡̡̨̡͙͙̪̯̦̳̟̤͖͖̞̺̻̻͇͙̙̥̦̩̙̻̺͕͇̠̗̞͖̪̥͈̼̜͉̹̻̯͉̠̥͚̠͓͎̘̟̜̫̞̲̫̹͔̹͙̝͖͙̦͉̙̘̬̙̺̞͍͕̰̻̬͓̬̣̭̻̠̞̂̊͆̔̇͐̄̀͜͜͜ͅͅͅO̴̧̧̡̡̨̧̧̢͎͈͓͓̹̤̻̝̜͕̦̫̝͔̜̪̮̩̘̙̟̗̗̪̙̳̝͍͕͎̞͖͈͕͙͉̤͍͍̖̝̦̙͉͉͖̥̱̞̼͓̜̤̬̠̩̜̙̤̰̻͖͖͎͚̗͈̞̼̭͖̜̎͒̿̓̈́̆͋̎͆̈́̑͒́͋͗͋̓͒͛͌͋̌̓̌̍̕̚̚̕͜͜͝͠͝͝͠N̶̡̧̢̧̨̧̡̨̨̨̧̛̛̛̛̺͕͙̱̤̬̯͙̫̤͔̦̺͍̩̪̖̦̦̜̫͎̬̞̥͉̳̬͙͎̰̳̗̘͉̮̱̺̗͖̥̪̱̬͍͍͚̱̞̜͎̳͔͈̰̣͚̣̰̘̭̙̲͍̩̣̻͖̪͕̹̩̙̤̗̼̝͈̤͖̠̖̈͌̀͐̈́͛̓̈́̉̐̄̈̓͌͑̀̉͒̓̋̾̀̄̋̌͋́̊́̊̇̊̓̓̃͌̆̇́̏͗̈́̈́̏̔̎̒̊́̄̆̿͌̂͐͂̂̐̄̋͋̀̌̌̌̊̇̉͑́͗̋̐̿̕̚͘̕̕͘͘̕͜͜͠͝͝͝͝͠͠ͅǪ̷̡̢̢̢̢̢̨̛̛̛̛͕̖̗̫̦̳͇̱̠̩͙̩̮͔͇͍̥̫͎̻̰̬̙͕͖͇̞͕̲̪͈̖̤̬̭͖̠̖͇̮̲̬̰̼̪̬͉̮͍̰͓̯̹̩̱̝͉͈̦̻̫̲͚̝͙̼̻͔͇̱̮̥̠̱̯͍̤̣̹̙͕͇͇͈̩̳͖̫̖̘̲̮̥̤̪̦̰͇̮̥̦̩̅̂̽̐͋͆͌̇̅̇̑͑̃̃̎̆̀̅̾̏̾̔̂̋͐̉̈́̈́̍͂́̄̄̆̈́̅̈́̈́̾͐̋̌̅́̈̋̌̀͛͂̽̔̏̔̄̎̔̅̒̌͐̎͑̾͐̐̈̉̎̔̉̄̉̍̈́̏̐́̔͊̕͘͘͘̕͘̚̕͘̚͜͝͠͝͝ͅͅͅͅͅÑ̸̨̡̢̨̧̧̡̢̧̛̛̥̱̤̰̣̻̤͉̘̪͎̥̤̺̳͍̬̪̯̲̥̠̬̙͚̖̗̻̙̻͙̜̦̖̘̙̞̼̥̙̖̖͇̹͉͓̖̥͔̺̪̙͈̱̫͔̳̯̝̹̞̙̪̥͙͙͓͍͕͚̝̭̥̉̉̿̐̉̍͗̆̈́́͋͂̐̓͆̃̊͆́̑̿̋̄̅͂̒̌͒̈́̇͌̍͑̒̐̈̌̔͐̒͑̊͂̔̄́̊̊͒͌̓͒̅̾͂͛̾̿͛̈́̒̎̅̇̐̓̿̀̈́̃̾̓͆̍̇̑̿͑͐̈̊̓̉͋̾̓̆́́̍̊͊̆̆̍͑̔̇̾̏͌̋̕͘͘̕͘͘̕͜͜͝͝͝͝ͅͅǪ̴̛̛̳͙̗̜̪̖̮̳̟̯͆͗̎͌̍̈̉̾̇̎̌̈́̄͛̉̒̒͌̐̉̂̋̓͂̇͛̉̈́̎͌̈́̃̍͒̽̍͒͒͋̋́͊̾͂͛̿͑̇̎̽̿̈́͆̋̿͌̒̽̋̏̈́͊́̎̔̀̂̇̑̓͗̎́̚͝͝͝͝͝ͅỠ̶̧̡̨̢̛̛͔̙͍͔̞͓̲̭̮̺̺̞̬̮̰͖̣̗̥̭̫̹̟̳̜͚̬̟̗̤̱̗̳̟̞͉̜̥̤̳̣̩̠̞͍̞̏̽̑̍̄̈́̄̓́̀́̌̒̈́̓͐̏̋̔͋͂̈́̈́̒̎̒͒̂̍̅̋̾͛͌̂̒̎̓̈́̉̈́̇̅̾́͆̾͒̏̾̽̌̈́̓́̀̔͌̉̇͛̈̐̂̔̄̽̊́̓̄̈́̄̈́͋̒͐̔̎̄̿͂̈́̀͒̅͂͆͛͛̊̍̎̕̚̕͘̕͘̚͜͜͜͝͝͠͠͠͝͠͠͝ͅN̵̡̡̨̡̡̨̛̛̼̲̙͚̬̬̮͉̝̮̲͓̭̮̜̲͔̺̹̹̯̳̩̺͕̲͇̣̺̦̮̝̳͍͚̺̟͍͎̙̺̱̻̖͚̰̹̗̭͈̣̲̘̦͇̞͎͎̻͎̻̦̘̼̣̺̥̦̝̲̝͔̖̖̟̭̺̫͓̺͚̤͙̥̘̯̝͙̥̱̋̒̀̒̇̓̆̀̒̉̑̈́̂̀̎̐͊̓̔̂͊͊́̓̿͛̍̈́̃̿̿̽͛̓̈́̈̍͜͝͝͠ͅǪ̶̧̡̡̢̡̡̡̧̡̨̧̨̧̢̡̢̗̙̥̙̞̳͉̳͎̣͎͈̯̰̣͓̣̲̘̥͔̫̬̻͚̹̟͙̳͚͈͖̪̩͎̟͇͉̜̞̲̺̱̹̟̭̗̗̙̠̙̤̦͚̥̪̬̻͇̙͓̞͇̝̻̮͙̣̤̖̣͎̪̤̗͇̻̜̝̺̩̻̥̞̜͉͎̣̝̤̲̊́̑̀̈́̿̎̃̃͒͛̏̽́͑̉̄̈́̂̿̋͋̐̇̌͂̉̿͑͊̔̍̇̾̋͂͆̊͗̊̍͒͊̆̄̍́́̍̔̄͗͗̈́̄̊̐̐͛́̌̌͆̎̽͑̿̿̂̈́͂̆̓̾̉͑́̂͗͑̑̓̎̈̔̿́̒̇͗́̈́͂̂̇̓͋͑̏̏́̽͛̂̽̉͘̚̚̚̚͜͜͜͝͝͠͝͝͠ͅͅͅͅN̴̡̧̧̧̢̧̨̢̢̛̛̛̛̬̥̣̪̲̩̣̟̟̼̲̙͉͖̱͙̳̘͉̟͍̬̞̗̘̪̫̱͕̳̹̙͎͔͙̲͚̲͕̘͍͔̝̰̖̺͚͓̰̦̖̫̥̗͇̩͕̝̮̳̘̥̭̪͓͔̠͔̘͚̦͓̯̠͓̣͕͓͔̖̗̝̬̝̪̠̖͕͍͍͇͉͚̮̄̈̓̃̾͆̈́̿̌̋̍̈̅̈́͋̀́̌̌̏̈̋̆͐̇̄̅͌̌͐̂̔͐̐́̑͑͌̈́̄̋̈͒̊͋̃͐͋̈̆͒̍̃͛̀̔̋͑̒̈͂͑̇̀̈́̓͑̒̈́̏̎̆̀͛͛̚͘̚̚͜͜͜͜͝͝͝͝͝͝͝ͅͅƠ̵̧̢̛̙͎͇̻͕̯͈͓̙̩̟̮̺̜̪̭̺̦͒͑͊̍̾̀͊̊̈́͒̽͊̉͋̂̋̌́͛̌͐́͗̄͜͜͝ͅŅ̸̨̢̨̧̡̢̧̢̧̛̛̯͙̬͇͉̟͔̰͙͎̥͚͕͉̫͓̘̫͓̱̬̟̹͕̦͖͉͙̝̖̭̫̙̥̥̺̳͖͍̟͇̟̰̭͚̲͚̩̗̞̹͈͍̦͇̹͖̙̫̝̙̠͉͈̝͉̺̻̲̺̫͇̳̞̪̼̪̖̞͚͙͚͖̫͕̳͚̤̻̘͇́̎̿́̽̌͗̉͌͆̎̓̆́̈͋̓̌͒͛͊͛̌̾̅́́͌̂̈́͗̐̐͐͛͒͆̏́̌̂͊̆͌͛̅̋̏̄̄̈́̈́̄̓̿̈͂͋̉̈́̓̐̋͋͋̓̏̌̇͐̊̔́̏͛́̿͛̓̚͘̚͘̚͘͘͝͝͠͠͝͝͠͝͝͝ͅO̵̡̨̨̨̧̨̡̡̢̨̳̤̖̪̘̳̗̮̬͍͈̠̪̻̯̩̠̗͓͖͚͎͉̥͓̺͎͖̬̥̰̲̱̰̥̖̩̘̰͔͕͍̲̦̮͔̟̤̤̺̝̺̗̼̙̤̫͕̣̯̱̱̞̻̗̬̦̹̮͈͓͕̭̞̜̪͕̼͙̣͔͇͇̮̯̗͎̲̥͕̜̪̰̮̯̅̿͊̓̑̉̍͑̅̈́̑́̊̋̄̒̃̽͂͊̕͝ͅͅŅ̸̛̟̱̥͙̗͈̰̪̩͕̗̦̭͚̮̤̱͕̼̟̭̗͑̀͊͌̀̔̇̀͑̈́́͑̀̒́̎̂̔̈́̋͒̆̂͌̑̿͑͂̓̊́̏̍̓̀̄̓͗̀̉̓̉̄̀̀̀̀͊͌́͐̿͌͆̀̎̔̇̉̇̄̽̔̀̆̅̓̊́͘̚̕̚͘̚͘̚͜͠͝͠ͅƠ̴̧̧̢̡̡̧̛̞̟̹͚̠͈̱̜͔̗̪̹̤̩͚̝̦̻̖̙̫̙̲̼̦͓̖̰͎̫̣͕̲̙̟͎̱̼̞̝̘͇̻͈̺͚͉͕̳̫͎̗̬̱̈́̉̓̆́̓̍̅͒̀̏̈́̓̏͊̓̀̏͒̌̽̊̑̄̆̓͛̿̆͛̃̀̅̽͒͌͆́͂͋́̃̔͌̈͊͊̇̃̀̈́́̆̂̔̏̈́̉́͂̾͑̚͘̕̕͘͜͝͝͠͠͝͝͝N̴̡̨̨̛̰̙̦͕̱͍͔̘̦͎͙̰̹̜̥̘̗͕͕̬͕̞̱͙̘͔̥͍̯̹̪̣̝̠͈͖̰̝̲̩̱͙̮͉̣̪͓̥̫̣̞̭̮̭̅̏͛̀̓̍͑́͛͒̐̈̀̉̋͆̾̌̇̀́̄̀͆̍̏͌̒͑͆̋̀̀͒͑̒̽̇̕͘̕̕̕͜͝͝͝ͅǪ̵̧̢̨̧̨̢̞͇̘͎͈͇̙͉͔̠͔̜̥̠̹̯͙̩̬̘̫͓̩͔̩̮̮̝̘̙̙̹̯̠͖͉̲͙̟̖̦̮̩̠̬̖̬̱͖̙̦̟̞̺̻̳̯͍̼͙͚̲̙̘̝̰̙̺̮̙͕͈͈̟̹͉̟̞̪̞̞͕̫͇͍̣̲̟̬̩̜͇͇͓̬͎̯͇͍̤͖̰̻͕͇̑̋́͐̈́̓̏͊́́̄̅͋̽̾̌̍̏͆̊͌̈́̌̓͆͛͊̚̚̕̕̚̚̚̕͜͜͜͠͠ͅͅͅͅN̵̨̢̨̧̢̡̨̢̢̛͙̺̗̖̞̱̬̮̬̺̰̖̘̜͎̪̥͇̹̹̫̠̣͉͎̦̘̼̣̯͖̳̹͓̹̞̫̲̖̗͍̳͉̰̯̖͔̰̬̞̗̭͉̱̼̦͖͕̤̦̜̞̮̞͚̻̣̱͒͌̄̅͒̍̓̋̀͐̆́͌̎̊͊͌̂̿̓̓̓̔̅̅̽̏̓̾̋̊̊̈́̿͋͛̎̏̄̇̽͊͐̆͒͐͗͆̈́͐̄̏̆͒̉̀̎̔͆̋̏̅̏͑̋̿̏͘̕͘̕͘͜͝͝͠ͅƠ̶̢̨̡̧̪̗̬̥͓̻̝̱͍̗͕̣͓͎̻͚͔̤̤̩̗̼̠̙̥̹͉̯͖̜̠̠̟̝̤̲͓͇̘̞̳̝̰̩̗̪̟̎̃̈́́̇͆̈́̌͑́̉̾̈́̄̓̎͐̀̍̌͂̾̀̃̾̂̇̐̌̆͒̔̍͛̈́̄̔͌̔̔̎̏́͋̓͐̿̈͊̓̾͐̂̀̐̀́̿̃̇̒̈́̚̚̕͘̕͝N̶̢̡̧̢̨̧̛̛̼̬͔̝̥̟͔̜̮̗̼̤͙͇̣̖̳̺̖̖̺̫̜̻̦͓̣̞͈̰̜̗̗͎̯̘̯̙͔̪͍͈̘̟̞͓̟͇̝̮͔͔̠̩̜̦͔͖͍̝͍̙̼͔͇̗̣͉̞͎̺̜̲̘̏͒̋̇̓̄̾̌̓́̽̉̅͗͂̔̆̏̑̊̒̓̑͆̅̍̾͑͌͐͐̎͒̂̿͐̀̑́̑̈́̄̄͛͂̓̆͛̈̋͆̀̓̈́̊̀̂͂̉̾̀̀͆̃̑̑̿̉̍̌̊̂̉̀̾̿́̎̾̅̒̊͌̏͗̈́̈́̈́̋̈́͑̕͘͘̚͘͘̕̚͜͜͝͠͠͠͠͝͠͝͠͝͠ͅͅÖ̶̧̢̱͙̰̟̬̩̜̟̬͇̮̩̹̲N̵̨̡̡̢̡̡̨̡̨̧̛̜͉͎̯̟͕͖͙̰̺̞͚̞̱̠̮̯̫̪̝͎͉̱͚͇͙͎̜̝̼͚̺̱̦̝̹̲͖̞̦̖̳̣̞̪̰̤̼̹͔̦̩͉͕̘̖̪͈̼̞͕̯̪̳͙̰̠̖̟̖̑̀͌͆͑̈̋̑̆͗͒̏̀́͒̀̔̕͜͜͝͝͠͠ͅȌ̶͖̬̹͍̹̱̙̱̠͍̣̮̫͙̠̭̙̻͙̬̼̬̺͈̽̂͋̽̓̐͛̿̊̈́̉͛̈́̂̿̈́͑̓́̈́̉͒̃͗̊̒̀̍̏͌͋̐̈́͊̓̏͂̒̊̎̉̿̀̈̓̓̇̀̀̿͆̅̓̈́̐̅̔͌͘̚̚͠͠͠͝͝͝ͅN̷̢̧̧̨̡̢̛̛͚̱̥̪͎̱̼̠̪̠̠͚̬̮͚͙̦̦̥̻͕͚̱̮̻̺͙̹̟̲̟̼̮̲̞̞̼͙̺̦͖̦͎̣͇̱͓̠̜̹̤̬̬̯̤̗͍͉̝̬͓̮̙̮̻̯͇̬͈̭͔̠͓͍͈͖͍̲̜̹͍̮̤͇̗͓͍̙̦͓̞͚̺̫͈͉̝̘͕̝͎̙̭͙͛̽́͐͋̃̈́̋̍̾̉̈́̀̽̉͋̌̑̊̃͜͜͜͜ͅͅỜ̸̢̡̡̛̗̺̰̗̮̪͔͑́̈̈́͂̈́̽̾̓͒̄̔̑͒͒͂͗̈́̔͐̌̒̊̉͆̄́̌̒̎̎̿̎̉́͂̏͑͗̀̑͌̂̔̌̾̇̓͑̈́̂̏͋̾̌̈́́̈́̈̏̀͋̃̓̆̈́́͛͊̿͌̎̋̾̍̒̄̓͒͗̏͐͆͌͘̕̚̚͘͘͘̚̚͝͝͝͝͝͠͝N̶̢̡̧̢̨̧̡̛̩̠͔̥̜͍͙͇̙̮̣̠̦̦̪̻͖̺͈͉̮͔̻͇͖͍̜̘͓̹̱̖̻͍̮̺̞̗̙̳̖͉̗̳̘̫̼̫͍̬̮̲̥̣͔̟͕̭̭̤͎͇̞͐̆́̄́̈̒͊͂̋̓́̈́̾̈́̓͆̈́̈́̀͂́́͑̔̒̇̈́̆̾̒͊̐̉̓̑̌̋̍͑̚̕̕͘̕͜͜͜͠͝͝Ơ̴̧̧̨̛͎̤̟̟̗̜̱̺͍̫̱̣̫̩̖̝͍̜̱͈̳̟̞̟͚̼͍͙͔̤̲͙͙̗̪̤͔̩̺̭̮̦̠͔͎̞͗̑̽̇͐̏̆̌̏̾̈́̍̃̂̊́̓̒̍̾̄̂̅̈́̄̌̈́́̎̈͆̀́̃͒̆̾̉̒̓͆̋͐͂̓̀̾̓͂̈́̈́̈́̽̉͑̏̌͐̓̐̾͐͊̈́̑̚̚͘̕̕̕̕̚͘͘͜͠͠͝ͅŅ̷̡̡̧̨̩̠̘̪̩͍̫͓͉̪̻̭̪̩̫̩̘̟̖̜̱͕͍̘̹͇̹͉̮̤̠̣͚͍̪͕̻͎̬̳͇̥̻̤̦̼͍̣̰̩̖̖̳̮̪̩̼͕̘̦̳̑͌͋̈́͒͊́̅́͌̐͋̈́̀̐̽̐̏̾͐͛̕͜͝ͅƠ̷̧̡̢̨̨̢̛̛̛̪̹̩̫͉̝̲͈͎̙̥̱̠̜̣͚̞͚̜̣͎̰̞̫̺͉̥̭̘̦̖͖͕̞̭͉̭̩̣̱͚̘̰̜̘̩͈͕͕̜̖̩̻͍͎̱͔̖̹̙̩̝͕̹̩̗̞̾̋̃̇͊́͛̐́͂̊̇͋̊͋̉͒͑̌̓͑̓̓̀̌́̈́̈̒́͋̓͌͛̌̎̈́̋̈́̈͌̔̄̓͂̈́̿̑̉̒̂͊͋̂̈̍̋͌̓̋͑̒̋͛̒̉́̾͒̐͗͑̎̀̓̀̊͆̽͂̓̈́̂̍̊͗̚͘̕̚̚̕̕̚͜͜͠͝͝͝͠͝͝͝͝͝͠͠ͅƠ̷̡̧̨̛̺̖̼̙̳̹̼͇̖̜̠̦̠͎͓̭̯͉̣͖͔̽̋̔̂̑͌̍̿̅̄͛̒̀̎͒̐̈́́̾̎̎̉̀̌͛̉͒̌̉͑͒̀̈́̓͂̂̔̄͑͌̉͆͌̆̀̒́̆̌̎͗̊̀̔̓̀̚̕̚͘̚͘͜͝͝͠͠͝-',
		'show scene narrator with zoomIn',
		'jump narratorloop',
	]
});