{
	// Graphic resources.
	addImage:[
		["logo","resources/logo.png"],
		["sprites","resources/main_sprite.png"],
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
		{id:"hud",image:"sprites",tileh:20,tilew:20,tilerow:9,gapx:240,gapy:135},

		{id:"teachers1",image:"sprites",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:270},
		{id:"teachers2",image:"sprites",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:300},

		{id:"shadows",image:"sprites",tileh:15,tilew:30,tilerow:12,gapx:360,gapy:45},
		{id:"chest",image:"sprites",tileh:30,tilew:30,tilerow:1,gapx:360,gapy:60},
		{id:"house",image:"sprites",tileh:90,tilew:90,tilerow:1,gapx:270,gapy:0}
	]
}
