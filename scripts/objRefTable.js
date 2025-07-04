const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Behaviors.NoSave,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Sin,
		C3.Behaviors.Pin,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Json,
		C3.Plugins.TiledBg,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.Signal,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.System.Exps.time,
		C3.Plugins.System.Cnds.OnSignal,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.TiledBg.Acts.Destroy,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Exps.len,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.mid,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Cnds.PickLastCreated,
		C3.Plugins.Text.Exps.UID,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Exps.uppercase,
		C3.Plugins.Text.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.System.Exps.find,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.System.Exps.tokencount,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Text.Acts.SetSize,
		C3.Plugins.Text.Exps.TextHeight,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.Text.Exps.Y,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event28_Act2,
		C3.Plugins.System.Cnds.PickByEvaluate,
		C3.Plugins.Text.Exps.TagX,
		C3.Plugins.Text.Exps.TagY,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Text.Exps.TagWidth,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event31_Act7,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Exps.IID,
		C3.Plugins.Text.Acts.SetWidth,
		C3.Plugins.Text.Acts.SetZElevation,
		C3.Plugins.Text.Acts.SetY,
		C3.Plugins.Text.Exps.IID,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Text.Acts.SetEffectEnabled,
		C3.Plugins.Sprite.Acts.SetEffectEnabled,
		C3.Plugins.System.Cnds.PickByHighestLowestValue,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.LoadURL,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Exps.BBoxBottom,
		C3.Plugins.Sprite.Exps.PickedCount,
		C3.Plugins.Sprite.Exps.BBoxRight,
		C3.Plugins.Sprite.Exps.BBoxTop,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.Sprite.Acts.SetZElevation,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Text.Acts.AddInstanceVar,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event94_Act1,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Keyboard.Exps.LastKeyCode,
		C3.Plugins.Keyboard.Exps.TypedKey,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Mouse.Cnds.OnWheel,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Exps.BBoxMidX,
		C3.Plugins.Sprite.Exps.BBoxMidY,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Exps.Count,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event165_Act20,
		C3.Plugins.System.Acts.SetTimescale,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event167_Act17,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event176_Act1,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareTime,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Exps.BBoxLeft,
		C3.Plugins.Json.Acts.Parse,
		C3.Plugins.Json.Cnds.ForEach,
		C3.Plugins.Json.Exps.Path,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Json.Exps.ToBeautifiedString,
		C3.Plugins.Sprite.Acts.ToggleBoolInstanceVar,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event210_Act13,
		C3.Plugins.System.Cnds.PickRandom,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event215_Act2,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event227_Act8,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event242_Act13,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event254_Act1,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event255_Act1,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event257_Act1,
		C3.Plugins.Mouse.Cnds.OnRelease,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event260_Act1,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event263_Act1,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event266_Act1,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event267_Act1,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event268_Act1,
		C3.Plugins.Sprite.Exps.Count,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event270_Act3,
		C3.JavaScriptInEvents.FolhaDeEventos1_Event270_Act4
	];
};
self.C3_JsPropNameTable = [
	{temp: 0},
	{letter: 0},
	{simbolo: 0},
	{isMain: 0},
	{posX: 0},
	{letraUID: 0},
	{idQuestao: 0},
	{block: 0},
	{anterior: 0},
	{posterior: 0},
	{anteriorMain: 0},
	{posteriorMain: 0},
	{idLacuna: 0},
	{isTipUsed: 0},
	{celula: 0},
	{fundo: 0},
	{malha: 0},
	{idQuestion: 0},
	{Letra: 0},
	{secNome: 0},
	{secContainer: 0},
	{hudContainer: 0},
	{moedaTexto: 0},
	{NãoSalvar: 0},
	{moedaContainer: 0},
	{isSelected: 0},
	{Tipo: 0},
	{isBuyed: 0},
	{dicaSpot0: 0},
	{dicaSpot1: 0},
	{dicaSpot2: 0},
	{posInitial: 0},
	{ArrastarSoltar: 0},
	{Scroll: 0},
	{dica2: 0},
	{tempoBarra: 0},
	{tempoTotal: 0},
	{Senóide: 0},
	{tempoIcon: 0},
	{idSecao: 0},
	{categoria: 0},
	{dica: 0},
	{imagem: 0},
	{resposta: 0},
	{isCorrect: 0},
	{tempoQuestao: 0},
	{tentativas: 0},
	{dificuldade: 0},
	{Fixar: 0},
	{textQuestao: 0},
	{botaoImagem: 0},
	{questaoContainer: 0},
	{Resposta: 0},
	{indice: 0},
	{Lacuna: 0},
	{Hub: 0},
	{malhaContainer: 0},
	{Mouse: 0},
	{Toque: 0},
	{fundoDesfoque: 0},
	{questaoImagem: 0},
	{popupSair: 0},
	{Teclado: 0},
	{Indice: 0},
	{scrolArea: 0},
	{indiceMalha: 0},
	{telaFinal: 0},
	{jogPontuacao: 0},
	{jogMoedas: 0},
	{fimReiniciar: 0},
	{fimProximo: 0},
	{fimVoltar: 0},
	{IndicePalavra: 0},
	{textIndicePalavra: 0},
	{cancelDica: 0},
	{dicaPopUp: 0},
	{moedasRestantes: 0},
	{DicaName: 0},
	{dicaInstruc: 0},
	{precoDica: 0},
	{botaoSim: 0},
	{DicaDescName: 0},
	{dicaDescContainer: 0},
	{dicaConteudo: 0},
	{dicaContainer: 0},
	{simboloDicaContainer: 0},
	{simboloContainer: 0},
	{JSON: 0},
	{dica1: 0},
	{dica0: 0},
	{symbolDesc: 0},
	{LoadingImage: 0},
	{BarraDeLoading: 0},
	{TelaSprites: 0},
	{TelaTexto: 0},
	{DicaSprites: 0},
	{DicaTexto: 0},
	{first_word: 0},
	{words: 0},
	{nomeSecao: 0},
	{minY: 0},
	{minX: 0},
	{PosY: 0},
	{letterChosen: 0},
	{celulaChosen: 0},
	{questionChosen: 0},
	{lastCelula: 0},
	{firstCelula: 0},
	{isMainSelect: 0},
	{isCelulaSelect: 0},
	{speedScrol: 0},
	{heigthInicial: 0},
	{heigthFinal: 0},
	{heigthTotal: 0},
	{save: 0},
	{acertos: 0},
	{moedas: 0},
	{existImage: 0},
	{celulaHeight: 0},
	{TempoJogo: 0},
	{TempoGasto: 0},
	{endgame: 0},
	{tentativasGeral: 0},
	{fatorScroll: 0},
	{symbols: 0},
	{x: 0},
	{y: 0},
	{wordLength: 0},
	{string: 0},
	{index: 0},
	{complete: 0},
	{mainComplete: 0},
	{letterRandom: 0},
	{letterSelected: 0},
	{animationIndex: 0},
	{Gap: 0},
	{aux: 0},
	{id: 0},
	{pergunta: 0},
	{imagePath: 0},
	{lacunaSelectedIID: 0},
	{idPerguntaSelec: 0},
	{auxY: 0},
	{stopTime: 0},
	{qtdeLacunas: 0},
	{auxQuestao: 0},
	{auxTempo: 0},
	{respostaLacuna: 0},
	{iidLacuna: 0},
	{celSelecY: 0},
	{qtdeRespostas: 0},
	{auxLacuna: 0},
	{actualCelula: 0},
	{idAnswer: 0},
	{saldo: 0},
	{gap: 0},
	{minBlocks: 0},
	{moedasFinal: 0},
	{tempo: 0},
	{scoreJogador: 0}
];

