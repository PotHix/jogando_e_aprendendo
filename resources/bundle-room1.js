{
	//addAudio:[
	//	["map-bgm",[audioserver+"cave.mp3",audioserver+"cave.ogg"],{channel:"bgmusic",loop:true}],
	//],
	addImage:[
		["tiles","resources/school.png"]
	],
	addTiles:[
		{id:"tiles",image:"tiles",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:0}
	],
	setObject:[
		{
			object:"dialogues",
			property:"teacher",
			value:{
				font:"small", skipkey:"a", esckey:"b", who: noface,
				scenes:[
					{ speed:1, who:"noone", audio:"beep", challenge:{
						intro:[
							"Aqui sera o lugar que voce vai",
							"testar os seus conhecimentos e",
							"aprender respondendo perguntas",
							"inteligentes! Vamos comecar!"
						],
						asking:[{
							options:["a)", false, "b)", true, "c)", false, "d)", false],
							question:[
								"Depois de gastar a metade de sua",
								"de sua mesada, restou 27 reais.",
								"Qual o valor da mesada?"
							],
							answers:[
								"a) 64 reais",
								"b) 54 reais",
								"c) 50 reais",
								"d) 46 reais"
							]},{
							options:["a)", true, "b)", false, "c)", false, "d)", false],
							question:[
								"Um tijolo pesa um quilo mais",
								"meio quilo. Quanto pesa",
								"um tijolo e meio?"
							],
							answers:[
								"a) um kilo e meio",
								"b) dois kilos",
								"c) tres kilos",
								"d) um kilo"
							]
						}]
				   }}
				]
			}
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
					if (!tilemaps.queststatus["teacherstory"]) {
						gbox.playAudio("map-bgm");
						maingame.addNpc(350,200,[0],"teacher","teacherstory",[0,1],true);
					}
				},
				mapActions:function() {
					var pl=gbox.getObject("player","player");
					var ontile=help.getTileInMap(pl.x+pl.colx+pl.colhw,pl.y+pl.coly+pl.colhh,tilemaps.map,tilemaps._defaultblock,"map");
					if (ontile==5) maingame.gotoLevel({level:"external",x:330,y:90,label:"Vila do aprendizado"});
				},
				tileIsSolid:function(obj,t){ return (t>9) }
			}
		}
	]
}
