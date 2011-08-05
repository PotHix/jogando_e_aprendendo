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
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Quais destas invencoes", "foram criadas pelos Egipcios?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) irrigacao", "b) seda", "c) polvora", "d) alianca"]},
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
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Depois de gastar a metade de sua", "de sua mesada, restou 27 reais.", "Qual o valor da mesada?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 64 reais", "b) 54 reais", "c) 50 reais", "d) 46 reais"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Pegue 2 de macas.", "Quantas voce tem agora?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 1", "b) 2", "c) 3", "d) 0"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Quais sao os numeros naturais?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) I", "b) J", "c) N", "d) Z"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["A raiz quadrada de um numero", "existe em qual conjunto?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Racionais", "b) Naturais", "c) Irracionais", "d) Reais"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual das sequencias abaixo", "apresenta o numero primo?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 1 ,5, 11, 19, 31", "b) 3, 5 ,13, 19, 37", "c) 2 ,5 ,7 ,9, 19", "d) 2, 23, 29, 33, 37"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e a raiz quadrada", "de 25 (vinte e cinco)?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 2.5", "b) 5", "c) 10", "d) 100"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Que numero multiplicado por", "ele mesmo da 9?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, true, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 2", "b) 4", "c) 3", "d) 3.5"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e o resultado", "dessa expressao:?","10+10-10-5+5?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 5", "b) 10", "c) 15", "d) 25"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Se meio quilo de carne custa 5 reais,", "quanto custara dois quilos?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 20", "b) 10", "c) 5", "d) 15"]},
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
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Atilho serve para coletivo de que?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) gaivotas", "b) borboletas", "c) selos", "d) espiga de milho"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Indique o substantivo que", "admite dois plurais?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) desvao", "b) verao", "c) demao", "d) irmao"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Uma das palavras abaixo", "nao e um adjetivo:"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, true, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) fortificado", "b) fortuito", "c) fosforo", "d) forrado"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Uma das palavras abaixo", "nao e um substantivo:"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) momento", "b) mensagem", "c) memorando", "d) mensageiro"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Quantos fonemas tem", "a palavra Hoje?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 3", "b) 4", "c) 2", "d) 1"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e o encontro", "da palavra Tambem?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, true, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) hiato", "b) tritongo", "c) ditongo", "d) nenhum"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qualidade de timido:"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) timidez", "b) so", "c) solidao", "d) sozinho"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Conjunto de livros:"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) biblioteca", "b) estante", "c) arcevo", "d) enciclopedia"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Antonimo de bonito:"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) agradavel", "b) bonito", "c) horroroso", "d) cheiroso"]},
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
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["O HIV e um?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) virus", "b) bacteria", "c) passaro", "d) celula"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Quantos planetas consituem", "o sistema solar?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 5", "b) 9", "c) 7", "d) 8"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Uma crianca nasce", "com quantos ossos?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 350", "b) 352", "c) 225", "d) 206"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["A atmosfera terrestre", "poussi quantas camadas?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, true, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 5", "b) 7", "c) 4", "d) 2"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Nome do aumento da temperatua", "do planeta Terra?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Efeito Climatico", "b) Efeito Estufa", "c) Efeito Gormetral", "d) El Nino"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Responsavel por queda de", "temperatura ou chuvas?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Frente Quente", "b) Frente Continental", "c) Frente Tropical", "d) Frente Fria"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e o planeta mais", "proximo do Sol?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Mercurio", "b) Marte", "c) Venus", "d) Jupiter"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e a materia-prima da borracha?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Carvao", "b) Latex", "c) Seringal", "d) Petroleo"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["O astro rei e:"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Terra", "b) Sol", "c) Lua", "d) Jupiter"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e o satelite", "natural da Terra?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Marte", "b) Lua", "c) Uranio", "d) Plutao"]},
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
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual continente esta", "localizado ao sul da Europa?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Africa", "b) Asia", "c) Oceania", "d) America"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual a linha maginaria", "que atravessa o Brasil?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Trop. Capricornio", "b) Circulo Polar Artico", "c) Trop. de Cancer", "d) Equador"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e o oceano que", "banha o Brasil?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Atlantico", "b) Pacifico", "c) Indico", "d) Polar Artico"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Atualmente, qual e o pais", "mais populoso do mundo?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, true, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Japao", "b) China", "c) India", "d) Russia"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Sua capital e Toquio:"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, true, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Cor. do Sul", "b) China", "c) Japao", "d) Cor. do Norte"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual desses paises nao fazem", "fronteira com o Brasil?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Chile", "b) Guiana", "c) Bolivia", "d) Venezuela"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e a maior cidade do Brasil?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Curitiba", "b) Recife", "c) Rio de Janeiro", "d) Sao Paulo"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["O Brasil e dividido em", "quantas regioes?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, true, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 3", "b) 6", "c) 5", "d) 4"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e o menor estado brasileiro?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[true, false, false, false], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) Sergipe", "b) Alagoas", "c) Roraima", "d) Parana"]},
					{ speed:1, who:"noone", audio:"beep", asking: {question: true}, talk:["Qual e o resultado de 4x10 e 40", "Qual multiplicado da o mesmo valor?"]},
					{ speed:1, who:"noone", audio:"beep", asking: {options:["a)", "b)", "c)", "d)"], answers:[false, false, false, true], rightAnswerCallback:function(points){ maingame.increaseScore(points); }}, talk:["a) 3x10", "b) 9x5", "c) 3x11", "d) 8x5"]},
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
					[22,  22,  22,  21,  21,   0,   1,   1,   2,  21,   9,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22,  21,  21,   0,   1,   1,   2,  21,  21,  22,  22],
					[22,  22,  22,   3,  20,  20,  20,  20,  20,  20,  29,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22,  20,  20,  20,  20,  20,  20,  20,  20,  22,  22],
					[22,  22,  22,  23,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22],
					[22,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22,   6,  24,   6,   6,   6,   6,  24,   6,  22,  22],
					[22,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22,   6,   6,   6,   6,   6,   6,   6,   6,  22,  22],
					[22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22,  22,  22,  22,   6,   6,  22,  22,  22,  22,  22],
					[22,  22,  21,  21,  21,  33,   6,   6,  21,  21,  21,  21,  21,  21,  21,  30,   6,   6,  21,  21,  21,  21,  21,  21,  21,  31,   6,   6,  21,  21,  21,  21,  21,  21,  21,  32,   6,   6,  21,  21,  21,  21,  21,  21,  21,  34,   6,   6,  21,  21,  21,  22,  22],
					[22,  22,   8,   8,   8,  20,   6,   6,  20,  20,  20,  20,  20,  20,  20,  20,   6,   6,  20,  20,  20,  20,  20,  20,  20,  20,   6,   6,  20,  20,  20,  20,  20,  20,  20,  20,   6,   6,  20,  20,  20,  20,  20,  20,  20,  20,   6,   6,  20,   8,   8,  22,  22],
					[22,  22,  28,  28,  28,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,   6,  28,  28,  22,  22],
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
