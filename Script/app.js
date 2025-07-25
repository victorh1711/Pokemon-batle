
const pokemons = {
  pikachu: { nome: "Pikachu", vida: 100, forca: 40, defesa: 20, id: 25 },
  bulbasaur: { nome: "Bulbasaur", vida: 100, forca: 35, defesa: 25, id: 1 },
  charmander: { nome: "Charmander", vida: 100, forca: 45, defesa: 15, id: 4 }
};

let jogador, cpu;

function escolher(nome) {
  jogador = { ...pokemons[nome] };

  const opcoes = Object.keys(pokemons).filter(p => p !== nome);
  const aleatorio = opcoes[Math.floor(Math.random() * opcoes.length)];
  cpu = { ...pokemons[aleatorio] };

  document.getElementById("escolha").style.display = "none";
  document.getElementById("batalha").style.display = "block";

  document.getElementById("titulo-batalha").textContent = `${jogador.nome} vs ${cpu.nome}`;
  carregarImagens(jogador.id, cpu.id);
  atualizarStatus("A batalha começou!");
}

function carregarImagens(idJogador, idCpu) {
  document.getElementById("img-jogador").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idJogador}.png`;
  document.getElementById("img-cpu").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idCpu}.png`;
}

function atacar() {    
  if (jogador.vida <= 0 || cpu.vida <= 0) return;

  const danoJogador = Math.max(0, jogador.forca - cpu.defesa);
  const danoCpu = Math.max(0, cpu.forca - jogador.defesa);

  cpu.vida -= danoJogador;
  jogador.vida -= danoCpu;

  let status = `${jogador.nome} atacou ${cpu.nome} causando ${danoJogador} de dano.\n`;
  status += `${cpu.nome} contra-atacou causando ${danoCpu} de dano.\n`;
  status += `\n${jogador.nome}: ${jogador.vida} HP\n${cpu.nome}: ${cpu.vida} HP`;

  if (jogador.vida <= 0 && cpu.vida <= 0) {
    status = "Empate! Ambos caíram na batalha!";
    desativarBotao();
  } else if (jogador.vida <= 0) {
    status = `${cpu.nome} venceu a batalha!`;
    desativarBotao();
  } else if (cpu.vida <= 0) {
    status = `${jogador.nome} venceu a batalha!`;
    desativarBotao();
  }

  atualizarStatus(status);
}

function atualizarStatus(msg) {
  document.getElementById("status").textContent = msg;
}

function desativarBotao() {
  const botao = document.getElementById("ataque");
  botao.disabled = true;
  botao.textContent = "Fim da batalha";
}