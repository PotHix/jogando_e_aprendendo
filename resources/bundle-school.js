{
	//addAudio:[
	//	["map-bgm",[audioserver+"cave.mp3",audioserver+"cave.ogg"],{channel:"bgmusic",loop:true}],
	//],
	addImage:[
		["tiles","resources/school.png"]
	],
	addTiles:[
		{id:"tiles",image:"tiles",tileh:30,tilew:30,tilerow:20,gapx:0,gapy:0}
	],
	setObject:[
		{
			object:"dialogues",
			property:"history",
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
			object:"dialogues",
			property:"math",
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
			object:"dialogues",
			property:"portuguese",
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
			object:"dialogues",
			property:"science",
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
			object:"dialogues",
			property:"geography",
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
					[22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22],
					[22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22],
					[22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22],
					[22,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22],
					[22,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22],
					[22,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22],
					[22,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22],
					[22,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22],
					[22,  22,  21,  21,  21,  21,   6,   6,  21,  21,  21,  21,  21,  21,  21,  21,   6,   6,  21,  21,  21,  21,  21,  21,  21,  21,   6,   6,  21,  21,  21,  21,  21,  21,  21,  21,   6,   6,  21,  21,  21,  21,  21,  21,  21,  21,   6,   6,  21,  21,  21,  22,  22],
					[22,  22,  20,  20,  20,  20,   6,   6,  20,  20,  20,  20,  20,  20,  20,  20,   6,   6,  20,  20,  20,  20,  20,  20,  20,  20,   6,   6,  20,  20,  20,  20,  20,  20,  20,  20,   6,   6,  20,  20,  20,  20,  20,  20,  20,  20,   6,   6,  20,  20,  20,  22,  22],
					[22,  22,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22],
					[22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22],
					[22,  22,  22,  22,  22,  22,   5,   5,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22,  22]
				],
				addObjects:function() {
					if (!tilemaps.queststatus["teacherstory"]) {
						gbox.playAudio("map-bgm");
						maingame.addNpc("teachers1",200, 150,[0],"history","teacherstory",[0,1],true);
						maingame.addNpc("teachers1",500, 150,[4],"math","teacherstory",[4,5],true);
						maingame.addNpc("teachers1",800, 150,[6],"portuguese","teacherstory",[6,7],true);
						maingame.addNpc("teachers1",1100,150,[8],"geography","teacherstory",[8,9],true);
						maingame.addNpc("teachers2",1400,150,[8],"science","teacherstory",[8,9],true);
					}
				},
				mapActions:function() {
					var pl=gbox.getObject("player","player");
					var ontile=help.getTileInMap(pl.x+pl.colx+pl.colhw,pl.y+pl.coly+pl.colhh,tilemaps.map,tilemaps._defaultblock,"map");
					if (ontile==5) maingame.gotoLevel({level:"external",x:330,y:90,label:"Vila do aprendizado"});
				},
				tileIsSolid:function(obj,t){ return (t>19) }
			}
		}
	]
}
