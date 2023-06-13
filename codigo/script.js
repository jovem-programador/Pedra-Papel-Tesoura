//Escolha do play
var playerJogo = "";

//ID dos Icones
const iconePlay = document.querySelector("#player");
const iconeMaq = document.querySelector("#computador");

//Seleção do usuario
const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");

//Placar
const statusText = document.querySelector("#ponto");
const placarPlay = document.querySelector("#playerPlacar");
const placarMaq = document.querySelector("#playerComputador");

//Eventos De Click
pedra.addEventListener("click", () => {
  iconePlay.src = "img/carvao.png";
  playerJogo = "pedra";
  start();
});

papel.addEventListener("click", () => {
  iconePlay.src = "img/papel-toalha.png";
  playerJogo = "papel";
  start();
});

tesoura.addEventListener("click", () => {
  iconePlay.src = "img/tesoura.png";
  playerJogo = "tesoura";
  start();
});

//Contador referente o Placar
var contadorEmpate = 0;
var contadorPlayer = 0;
var contadorMaquina = 0;

//Função gerar um nome aleatorio "Pedra", "Papel" ou "Tesoura"
function getComputerChoice() {
  //Array de nomes
  const jogo = ["pedra", "papel", "tesoura"];

  //Gera um indice aleatorio
  var indice = Math.floor(Math.random() * jogo.length);

  //Retorna o nome aleatorio
  return jogo[indice];
}

//Start do jogo
function start() {
  //Dados = escolha da maquina
  var dados = getComputerChoice();

  //Inicia o jogo
  alterImage(dados);
}

//Alteração dos icones
function alterImage(dados) {
  //Pega o nome aleatorio
  let computerSelection = dados;

  console.log(`Escolha da maquina: ${computerSelection}`);

  //Altera o icone de acordo a escolha da Maquina na tela
  switch (computerSelection) {
    case "pedra":
      iconeMaq.src = "img/carvao.png";
      break;

    case "papel":
      iconeMaq.src = "img/papel-toalha.png";
      break;

    case "tesoura":
      iconeMaq.src = "img/tesoura.png";
      break;

    default:
      break;
  }

  playRound(computerSelection);
}

//Testa os resultados
function playRound(computerSelection) {
  //Escolha do Player
  let playerSelection = playerJogo;
  console.log(`Escolha do Player: ${playerSelection}`);

  //Comparar o resultado
  if (computerSelection == playerSelection) {

    statusText.innerHTML = "Empate !!";

  } else if (playerSelection == "pedra" && computerSelection == "tesoura") {

    contadorPlayer++;
    placarPlay.innerHTML = contadorPlayer;
    statusText.innerHTML = "Vitoria na Rodada";

  } else if (playerSelection == "pedra" && computerSelection == "papel") {

    contadorMaquina++;
    placarMaq.innerHTML = contadorMaquina;
    statusText.innerHTML = "Derrota na Rodada";

  } else if (playerSelection == "tesoura" && computerSelection == "papel") {

    contadorPlayer++;
    placarPlay.innerHTML = contadorPlayer;
    statusText.innerHTML = "Vitoria na Rodada";

  } else if (playerSelection == "tesoura" && computerSelection == "pedra") {

    contadorMaquina++;
    placarMaq.innerHTML = contadorMaquina;
    statusText.innerHTML = "Derrota na Rodada";

  } else if (playerSelection == "papel" && computerSelection == "pedra") {

    contadorPlayer++;
    placarPlay.innerHTML = contadorPlayer;
    statusText.innerHTML = "Vitoria na Rodada";

  } else if (playerSelection == "papel" && computerSelection == "tesoura") {

    contadorMaquina++;
    placarMaq.innerHTML = contadorMaquina;
    statusText.innerHTML = "Derrota na Rodada";
  }

  // Resultado Final
  if (contadorPlayer == 5) {
    //Reseta o contator
    contadorMaquina = 0;
    contadorPlayer = 0;

    //Reseta o placar
    placarPlay.innerHTML = 0;
    placarMaq.innerHTML = 0;

    alert("Parabéns. Você foi vitorioso!!");
    
  } else if (contadorMaquina == 5) {
    contadorMaquina = 0;
    contadorPlayer = 0;

    placarPlay.innerHTML = 0;
    placarMaq.innerHTML = 0;

    alert("Não foi dessa vez. Boa sorte na próxima.");
  }
}