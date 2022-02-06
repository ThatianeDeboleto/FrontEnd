var Pedro = {
  nome: "Pedro",
  vitorias: 5,
  empates: 2,
  derrotas: 1,
  pontos: 0
}
var Ane = {
  nome: "Ane",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}
var Theo = {
  nome: "Theo",
  vitorias: 5,
  empates: 5,
  derrotas: 1,
  pontos: 0
}
var Omega = {
  nome: "Omega",
  vitorias: 4,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

Pedro.pontos = calculaPontos(Pedro);
Ane.pontos = calculaPontos(Ane);
Theo.pontos = calculaPontos(Theo);
Omega.pontos = calculaPontos(Omega);

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var jogadores = [Pedro, Ane, Theo, Omega ]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i +")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates ++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas ++
  jogador.pontos  = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}


// var Pedro = {nome:"Pedro", vitorias: 4 , empates: 2 , derrotas: 14 , pontos: 0 }
// var Ane = {nome:"Ane", vitorias: 2 , empates: 3 , derrotas: 15 , pontos: 0 }
// var Theo = {nome:"Theo", vitorias: 4 , empates: 3 , derrotas: 13 , pontos: 0 }
// var Ômega = {nome:"Ômega", vitorias: 2 , empates: 2 , derrotas: 16 , pontos: 0 }

// calculaPontos(Pedro);

// function calculaPontos(jogador) {
//   var pontos = jogador.vitorias * 3 + jogador.empates;
//   console.log(pontos);
// }

// console.log(Pedro);
// console.log(Ane);
// console.log(Theo);
// console.log(Ômega);
