
const appAuthor = '[Your Name...]';

let appBodyText = 'This is a Boilerplate App made in ES6 JS, jQuery Mobile, and HTML5.';

let appTitle = 'App Title';

const digiList = {
	baby: [
		{
			url: "index.html#koromon",
			name: "Botamon",
			type: "Free",
			attribute: "Neutral",
			equipSlots: 0,
			memUsed: 2,
			digivolvesTo: [
				{
					becomes: "Wanyamon",
					prereqs: [
						"Level 5"
					],
					url: "index.html#wanyamon"
				},
				{
					becomes: "Koromon",
					prereqs: [
						"Level 3",
						"ATK 15"
					],
					url: "index.html#koromon"
				}
			]
		},
		{
			url: "index.html#kuramon",
			name: "Kuramon",
			type: "Free",
			attribute: "Neutral",
			equipSlots: 0,
			memUsed: 2,
			digivolvesTo: [
				{
					becomes: "Tsumemon",
					prereqs: [
						"Level 5"
					],
					url: "index.html#tsumemon"
				},
				{
					becomes: "Pagumon",
					prereqs: [
						"Level 5"
					],
					url: "index.html#pagumon"
				}
			]
		},
		{
			url: "index.html#pabumon",
			name: "Pabumon",
			type: "Free",
			attribute: "Neutral",
			equipSlots: 0,
			memUsed: 2,
			digivolvesTo: [
				{
					becomes: "Motimon",
					prereqs: [
						"Level 3",
						"DEF 15"
					],
					url: "index.html#motimon"
				},
				{
					becomes: "Tanemon",
					prereqs: [
						"Level 5"
					],
					url: "index.html#tanemon"
				},
				{
					becomes: "Yokomon",
					prereqs: [
						"Level 3",
						"HP 50"
					],
					url: "index.html#yokomon"
				}
			]
		},
		{
			url: "index.html#poyomon",
			name: "Poyomon",
			type: "Free",
			attribute: "Neutral",
			equipSlots: 0,
			memUsed: 2,
			digivolvesTo: [
				{
					becomes: "Bukamon",
					prereqs: [
						"Level 3",
						"INT 15"
					],
					url: "index.html#bukamon"
				},
				{
					becomes: "Tokomon",
					prereqs: [
						"Level 5"
					],
					url: "index.html#tokomon"
				}
			]
		},
		{
			url: "index.html#punimon",
			name: "Punimon",
			type: "Free",
			attribute: "Neutral",
			equipSlots: 0,
			memUsed: 2,
			digivolvesTo: [
				{
					becomes: "Nyaromon",
					prereqs: [
						"Level 3",
						"INT 10"
					],
					url: "index.html#nyaromon"
				},
				{
					becomes: "Tsunomon",
					prereqs: [
						"Level 5"
					],
					url: "index.html#tsunomon"
				}
			]
		}
	],
	inTraining: [
		{
			url: "index.html#bukamon",
			name: "Bukamon",
			type: "Free",
			attribute: "Water",
			equipSlots: 0,
			memUsed: 3,
			skills: [
				{
					skillName: "Hydro Water 1",
					type: "Magic",
					dmg: "55 Water Dmg",
					atkRange: "1 Ememy",
					acc: "95%",
					learnedAtLvl: 5
					
				}
			],
			dedigivolvesTo: [
				{
					becomes: "Poyomon",
					url: "index.html#poyomon"
				}
			],
			digivolvesTo: [
				{
					becomes: "Otamamon",
					prereqs: [
						"Level 5",
						"INT 20"
					],
					url: "index.html#otamamon"
				},
				{
					becomes: "Gomamon",
					prereqs: [
						"Level 8",
						"HP 100",
						"CAM 10%"
					],
					url: "index.html#gomamon"
				},
				{
					becomes: "Syakomon",
					prereqs: [
						"Level 7",
						"DEF 15",
						"INT 20"
					],
					url: "index.html#syakomon"
				},
				{
					becomes: "Betamon",
					prereqs: [
						"Level 8",
						"INT 40"
					],
					url: "index.html#betamon"
				}
			]
		},
		{
			url: "index.html#koromon",
			name: "Koromon",
			type: "Free",
			attribute: "Fire",
			equipSlots: 0,
			memUsed: 3,
			skills: [
				{
					skillName: "Wolkenapalm 1",
					type: "Physical",
					dmg: "65 Fire Dmg",
					atkRange: "1 Ememy",
					acc: "95%",
					learnedAtLvl: 5
					
				}
			],
			dedigivolvesTo: [
				{
					becomes: "Botamon",
					url: "index.html#botamon"
				}
			],
			digivolvesTo: [
				{
					becomes: "Agumon",
					prereqs: [
						"Level 9",
						"ATK 30",
						"CAM 10%"
					],
					url: "index.html#agumon"
				},
				{
					becomes: "Hackmon",
					prereqs: [
						"Level 9",
						"ATK 20",
						"ABI 20",
						"Steel Will (Item)"
					],
					url: "index.html#hackmon"
				},
				{
					becomes: "Guilmon",
					prereqs: [
						"Level 7",
						"ATK 30",
						"SPD 20"
					],
					url: "index.html#guilmon"
				},
				{
					becomes: "ToyAgumon",
					prereqs: [
						"Level 8",
						"HP 75",
						"DEF 20"
					],
					url: "index.html#toyagumon"
				}
			]
		},
		{
			url: "index.html#motimon",
			name: "Motimon",
			type: "Free",
			attribute: "Neutral",
			equipSlots: 0,
			memUsed: 3,
			skills: [
				{
					skillName: "Power Energy 1",
					type: "Magic",
					dmg: "60 Neutral Dmg",
					atkRange: "1 Ememy",
					acc: "95%",
					learnedAtLvl: 5
					
				}
			],
			dedigivolvesTo: [
				{
					becomes: "Pabumon",
					url: "index.html#pabumon"
				}
			],
			digivolvesTo: [
				{
					becomes: "Gotsumon",
					prereqs: [
						"Level 8",
						"DEF 30"
					],
					url: "index.html#gotsumon"
				},
				{
					becomes: "Hagurumon",
					prereqs: [
						"Level 7",
						"HP 75",
						"DEF 30"
					],
					url: "index.html#hagurumon"
				},
				{
					becomes: "Tentomon",
					prereqs: [
						"Level 9",
						"DEF 20",
						"CAM 10%"
					],
					url: "index.html#tentomon"
				},
				{
					becomes: "Solarmon",
					prereqs: [
						"Level 6",
						"HP 75",
						"DEF 25"
					],
					url: "index.html#solarmon"
				}
			]
		}
	]
};

module.exports = {
	appAuthor: appAuthor,
	appBodyText: appBodyText,
	appTitle: appTitle,
	digiList: digiList
};