// Namespace da questão, para poder acessar em outro script
window.Namespace = window.Namespace || {};
window.Namespace.nameSectionOrChapter = []

function waitForMessage() {
    return new Promise((resolve) => {
        window.addEventListener('message', (event) => {
            // Verifica a origem da mensagem para garantir segurança
            // if (event.origin !== 'https://your-react-app-domain.com') {
            //   return;
            // }

            // Acessa a mensagem recebida
            const message = event.data;
            ////console.log('Mensagem recebida no Construct:', message);
            
            // Armazena a mensagem em uma variável no namespace global
            window.Namespace.message = message;

            resolve();  // Resolve a Promise quando a mensagem for recebida
        });
    });
}

window.Namespace.reload = false;
window.Namespace.saveJSON;
window.Namespace.time = 0;
window.Namespace.session = {};
window.Namespace.session.rawData = "";
window.Namespace.tipContentUsed = false;
window.Namespace.tipLetterRandom = "";
window.Namespace.tipLetterSelected = "";

async function main(){
   	await waitForMessage()
	//console.log(window.Namespace.message)
	// Função que verifica se deve recarregar o jogo salvo
	window.Namespace.questionsOnly = [];
	window.Namespace.erros = [];
	window.Namespace.acertos = [];
	window.parent?.postMessage('construct-ready', '*');
	//waitForMessage();
	//window.Namespace.message = "4438d4c8-90c1-7099-0bfc-e8bd42fa23c0,chapter,908ce6dd-a65b-4727-881b-f2b275eca101";
	window.Namespace.nameSection;
	window.Namespace.nameChapter;
	
	const parts = window.Namespace.message.split(",");
	const isSection = parts[1] === "section";
	const chapterID = isSection ? "" : parts[2];
	const sectionID = isSection ? parts[2] : "";

	let nameSection;
	let nameChapter;
	
	// Função que verifica se deve recarregar o jogo salvo
	function getReloadStatus() {
		let jogador = window.Namespace.message.split(',')[0];
		try {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", `https://ereik07xl4.execute-api.us-east-1.amazonaws.com/dev/session/${jogador}`, false);
			xhr.send(null);
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
				//console.log('Data fetched successfully:', data);
				
				if (data.state == 4) {
					if (isSection) {
						if (sectionID == data.section) {
							window.Namespace.reload = true;
						}
					}
					else {
						if (chapterID == data.chapter) {
							window.Namespace.reload = true;
						}
					}	
				} else {
					window.Namespace.reload = false;
				}
				
			} else {
				throw new Error('Network response was not ok');
			}
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	}
	
	// Função que puxa as questões do capítulo ou seção que for solicitado
	function initialize() {
		try {
			var xhr = new XMLHttpRequest();
			if (isSection) {	
				xhr.open("GET", `https://kfdnohrf5a.execute-api.us-east-1.amazonaws.com/dev/section/questions/${sectionID}`, false);
				
			}
			else {
				xhr.open("GET", `https://kfdnohrf5a.execute-api.us-east-1.amazonaws.com/dev/chapter/questions/${chapterID}`, false);
			}
			xhr.send(null);
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
				//console.log('Data fetched successfully:', data);
				window.Namespace.rawData = data;
			} else {
				throw new Error('Network response was not ok');
			}
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	}
    // Função que puxa o nome da seção ou capítulo
	function callName(){
		try {
			var xhr = new XMLHttpRequest();
			if (isSection) {	
				xhr.open("GET", `https://kfdnohrf5a.execute-api.us-east-1.amazonaws.com/dev/section/name/${sectionID}`, false);
			}
			else {
				xhr.open("GET", `https://kfdnohrf5a.execute-api.us-east-1.amazonaws.com/dev/chapter/name/${chapterID}`, false);
			}
			xhr.send(null);
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
				//console.log('Data fetched successfully:', data);
				if (isSection) {
					window.Namespace.nameSectionOrChapter = data;
					window.Namespace.nameSection = data
				}
				else {
					window.Namespace.nameSectionOrChapter = data;
					window.Namespace.nameChapter = data
				}
			} else {
				throw new Error('Network response was not ok');
			}
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	}
	// Função que restaura a sessão do usuário
	function restoreData(){
		let jogador = window.Namespace.message.split(',')[0];
		try {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", `https://ereik07xl4.execute-api.us-east-1.amazonaws.com/dev/session/${jogador}`, false);
			xhr.send(null);
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
				//console.log('Data fetched successfully:', data);
				window.Namespace.session = data.session;
				window.Namespace.session.rawData = window.Namespace.session.rawData;
				window.Namespace.time = window.Namespace.session.rawData.time
				
			} else {
				throw new Error('Network response was not ok');
			}
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	}
	
	getReloadStatus();
	if (!window.Namespace.reload) {
		initialize()
		callName()
	}
	else{
		restoreData()
	}
	
	
}

