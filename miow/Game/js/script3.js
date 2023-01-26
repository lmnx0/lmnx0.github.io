monogatari.script ({
    //Girl
	'Girl': [
		'stop music mainmenu2 with fade 2',
		'play music normal with fade 2 loop volume 25',
		'show scene #ffffff with fadeIn duration 2s',
		'show scene bedroom with fadeIn duration 4s',
		'wait 3000',
		'show character h normalZoomed at center with fadeIn duration 2s',
		'h Good morning! Wake up now my {{player.name}}...',
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 60000,
					// The function to run when the time is over
					callback: () => {
						//Click the "tookTooLongG" button.
						monogatari.element().find('[data-choice="tookTooLongG"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Option1g': {
					'Text': 'Good morning too.',
					'Do': 'jump Option1g',
                    'Class': 'girlButton',
				},
				'Option2g': {
					'Text': 'Why are you here?',
					'Do': 'jump Option2g',
                    'Class': 'girlButton',
				},
				'Option3g': {
					'Text': 'Only if you give me a good morning kiss.',
					'Do': 'jump Option3g',
                    'Class': 'girlButton',
				},
				'tookTooLongG':{
					'Text': 'tookTooLongG',
					'Do': 'jump tookTooLongG',
					'Class': 'invisible',
				},
			}
		},
	],

	'Option1g': [
		"M Good morning too.",
		'show character h normalZoomed at center',
		"h You're so cute!",
		'jump normalConvog1',
	],

	'Option2g': [
		"M Why are you here?",
		'show character h angryZoomed at center with headShake',
		"h Because I'm your girlfriend.",
		'jump normalConvog1',
	],

	'Option3g': [
		"M Only if you give me a good morning kiss.",
		'show character h flusteredZoomed at center with headShake',
		"h H..Hey! stop messing with me!!",
		'jump normalConvog1',
	],

	'tookTooLongG': [
		'show character h angryZoomed at center with wobble',
		"h This will be your last sleep if you don't wake up right now!!!",
		'jump normalConvog1'
	],

	'normalConvog1': [
		'show character h normalZoomed at center',
		"h Anyways, did you forget our plan for today?",
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 60000,
					// The function to run when the time is over
					callback: () => {
						//Click the "tookTooLongG" button.
						monogatari.element().find('[data-choice="tookTooLongG2"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Option4g': {
					'Text': 'Huh..? We have a plan for today?',
					'Do': 'jump Option4g',
                    'Class': 'girlButton',
				},
				'Option5g': {
					'Text': 'Of course not, today is our first date together.',
					'Do': 'jump Option5g',
                    'Class': 'girlButton',
				},
				'Option6g': {
					'Text': 'Our Anniversary.',
					'Do': 'jump Option6g',
                    'Class': 'girlButton',
				},
				'tookTooLongG2': {
					'Text': 'tookTooLongG2',
					'Do': 'jump tookTooLongG2',
					'Class': 'invisible',
				},
			}
		},
	],

	'Option4g': [
		"M Huh..? We have a plan for today?",
		'show character h angryZoomed at center with headShake',
		"h Ehh, did you hit your head while sleeping?!",
		'jump normalConvog2',
	],

	'Option5g': [
		"M Of course not, today is our first date together.",
		'show character h flustered2Zoomed at center',
		"h Hehe that's right!",
		'jump normalConvog2',
	],

	'Option6g': [
		"M Our Anniversary.",
		"h We've only been together since yesterday, but hehe, don't worry, we will have that too in the future!",
		'jump normalConvog2',
	],

	'tookTooLongG2': [
		'show character h angryZoomed at center with wobble',
		'h Did you seriously go back to sleep?!!',
		'jump normalConvog2',
	],

	'normalConvog2': [
		'show character h flustered2Zoomed at center',
		"h Ah, I've been waiting for this day, our first date together!",
		'show character h normalZoomed at center',
		"h Oh, and go get ready now! I'll be waiting outside.",
		'jump readyingfordateG',
	],

	'readyingfordateG': [
		'hide character h',
		'show scene #ffffff with fadeIn duration 2s',
		'play sound shower volume 20',
		"You went to the bathroom to shower.",
		'stop sound shower',
		'play sound cloth volume 60',
		"You wore your best outfit.",
		'stop sound cloth',
		'play sound door volume 50',
		"You then went outside your house.",
		'stop sound door',
		'jump normalConvog3',
	],

	'normalConvog3': [
		'stop music normal with fade 2',
		'play music romantic3 with fade 10 volume 25',
		'show character h surprised at center with bounceInRight',
		"h Woahh.. You.. You look so.. perfect...",
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 60000,
					// The function to run when the time is over
					callback: () => {
						//Click the "tookTooLongG" button.
						monogatari.element().find('[data-choice="tookTooLongG3"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Option7g': {
					'Text': 'Thank you, my love.',
					'Do': 'jump Option7g',
                    'Class': 'girlButton',
				},
				'Option8g': {
					'Text': 'Says the one who has an angelic appearance.',
					'Do': 'jump Option8g',
                    'Class': 'girlButton',
				},
				'tookTooLongG3': {
					'Text': 'tookTooLongG',
					'Do': 'jump tookTooLongG3',
					'Class': 'invisible',
				},
			}
		},
	],

	'Option7g': [
		'M Thank you, my love.',
		'show character h flustered at center with shakeX',
		"h ...",
		'jump normalConvog4',
	],

	'Option8g': [
		'M Says the one who has an angelic appearance.',
		'show character h flustered at center with shakeX',
		"h Ehh!?!!? S..Stop it.. I mean don't but uhh..",
		'jump normalConvog4',
	],

	'tookTooLongG3': [
		'show character h angry at center with wobble',
		"h Ahh.. You're so perfect that I want to eat you now.",
		'jump normalConvog4',
	],

	'normalConvog4': [
		'show character h flustered2',
		'M Well, shall we go?',
		"h Mhm.",
		'show character h flustered2 at center end fadeOutLeftBig duration 2s',
		'centered TO BE CONTINUED.',
		'end',
	],
})