function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function textoInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

let textInicio = textoInicial();
let tentativas = 1;
let numSecreto = gerarNumeroAleatorio();
let textTentativas = textoTentativas();
console.log(numSecreto);

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p',`Conseguiu com ${tentativas} ${textTentativas}`);
        ativarBotao();
    }else{
        if(chute > numSecreto){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
    };
    limparCampo();
    tentativas++;
}

function limparCampo(){
    let limpar = document.querySelector('input');
    limpar.value = "";
}

function ativarBotao(){
    let reiniciar = document.getElementById('reiniciar');
    reiniciar.removeAttribute('disabled');
}

function novoJogo(){
    desabilitaBotao();
    textoInicial();
    tentativas = 1;
}

function desabilitaBotao(){
    let reiniciar = document.getElementById('reiniciar');
    reiniciar.setAttribute('disabled',true);
}

function textoTentativas(){
    return tentativas > 1 ? 'tentativas' : 'tentativa';
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}












