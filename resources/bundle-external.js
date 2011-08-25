{
	//addAudio:[
	//	["map-bgm",[audioserver+"village.mp3",audioserver+"village.ogg"],{channel:"bgmusic",loop:true}],
	//],
	addImage:[
		["tiles","resources/village.png"],
	],
	addTiles:[
		{id:"tiles",image:"tiles",tileh:30,tilew:30,tilerow:20,gapx:0,gapy:0},
	],
	setObject:[
		{
			object:"dialogues",
			property:"npc",
			value:{
				font:"small", skipkey:"a", esckey:"b", who: noface,
				scenes:[
					{ speed:1, who:"noone", audio:"beep", talk:["Bom dia! Se esta interessado em","testar seus conhecimentos e","aprender novas coisas, siga para ", "a escola logo acima."]},
					{ speed:1, who:"noone", audio:"beep", talk:["Espero que tenha se preparado","pois assim voce vai aproveitar","melhor as perguntas e testar", "seus conhecimentos."]}
				]
			}
		},{
			object:"dialogues",
			property:"intro",
				value:{ font:"smalltut", skipkey:"a", who: noface,
				scenes:[
					{ speed:1, who:"noone", audio:"beep", talk:["Seja bem vindo a vila do aprendizado.","Utilize X para iniciar um dialogo, ", "e Z para prosseguir. E bons estudos!"]}
				]
			}
		},{
			object:"tilemaps",
			property:"map",
			value:{
				title:"Vila do aprendizado",
				tileset:"tiles",
				map:[
					[  23,  23,  23,  23,  23,  23,  23,  23,  23,  23,  23,  23,  23,  23,  23,  23],
					[  23,  23,  23,  23,  23,  23,  23,  23,  23,  23,  24,   2,  24,  23,  23,  23],
					[  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  25,   1,  25,  22,  22,  22],
					[  20,  20,  20,  21,   0,   0,   0,   0,   0,   0,  21,   0,  21,   0,   0,   0],
					[   0,   0,   0,  21,   0,   0,   0,   0,   0,   0,  21,   0,  21,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   4,   4,   4,   4,   4,   4,   4,   4,   4,   4,   4,  30,   4,   4,   4,   4],
					[   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5,   5],
					[   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6],
				],
				playerSpawnX:40,
				playerSpawnY:180,
				addObjects:function() {
					gbox.playAudio("map-bgm");
					maingame.addBlock(0,60,"house",0);
					maingame.addNpc("teachers1",33,140,[2],"npc",null,[2,3]);
				},
				mapActions:function() {
					var pl=gbox.getObject("player","player");
					var ontile=help.getTileInMap(pl.x+pl.colx+pl.colhw,pl.y+pl.coly+pl.colhh,tilemaps.map,tilemaps._defaultblock,"map");
					if (ontile==1) maingame.gotoLevel({level:"school",x:200,y:510,label:"Escola"});
				},
				tileIsSolid:function(obj,t){ return (t>19) }
			}
		}
	]
}
