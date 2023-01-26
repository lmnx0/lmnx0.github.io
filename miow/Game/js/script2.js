monogatari.script ({
    //Boy
	'Boy': [
		'stop music mainmenu2 with fade 2',
		'play music normal with fade 2 loop volume 25',
		'show scene #ffffff with fadeIn duration 2s',
		'show scene bedroom with fadeIn duration 4s',
		'wait 3000',
		'show character H normalZoomed at center with fadeIn duration 2s',
		'play voice goodmorningB',
		'H Good morning! Wake up now my {{player.name}}...',
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 60000,
					// The function to run when the time is over
					callback: () => {
						//Click the "tookTooLong" button.
						monogatari.element().find('[data-choice="tookTooLongB"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Option1b': {
					'Text': 'Good morning too.',
					'Do': 'jump Option1b',
                    'Class': 'boyButton',
				},
				'Option2b': {
					'Text': 'Why are you here?',
					'Do': 'jump Option2b',
                    'Class': 'boyButton',
				},
				'Option3b': {
					'Text': 'Only if you give me a good morning kiss.',
					'Do': 'jump Option3b',
                    'Class': 'boyButton',
				},
				'tookTooLongB':{
					'Text': 'TookTooLong',
					'Do': 'jump tookTooLong',
					'Class': 'invisible',
				},
			}
		},
	],

	'Option1b': [
		"M Good morning too.",
		'show character H normalZoomed at center',
		'play voice iloveyoursleepyvoice',
		"H I love your sleepy voice.",
		'jump normalConvob1',
	],

	'Option2b': [
		"M Why are you here?",
		'show character H angryZoomed at center with headShake',
		'play voice becauseimyourboyfriend',
		"H Because I'm your boyfriend.",
		'jump normalConvob1',
	],

	'Option3b': [
		"M Only if you give me a good morning kiss.",
		'show character H flusteredZoomed at center with headShake',
		'play voice stopmessingwithme',
		"H H..Hey! stop messing with me!!",
		'jump normalConvob1',
	],

	'tookTooLongB': [
		'show character H angryZoomed at center with wobble',
		"H This will be your last sleep if you don't wake up right now!!!",
		'play voice thiswillbeyourlastleep',
		'jump normalConvob1'
	],

	'normalConvob1': [
		'show character H normalZoomed at center',
		'play voice anyways',
		"H Anyways, did you forget our plan for today?",
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 60000,
					// The function to run when the time is over
					callback: () => {
						//Click the "tookTooLong" button.
						monogatari.element().find('[data-choice="tookTooLongB2"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Option4b': {
					'Text': 'Huh..? We have a plan for today?',
					'Do': 'jump Option4b',
                    'Class': 'boyButton',
				},
				'Option5b': {
					'Text': 'Of course not, today is our first date together.',
					'Do': 'jump Option5b',
                    'Class': 'boyButton',
				},
				'Option6b': {
					'Text': 'Our Anniversary.',
					'Do': 'jump Option6b',
                    'Class': 'boyButton',
				},
				'tookTooLongB2': {
					'Text': 'TookTooLong',
					'Do': 'jump tookTooLongB2',
					'Class': 'invisible',
				},
			}
		},
	],

	'Option4b': [
		"M Huh..? We have a plan for today?",
		'show character H angryZoomed at center with headShake',
		'play voice didyouhityourhead',
		"H Ehh, did you hit your head while sleeping?!",
		'jump normalConvob2',
	],

	'Option5b': [
		"M Of course not, today is our first date together.",
		'show character H flustered2Zoomed at center',
		'play voice thatsright',
		"H Hehe that's right!",
		'jump normalConvob2',
	],

	'Option6b': [
		"M Our Anniversary.",
		'play voice weveonlybeentogether',
		"H We've only been together since yesterday, but hehe, don't worry, we will have that too in the future!",
		'jump normalConvob2',
	],

	'tookTooLongB2': [
		'show character H angryZoomed at center with wobble',
		'play voice didyouseriously',
		'H Did you seriously go back to sleep?!!',
		'jump normalConvob2',
	],

	'normalConvob2': [
		'show character H flustered2Zoomed at center',
		'play voice ahivebeenwaiting',
		"H Ah, I've been waiting for this day, our first date together!",
		'show character H normalZoomed at center',
		'play voice ohgogetreadynow',
		"H Oh, and go get ready now! I'll be waiting outside.",
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 10000,
					// The function to run when the time is over
					callback: () => {
						//Click the "tookTooLong" button.
						monogatari.element().find('[data-choice="tookTooLongB2.1"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Option4.1b': {
					'Text': 'Alright.',
					'Do': 'jump readyingfordateB',
					'Class': 'boyButton'
				},
				'tookTooLongB2.1': {
					'Text': 'tookTooLong',
					'Do': 'jump tookTooLongB2.1',
					'Class': 'invisible',
				},
			}
		},
	],

	'readyingfordateB': [
		'hide character H',
		'show scene shower with fadeIn duration 2s',
		'play sound shower volume 20',
		"You went to the bathroom to shower.",
		'stop sound shower',
		'play sound cloth volume 60',
		"You wore your best outfit.",
		'stop sound cloth',
		'play sound door volume 50',
		"You then went outside your house.",
		'stop sound door',
		'jump normalConvob3',
	],

	'tookTooLongB2.1': [
		'show character H angryZoomed with headShake',
		'wait 1000',
		'play voice wentbacktosleep',
		'H Oh you went back to sleep? How stubborn.',
		'play voice thenillputyoutosleep',
		"H Then I'll let you sleep now... for the rest of your life.",
		'show scene #000000 with fade out duration 5s',
		'centered YOU DIED.',
		'end'
	],

	'normalConvob3': [
		'stop music normal with fade 2',
		'play music romantic3 with fade 10 volume 25',
		'show scene outsidehouse with fadeIn duration 2s',
		'show character H flustered2 at center with bounceInRight',
		'play voice woahyoulooksoperfect',
		"H Woahh.. You.. You look so.. perfect...",
		{
			'Choice': {
				'Timer': {
					// Time in milliseconds 
					time: 60000,
					// The function to run when the time is over
					callback: () => {
						//Click the "tookTooLong" button.
						monogatari.element().find('[data-choice="tookTooLongB3"]').get(0).click();
						
				// Promise friendly!
						return Promise.resolve ();
					}
				},
				'Option7b': {
					'Text': 'Thank you, my love.',
					'Do': 'jump Option7b',
                    'Class': 'boyButton',
				},
				'Option8b': {
					'Text': 'Says the one who has an angelic appearance.',
					'Do': 'jump Option8b',
                    'Class': 'boyButton',
				},
				'tookTooLongB3': {
					'Text': 'TookTooLong',
					'Do': 'jump tookTooLongB3',
					'Class': 'invisible',
				},
			}
		},
	],

	'Option7b': [
		'M Thank you, my love.',
		'show character H flustered at center with shakeX',
		"H ...",
		'jump normalConvob4',
	],

	'Option8b': [
		'M Says the one who has an angelic appearance.',
		'show character H flustered at center with shakeX',
		'play voice ehhstopitimeandontbutuh',
		"H Ehh!?!!? S..Stop it.. I mean don't but uhh..",
		'jump normalConvob4',
	],

	'tookTooLongB3': [
		'show character H angry at center with wobble',
		'play voice ahhyouresoperfect',
		"H Ahh.. You're so perfect that I want to eat you now.",
		'jump normalConvob4',
	],

	'normalConvob4': [
		'show character H flustered2',
		'M Well, shall we go?',
		'play voice mhm',
		"H Mhm.",
		'show character H flustered2 at center end fadeOutLeftBig duration 2s',
		'centered TO BE CONTINUED.',
		'end',
	],
})