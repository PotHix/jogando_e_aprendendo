{
	//addAudio:[
	//	["map-bgm",[audioserver+"village.mp3",audioserver+"village.ogg"],{channel:"bgmusic",loop:true}],
	//],
	addImage:[
		["tiles","resources/village.png"],
	],
	addTiles:[
		{id:"tiles",image:"tiles",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:0},
	],
	setObject:[
		{
			object:"dialogues",
			property:"npc",
			value:{
				font:"small", skipkey:"a", esckey:"b", who: noface,
				scenes:[
					{ speed:1, who:"noone", audio:"beep", talk:["Bom dia! Se esta interessado em","testar seus conhecimentos e","aprender novas coisas, siga para ", "a sala de aula logo acima."]},
					{ speed:1, who:"noone", audio:"beep", talk:["Espero que tenha se preparado","pois assim voce vai aproveitar","melhor as perguntas e testar", "seus conhecimentos."]}
				]
			}
		},{
			object:"dialogues",
			property:"intro",
				value:{ font:"smalltut", skipkey:"a", esckey:"b", who: noface,
				scenes:[
					{ speed:1, who:"noone", audio:"beep", talk:["Seja bem vindo a vila do ","aprendizado. Aqui voce vai","conhecer novos amigos e", "aprender se divertindo."]}
				]
			}
		},{
			object:"tilemaps",
			property:"map",
			value:{
				title:"Vila do aprendizado",
				tileset:"tiles",
				map:[
					[  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13],
					[  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  14,   2,  14,  13,  13,  13],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,  15,   1,  15,  12,  12,  12],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10,  11],
					[   0,   0,   0,   0,  10,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10],
					[   0,   0,   0,  11,  11,  11,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,  11,  11,   0,   0,   0,   0,   0,  11,  11,   0,   0,   0,   0],
					[   0,   0,   0,  10,   0,   0,   0,   0,   0,   0,   0,  11,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
				],
				playerSpawnX:40,
				playerSpawnY:180,
				addObjects:function() {
					gbox.playAudio("map-bgm");
					maingame.addBlock(360,150,"house",0);
					maingame.addNpc(150,180,[2],"npc",null,[2,3]);
				},
				mapActions:function() {
					var pl=gbox.getObject("player","player");
					var ontile=help.getTileInMap(pl.x+pl.colx+pl.colhw,pl.y+pl.coly+pl.colhh,tilemaps.map,tilemaps._defaultblock,"map");
					if (ontile==1) maingame.gotoLevel({level:"school",x:200,y:510,label:"Sala de aula"});
				},
				tileIsSolid:function(obj,t){ return (t>9) }
			}
		}
	]
}
