const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const audio = document.getElementById("audio-capitulo");
const quantidadeCapitulos = 30;
const nomeCapitulo = document.getElementById("capitulo");
let taTocando = false;
let capitulo = 1;
// chamada da função tocarFaixa
function tocarFaixa() {
    audio.play();

botaoPlayPause.classList.remove("bi-play-circle-fill");
botaoPlayPause.classList.add("bi-pause-circle-fill");
audio.play();
taTocando = true;

botaoPlayPause.addEventListener("click", tocarFaixa);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
audio.addEventListener("ended", proximo Capitulo);
}

function pausarFaixa() {
    audio.pause();
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audio.pause();
    taTocando = false;
}
function tocarOuPausar(){
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function proximoCapitulo() {
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

function capituloAnterior() {
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capítulo;
    tocarFaixa();
}
