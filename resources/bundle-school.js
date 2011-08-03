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
			property:"teacher1",
			value:{
				font:"small", skipkey:"a", esckey:"b", who: noface,
				scenes:[
					{ speed:1, who:"noone", audio:"beep", asking: {intro: true}, talk:["Aqui sera o lugar que voce vai", "testar os seus conhecimentos e", "aprender respondendo perguntas", "inteligentes!"]},

					{ speed:1, who:"noone", audio:"beep", asking: {intro: true}, talk:["Quando iniciarmos as perguntas", "teremos que ir ate o fim. Se", "voce preferir reponde-las depois", "aperte X, senao aperte Z."]},
					{ speed:1, who:"noone", audio:"beep", asking: {intro: true}, talk:["Muito bem! Entao vamos comecar!"]},

					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual foi o primeiro", "presidente do Brasil?."]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, true, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Campos Sales", "b) Af. Pena", "c) Deo. da Fonseca", "d) Floriano Peix."]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Em que ano foi abolida", "a escravidao no Brasil?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 1887", "b) 1886", "c) 1880", "d) 1859"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual foi o primeiro", "nome dado ao Brasil?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Ilha de Vera Cruz", "b) Terra de Sta. Cruz", "c) Terra dos Papagaios", "d) Pau-Brasil"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual foi a primeira", "capital do Brasil?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Brasilia", "b) Sao Paulo", "c) Rio de Janeiro", "d) Salvador"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual foi a pandemia que", "ficou conhecida na Idade Media?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Peste Negra", "b) Peste de Antonine", "c) Peste de Justiniano", "d) Peste Peloponesa"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Os faraos eram conhecidos", "em qual civilizacao?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Grega", "b) Egipicia", "c) Indiana", "d) Maia"]},

					{ speed:1, who:"noone", audio:"beep", asking: {ending: true}, talk:["Muito bem! Aqui terminamos ", "nossas perguntas. Espero que voce", "tenha descoberto coisa novas!"]}
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
					[  12,  12,  12,  12,  12,  12,  12,  11,  11,  11,   0,   1,   1,   2,  11,  11,  11,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,  10,  10,  10,  10,  10,  10,  10,  10,  10,  10,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,  14,   6,   6,   6,   6,  14,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  12,  12,  12,  12,  12,  12,  12],
					[  12,  12,  12,  12,  12,  12,  12,   6,   6,  14,   6,   6,   6,   6,  14,   6,   6,  12,  12,  12,  12,  12,  12,  12],
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
						maingame.addNpc(350,200,[0],"teacher1","teacherstory",[0,1],true);
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
