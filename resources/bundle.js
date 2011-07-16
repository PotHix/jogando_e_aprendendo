{
	// Graphic resources.
	addImage:[
		["logo","resources/logo.png"],
		["sprites","resources/cels.png"],
		["font","resources/font.png"],
		["fontbig","resources/fontbig.png"]
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:0},
		{id:"smalltut",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:24},
		{id:"big",image:"fontbig",firstletter:" ",tileh:16,tilew:8,tilerow:255,gapx:0,gapy:0},
	],
	addTiles:[
		{id:"player",image:"sprites",tileh:30,tilew:30,tilerow:12,gapx:0,gapy:0},

		{id:"lefthit",image:"sprites",tileh:40,tilew:20,tilerow:4,gapx:0,gapy:30},
		{id:"uphit",image:"sprites",tileh:20,tilew:40,tilerow:4,gapx:0,gapy:70},
		{id:"foe1",image:"sprites",tileh:30,tilew:30,tilerow:12,gapx:0,gapy:90},
		{id:"shadows",image:"sprites",tileh:15,tilew:30,tilerow:12,gapx:0,gapy:210},
		{id:"bonus",image:"sprites",tileh:20,tilew:20,tilerow:12,gapx:0,gapy:135},
		{id:"hud",image:"sprites",tileh:20,tilew:20,tilerow:9,gapx:240,gapy:135},

		{id:"flame-white",image:"sprites",tileh:30,tilew:30,tilerow:4,gapx:0,gapy:155},
		{id:"flame-blue",image:"sprites",tileh:30,tilew:30,tilerow:4,gapx:120,gapy:155},
		{id:"flame-red",image:"sprites",tileh:30,tilew:30,tilerow:4,gapx:240,gapy:155},

		{id:"bullet-black",image:"sprites",tileh:15,tilew:15,tilerow:1,gapx:0,gapy:185},

		{id:"door",image:"sprites",tileh:90,tilew:60,tilerow:1,gapx:0,gapy:200},
		{id:"doorv",image:"sprites",tileh:90,tilew:30,tilerow:1,gapx:60,gapy:200},

		{id:"chest",image:"sprites",tileh:30,tilew:30,tilerow:1,gapx:0,gapy:290},

		{id:"leftarrow",image:"sprites",tileh:12,tilew:30,tilerow:2,gapx:0,gapy:320},
		{id:"uparrow",image:"sprites",tileh:30,tilew:12,tilerow:2,gapx:0,gapy:332},

		{id:"items",image:"sprites",tileh:20,tilew:20,tilerow:2,gapx:0,gapy:362},
		{id:"npc",image:"sprites",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:382},

		{id:"house",image:"sprites",tileh:90,tilew:90,tilerow:1,gapx:0,gapy:412}
	]
}