self.InstanceType = {
	simbolo: class extends self.ISpriteInstance {},
	celula: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	malha: class extends self.ISpriteInstance {},
	Letra: class extends self.ITextInstance {},
	secNome: class extends self.ITextInstance {},
	secContainer: class extends self.ISpriteInstance {},
	hudContainer: class extends self.ISpriteInstance {},
	moedaTexto: class extends self.ITextInstance {},
	moedaContainer: class extends self.ISpriteInstance {},
	dicaSpot0: class extends self.ISpriteInstance {},
	dicaSpot1: class extends self.ISpriteInstance {},
	dicaSpot2: class extends self.ISpriteInstance {},
	Scroll: class extends self.ISpriteInstance {},
	dica2: class extends self.ISpriteInstance {},
	tempoBarra: class extends self.ISpriteInstance {},
	tempoTotal: class extends self.ISpriteInstance {},
	tempoIcon: class extends self.ISpriteInstance {},
	textQuestao: class extends self.ITextInstance {},
	botaoImagem: class extends self.ISpriteInstance {},
	questaoContainer: class extends self.ISpriteInstance {},
	Resposta: class extends self.ITextInstance {},
	Lacuna: class extends self.ISpriteInstance {},
	Hub: class extends self.ISpriteInstance {},
	malhaContainer: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Toque: class extends self.IInstance {},
	fundoDesfoque: class extends self.ISpriteInstance {},
	questaoImagem: class extends self.ISpriteInstance {},
	popupSair: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Indice: class extends self.ITextInstance {},
	scrolArea: class extends self.ISpriteInstance {},
	indiceMalha: class extends self.ISpriteInstance {},
	telaFinal: class extends self.ISpriteInstance {},
	jogPontuacao: class extends self.ITextInstance {},
	jogMoedas: class extends self.ITextInstance {},
	fimReiniciar: class extends self.ISpriteInstance {},
	fimProximo: class extends self.ISpriteInstance {},
	fimVoltar: class extends self.ISpriteInstance {},
	IndicePalavra: class extends self.ISpriteInstance {},
	textIndicePalavra: class extends self.ITextInstance {},
	cancelDica: class extends self.ISpriteInstance {},
	dicaPopUp: class extends self.ISpriteInstance {},
	moedasRestantes: class extends self.ITextInstance {},
	DicaName: class extends self.ITextInstance {},
	dicaInstruc: class extends self.ITextInstance {},
	precoDica: class extends self.ITextInstance {},
	botaoSim: class extends self.ISpriteInstance {},
	DicaDescName: class extends self.ITextInstance {},
	dicaDescContainer: class extends self.ISpriteInstance {},
	dicaConteudo: class extends self.ITextInstance {},
	dicaContainer: class extends self.ISpriteInstance {},
	simboloDicaContainer: class extends self.ISpriteInstance {},
	simboloContainer: class extends self.ISpriteInstance {},
	JSON: class extends self.IJSONInstance {},
	dica1: class extends self.ISpriteInstance {},
	dica0: class extends self.ISpriteInstance {},
	symbolDesc: class extends self.ITextInstance {},
	LoadingImage: class extends self.ISpriteInstance {},
	BarraDeLoading: class extends self.ITiledBackgroundInstance {},
	TelaSprites: class extends self.ISpriteInstance {},
	TelaTexto: class extends self.ITextInstance {},
	DicaSprites: class extends self.ISpriteInstance {},
	DicaTexto: class extends self.ITextInstance {}
}