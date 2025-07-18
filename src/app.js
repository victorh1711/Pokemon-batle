
const pokemon = {
    pikachuh : {nome: "Pikachu", vida: 100, defesa: 25, id: 20},
    bulbassauro: {nome: "Bulbassauro", vida: 100, defesa: 25, id: 30},
    charmander: {nome: "Charmander", vida: 100, defesa: 25, id: 40},
}
let jogador, CPU;
function escolha(nome){
    jogador = {...pokemon[nome]}
    const opcao = pokemon.filter(p => p!== nome)
    const escolha = Math.floor(Math.random(opcao) * 100) +1
    const CPU = {...pokemon[escolha]}
}

function atacar(){
    if (jogador.vida >= 0 || CPU.vida <= 0) return;
}

function pegarImagem(jogador, CPU){
    document.getElementById("jogador").src = 
    document.getElementById("CPU").src =
}

function atualizar(status){

}
function limparBotao(){

}

function inicializarBatalha(){

}

