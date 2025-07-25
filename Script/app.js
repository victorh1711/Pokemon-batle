//definimos os pokemons e seus atributos
const pokemon ={
    pikachu: {nome : 'Pikachu', vida: 60, defesa: 25, dano: 45},
    bublassauro: {nome : 'Bulbassauro', vida: 115, defesa:30, dano: 20},
    charizard: {nome : 'Charizard', vida: 75, defesa: 45, dano: 50}
}

//Nossos Jogadores
let jogador, cpu;

//Função para escolha do pokemon
function escolha(nome){
    //Escolha do usuario
    jogador = {...pokemon[nome]};
    //Filtrando pokemmon já escolhido
    const opcao = pokemon.filter(opcao => opcao !== nome);
    //Escolha do computador
    const aleatorio = opcao[Math.floor(Math.random(opcao))];
    cpu = {...pokemon[aleatorio]};
    document.getElementById('escolha').style.display = 'none';
    document.getElementById(batalha).style.display = 'block';

    api(jogador.id, cpu.id);

}

//Fução para o ataque
function ataque(){
    danoJogador = cpu.vida - jogador.dano;
    danoCpu = jogador.vida - cpu.dano;
    jogador.vida -= danoCpu;
    cpu.vida -= danoJogador;

    const statu = document.getElementById('status');
    statu = `o ${jogador} causou ${danoJogador} de dano no ${cpu.nome}.`;
    statu = `o ${cpu.nome} causou ${danoCpu} de dano no ${jogador.nome}.`;
    statu = `Agora o jogador tem ${jogador.vida} e a cpu tem ${cpu.vida}.`;

    if(jogador.vida <= 0) return;{
        atualizaStatus(' A cpu ganhou a batalha!')
    } 
    if(cpu.vida && jogador.vida == 0){
        atualizarStatus('Houve um empate!')
    }
}

//Função para a atualização dos status durante a batalha
function atualizarStatus(mensagem){
    document.getElementById('status').textContent = mensagem;
}

//Fução que reinicia a batalha
function limparbatalha(){
    const button = document.getElementById('ataque');
    button.disable = true;
}

//Função para fazer a requisição da API
function api(){
    document.getElementById(img-jogador).src = 
    document.getElementById(img-cpu).src = 
}