main();

const scriptsInEvents = {

	async FolhaDeEventos1_Event22_Act2(runtime, localVars)
	{
		runtime.globalVars.existImage = true;
	},

	async FolhaDeEventos1_Event33_Act7(runtime, localVars)
	{
// Obtém a instância atual de Lacuna
const lacunaInstance = runtime.objects.Lacuna.getFirstPickedInstance();

// Obtém a resposta da instância atual
//console.log("testeeeeeee " + localVars.aux)
const resposta = localVars.aux;

// Obtém a lista de palavras
const words = runtime.globalVars.words;

// Função para normalizar a palavra
function normalizeWord(word) {
  return word
    .toLowerCase() // Converte para caixa baixa
    .normalize("NFD") // Decompõe caracteres com acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove marcas de acentos
    .replace(/\s+/g, ""); // Remove todos os espaços
}

// Função para encontrar o índice da resposta na lista de palavras
function findWordIndex(words, resposta) {
  // Divide a string `words` em um array usando a vírgula como separador
  const wordsArray = words.split(",");

  // Normaliza a resposta
  const respostaNormalizada = normalizeWord(resposta);

  // Encontra o índice da resposta no array
  const index = wordsArray.findIndex(word => normalizeWord(word) === respostaNormalizada);

  // Retorna o índice (ou -1 se não encontrar)
  return index;
}

// Encontra o índice da palavra
const indice = findWordIndex(words, resposta);

// Atribui o índice à variável de instância `idteste`
localVars.indice = indice;
	},

	async FolhaDeEventos1_Event96_Act1(runtime, localVars)
	{
		// Obtém a resposta a ser comparada
		const respostaLacunaNormalizada = normalizeWord(localVars.respostaLacuna);
		
		// Função para normalizar a palavra
		function normalizeWord(word) {
		  return word
		    .toLowerCase() // Converte para caixa baixa
		    .normalize("NFD") // Decompõe caracteres com acentos
		    .replace(/[\u0300-\u036f]/g, "") // Remove marcas de acentos
		    .replace(/\s+/g, ""); // Remove todos os espaços
		}
		
		// Percorre todas as instâncias de Lacuna
		const lacunas = runtime.objects.Lacuna.getAllInstances();
		let idEncontrado = null; // Variável para armazenar o iid ou uid
		
		for (const lacuna of lacunas) {
		  // Normaliza a resposta da instância atual
		  const respostaNormalizada = normalizeWord(lacuna.instVars.resposta);
		
		  // Compara com a resposta normalizada
		  if (respostaNormalizada === respostaLacunaNormalizada) {
		    // Armazena o iid ou uid da instância encontrada
		    idEncontrado = lacuna.uid; // ou lacuna.uid, dependendo do que você precisa
		    break; // Sai do loop após encontrar a instância
		  }
		}
		
		// Armazena o resultado em uma variável (global ou local)
		localVars.iidLacuna = idEncontrado; 
	},

	async FolhaDeEventos1_Event151_Act1(runtime, localVars)
	{

	},

	async FolhaDeEventos1_Event167_Act20(runtime, localVars)
	{
		window.parent.postMessage({ type: 'GAME_FINISHED' }, '*');
	},

	async FolhaDeEventos1_Event169_Act18(runtime, localVars)
	{
		window.parent.postMessage({ type: 'GAME_FINISHED' }, '*');
	},

	async FolhaDeEventos1_Event211_Act13(runtime, localVars)
	{
		// CARREGA O JSON A PARTIR DA VARIAVEL GLOBAL SYMBOLS
		const symbolsJSON = runtime.globalVars.symbols;
		
		// PASSA A STRING PRA JSON
		const symbolsData = JSON.parse(symbolsJSON);
		
		// PEGAR O VALOR DE SYMBOLS
		const currentItem = symbolsData[localVars.aux];
		const frameNumber = currentItem.symbols;
		const frameLetter = currentItem.letter;
		
		// PASSAR O VALOR NUMÉRICO PRO QUADRO DO SÍMBOLO
		const simboloInstance = runtime.objects.simbolo.getFirstPickedInstance();
		simboloInstance.animationFrame = frameNumber;
		simboloInstance.instVars.letter = frameLetter
	},

	async FolhaDeEventos1_Event215_Act2(runtime, localVars)
	{
		window.Namespace.tipLetterRandom = localVars.aux
	},

	async FolhaDeEventos1_Event227_Act7(runtime, localVars)
	{
		window.Namespace.tipContentUsed = true;
	},

	async FolhaDeEventos1_Event239_Act6(runtime, localVars)
	{
		window.Namespace.tipLetterSelected = localVars.aux
		
	},

	async FolhaDeEventos1_Event251_Act1(runtime, localVars)
	{
		
		
		
		const save = { words: window.Namespace.board,
					   questions: window.Namespace.question,
					   nameSection: runtime.globalVars.nomeSecao, 
					   time: runtime.globalVars.TempoGasto, 
					   tipContentUsed: window.Namespace.tipContentUsed,
					   tipLetterRandom: window.Namespace.tipLetterRandom,
					   tipLetterSelected: window.Namespace.tipLetterSelected,
					   coin: runtime.globalVars.moedas}
					   
		window.Namespace.session.rawData = JSON.stringify(save)
	},

	async FolhaDeEventos1_Event252_Act1(runtime, localVars)
	{
		window.parent.postMessage({ type: 'GAME_FINISHED' }, '*');
	},

	async FolhaDeEventos1_Event254_Act1(runtime, localVars)
	{
		window.parent.postMessage({ type: 'GAME_NEXT' }, '*');
	},

	async FolhaDeEventos1_Event257_Act1(runtime, localVars)
	{
		window.parent.postMessage({ type: 'GAME_BACK' }, '*');
	},

	async FolhaDeEventos1_Event260_Act1(runtime, localVars)
	{
		window.parent.postMessage({ type: 'GAME_REFRESH' }, '*');
	},

	async FolhaDeEventos1_Event263_Act1(runtime, localVars)
	{
		let jogador = window.Namespace.message.split(',')[0];
		window.Namespace.saveJSON = {
			"user": jogador,
			"timestamp": new Date().toISOString(),
			"state": 4,
			"session": window.Namespace.session
		}
		
		if (window.Namespace.message.split(',')[1] == "section") {
			window.Namespace.saveJSON.section = window.Namespace.message.split(',')[2];
		} else {
			window.Namespace.saveJSON.chapter = window.Namespace.message.split(',')[2];
		}
		
		let saveString = JSON.stringify(window.Namespace.saveJSON);
		
		fetch("https://ereik07xl4.execute-api.us-east-1.amazonaws.com/dev/session", {
					method: "POST",
					body: saveString
				})
				.then(response => response.json())
				.then(
					//data => console.log('Success:', data)
				).catch(
					//error => console.error('Error:', error)
				);
	},

	async FolhaDeEventos1_Event264_Act1(runtime, localVars)
	{
		let jogador = window.Namespace.message.split(',')[0];
		
		window.Namespace.saveJSON = {
			"user": jogador,
			"timestamp": new Date().toISOString(),
			"state": 0,
			"session": {}
		}
		
		let saveString = JSON.stringify(window.Namespace.saveJSON);
		
		fetch("https://ereik07xl4.execute-api.us-east-1.amazonaws.com/dev/session", {
					method: "POST",
					body: saveString
				})
				.then(response => response.json())
				.then(
					//data => console.log('Success:', data)
				)
				.catch(
					//error => console.error('Error:', error)
				);
	},

	async FolhaDeEventos1_Event265_Act1(runtime, localVars)
	{
		function generateUUID() {
		    // Gera um UUID v4 no formato padrão
		    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		        const r = Math.random() * 16 | 0; // número aleatório entre 0 e 15
		        const v = c === 'x' ? r : (r & 0x3 | 0x8); // força o formato de UUID v4
		        return v.toString(16);
		    });
		}
		
		let tempo = localVars.tempo;
		let idQuestao = localVars.idQuestao;
		let tentativas = localVars.tentativas;
		let timestamp = new Date().toISOString();
		let jogo = 4;
		let secao = window.Namespace.message.split(',')[2];
		let capitulo = window.Namespace.message.split(',')[2];
		let jogador = window.Namespace.message.split(',')[0];
		let id = generateUUID();
		let isSection = window.Namespace.message.split(',')[1] === "section";
		
		let jsonObject = {
			"tempo": tempo,
			"status": true,
			"jogador": jogador,
			"jogo": jogo,
			"idQuestao": idQuestao,
			"timestamp": timestamp,
			"id": id,
			"tentativas": tentativas
		};
		
		if (isSection) {
		    jsonObject["secao"] = secao;
		} else {
		    jsonObject["capitulo"] = capitulo;
		}
		
		let jsonString = JSON.stringify(jsonObject);
		
		
		fetch("https://ereik07xl4.execute-api.us-east-1.amazonaws.com/dev/game", {
		    method: "POST",
		    body: jsonString
		})
		.then(response => response.json())
		.then(
			//data => console.log('Success:', data)
		)
		.catch(
			//error => console.error('Error:', error)
		);
	},

	async FolhaDeEventos1_Event267_Act3(runtime, localVars)
	{
		const textQuestoes = runtime.objects.textQuestao.getAllInstances();
		
		// CALCULO DE DIFICULDADE MÉDIA
		
		// FACEIS
		const questoesFaceis = textQuestoes.filter(instancia => {
		  return (instancia.instVars.dificuldade === 1);
		});
		
		// MEDIAS
		const questoesMedias = textQuestoes.filter(instancia => {
		  return (instancia.instVars.dificuldade === 2);
		});
		
		// DIFIVEIS
		const questoesDificeis = textQuestoes.filter(instancia => {
		  return (instancia.instVars.dificuldade === 3);
		});
		
		localVars.dificuldade = (((questoesFaceis.length + (questoesMedias.length*2) + (questoesDificeis.length * 3))/(textQuestoes.length*3))*100)
		
		// CALCULO DE NÚMERO DE TENTATIVAS
		
		textQuestoes.forEach(textQuestao => {
		    if (textQuestao.instVars.tentativas !== undefined && typeof textQuestao.instVars.tentativas === 'number') {
		        localVars.tentativas += textQuestao.instVars.tentativas;
		    }
		});
	},

	async FolhaDeEventos1_Event267_Act4(runtime, localVars)
	{
		async function enviarDados() {
		  const tempo = localVars.tempo;
		  const tentativas = localVars.tentativas;
		  const pontuacao = localVars.scoreJogador;
		  const dificuldade = localVars.dificuldade;
		  let pontuacaoIA = 0;
		  let recomendacao = "";
		
		  // Tenta obter resposta da IA
		  try {
		    const respostaIA = await fetch("https://3.89.89.191.nip.io/nivel/", {
		      method: "POST",
		      headers: { "Content-Type": "application/json" },
		      body: JSON.stringify({
		        pontuacao: pontuacao,
		        tempo: tempo,
		        dificuldade: dificuldade,
		        tentativas: tentativas
		      })
		    });
		
			//console.log("pontuacao:" + pontuacao, "tempo" + tempo, "dificuldade: " + dificuldade, "tentativas:" + tentativas)
		
		    //if (!respostaIA.ok) throw new Error("Erro na resposta da IA");
		
		    const dataIA = await respostaIA.json();
		    pontuacaoIA = dataIA.pontuacao || pontuacao;
		    recomendacao = dataIA.recomendacao || "media";
			const score = runtime.objects.jogPontuacao.getFirstInstance();
			score.text = Math.floor(pontuacaoIA).toString();
			//score.runtime.redraw();
		
		    //console.log("Resposta IA:", dataIA.pontuacao + " | " + dataIA.recomendacao);
		
		  } catch (erro) {
		    //console.warn("Erro ao obter dados da IA:", erro);
		  }
		
		//console.log("AAAAAAAAAAAAAAAAAAAAAAAAA:", { pontuacaoIA, recomendacao })
		
		  // Envia para o back, independentemente da IA
		  try {
		    const [sub, tipo, id] = window.Namespace.message.split(',');
		
		    const respostaBack = await fetch("https://ereik07xl4.execute-api.us-east-1.amazonaws.com/dev/nivelPlayer", {
		      method: "POST",
		      body: JSON.stringify({
			  	sub: sub,
				[tipo === "section" ? "idSection" : "idChapter"]: id,
				pontuacao: pontuacaoIA,
				recomendacao: recomendacao
				})
		    });
		
		    //if (!respostaBack.ok) throw new Error("Erro na resposta do back");
		
		    //const respostaJson = await respostaBack.json();
		    //console.log("Sucesso:", respostaJson);
		
		  } catch (erro) {
		    //console.error("Erro ao enviar para o back:", erro);
		  }
		}
		
		enviarDados();
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
