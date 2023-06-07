//Recebe a escolha do Player
var playerJogo = window.prompt("Escolha entre Pedra Papel ou Tesoura");

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
    playRound();
}

function playRound(playerSelection, computerSelection) {

    //Pega o nome aleatorio
    computerSelection = getComputerChoice();
    console.log(`Escolha da maquina: ${computerSelection}`);

    //Escolha do Player
    playerSelection = playerJogo.toLowerCase();
    console.log(`Escolha do Player: ${playerSelection}`);

    //Comparar o resultado 
    if (computerSelection == playerSelection) {

        console.log(`Computer: ${computerSelection}, Player: ${playerSelection}`);
        console.log("Empate!!");
        contadorEmpate++

    } 

    if (playerSelection == "pedra" && computerSelection == "tesoura") {

        console.log(`Resultado: ${playerSelection} ganha de ${computerSelection}`);
        console.log("Player Ganhou!!");
        contadorPlayer++

    } else if (playerSelection == "pedra" && computerSelection == "papel") {

        console.log(`Resultado: ${playerSelection} perdeu para ${computerSelection}`);
        console.log("Maquina Ganhou!!");
        contadorMaquina++

    }

    if (playerSelection == "tesoura" && computerSelection == "papel") {

        console.log(`Resultado: ${playerSelection} ganha de ${computerSelection}`);
        console.log("Player Ganhou!!");
        contadorPlayer++

    } else if (playerSelection == "tesoura" && computerSelection == "pedra") {

        console.log(`Resultado: ${playerSelection} perdeu para ${computerSelection}`);
        console.log("Maquina Ganhou!!");
        contadorMaquina++

    }

    if (playerSelection == "papel" && computerSelection == "pedra") {

        console.log(`Resultado: ${playerSelection} ganha de ${computerSelection}`);
        console.log("Player Ganhou!!");
        contadorPlayer++

    } else if (playerSelection == "papel" && computerSelection == "tesoura") {

        console.log(`Resultado: ${playerSelection} perdeu para ${computerSelection}`);
        console.log("Maquina Ganhou!!");
        contadorMaquina++

    }
}

//Executa o Jogo 5 vezes
function game() {

    //Estrutura de Repetição
    for (let index = 0; index < 5; index++) {

        //Chama a função responsavel pelo jogo
        console.log(playRound());
    }

    //Exibi o Placar
    console.log(`Contagem de Empate: ${contadorEmpate}`);
    console.log(`Contagem de Vitorias Player: ${contadorPlayer}`);
    console.log(`Contagem de Vitorias Maquina: ${contadorMaquina}`);

}

console.log(game());

/*function nomeAleatorio(nomes) {
    var indice = Math.floor(Math.random() * nomes.length);
    return nomes[indice];
  }


console.log(nome); // exibe um nome aleatório da lista
*/