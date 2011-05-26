{
	// Map BGM
	addAudio:[
		["map-bgm",[audioserver+"cave.mp3",audioserver+"cave.ogg"],{channel:"bgmusic",loop:true}],
	],
	// Map graphics
	addImage:[
		["tiles","resources/gfx-cave.png"],
	],
	// Map Tileset
	addTiles:[
		{id:"tiles",image:"tiles",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:0},
	],
	setObject:[
		// Dialogues on this map
		{
			object:"dialogues",
			property:"oldman",
			value:{
				font:"small", skipkey:"a", esckey:"b", who: noface,
				scenes:[
					{ speed:1, who:"noone", audio:"beep", talk:["Oh no... no...","Not again!"]},
					{ speed:1, who:"noone", audio:"beep", talk:["They tricked you too!","There isn't any monster here...","70 years ago the villagers sent me","here saying that I was the hero","of the legend..."]},
					{ speed:1, who:"noone", audio:"beep", talk:["But all I've found here was a bunch","of bones...","I'm sure that was who was sent here","before me!"]},
					{ speed:1, who:"noone", audio:"beep", talk:["So now... is your turn! You'll get","old here all alone and die!","I'm really sorry but is true.","There isn't any way to go out...","Poor guy!"]},
				]
			}

		// Map data and actions
		},{
			object:"tilemaps",
			property:"map",
			value:{
				tileset:"tiles",
				map:[
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  10,  10,  10,  10,  10,  10,  10,  10,  10,  10,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   6,   6,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   6,   6,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   6,   6,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   6,   6,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   6,   6,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   6,   6,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   6,   6,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   5,   5,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  12]
				  ],
				 addObjects:function() {
					if (!tilemaps.queststatus["oldmanstory"]) {
						gbox.playAudio("map-bgm");
						maingame.addNpc(350,200,[2],"oldman","oldmanstory",[2,3],true);
					}
				 },
				 mapActions:function() {
					var pl=gbox.getObject("player","player");
					var ontile=help.getTileInMap(pl.x+pl.colx+pl.colhw,pl.y+pl.coly+pl.colhh,tilemaps.map,tilemaps._defaultblock,"map");
					if (ontile==5) maingame.gotoLevel({level:"begin",x:330,y:90,label:"Vila do aprendizado"});
				 },
				tileIsSolid:function(obj,t){ return (t>9) } // Bullets flies over the pits.
			}
		}
	]
}
