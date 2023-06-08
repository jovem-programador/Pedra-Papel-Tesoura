var playerJogo = "";

const iconePlay = document.querySelector("#player");
const iconeMaq = document.querySelector("#computador");

const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");

const statusText = document.querySelector("#ponto");
const placarPlay = document.querySelector("#playerPlacar");
const placarMaq = document.querySelector("#playerComputador");

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



//Recebe a escolha do Player
//var playerJogo = window.prompt("Escolha entre Pedra Papel ou Tesoura");

//Contador referente o Placar
var contadorEmpate = 0;
var contadorPlayer = 0;
var contadorMaquina = 0;

function start() {
    var dados = getComputerChoice();
    playRound(dados);
}

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

function playRound(dados) {

    //Pega o nome aleatorio
    let computerSelection = dados;
    console.log(`Escolha da maquina: ${computerSelection}`);

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


    //Escolha do Player
    let playerSelection = playerJogo;
    console.log(`Escolha do Player: ${playerSelection}`);

    //Comparar o resultado 
    if (computerSelection == playerSelection) {

        statusText.innerHTML = "Empate!!"


        console.log(`Computer: ${computerSelection}, Player: ${playerSelection}`);
        console.log("Empate!!");
        contadorEmpate++

    } 

    if (playerSelection == "pedra" && computerSelection == "tesoura") {

        statusText.innerHTML = "Você Ganhou!!"
        contadorPlayer++
        placarPlay.innerHTML = contadorPlayer

        /*
        console.log(`Resultado: ${playerSelection} ganha de ${computerSelection}`);
        console.log("Player Ganhou!!");
        contadorPlayer++
        */

    } else if (playerSelection == "pedra" && computerSelection == "papel") {

        statusText.innerHTML = "Maquina Ganhou!!"
        contadorMaquina++
        placarMaq.innerHTML = contadorMaquina

        /*
        console.log(`Resultado: ${playerSelection} perdeu para ${computerSelection}`);
        console.log("Maquina Ganhou!!");
        contadorMaquina++
        */

    }

    if (playerSelection == "tesoura" && computerSelection == "papel") {

        statusText.innerHTML = "Você Ganhou!!"
        contadorPlayer++
        placarPlay.innerHTML = contadorPlayer

        /*
        console.log(`Resultado: ${playerSelection} ganha de ${computerSelection}`);
        console.log("Player Ganhou!!");
        contadorPlayer++
        */

    } else if (playerSelection == "tesoura" && computerSelection == "pedra") {

        statusText.innerHTML = "Maquina Ganhou!!"
        contadorMaquina++
        placarMaq.innerHTML = contadorMaquina

        /*
        console.log(`Resultado: ${playerSelection} perdeu para ${computerSelection}`);
        console.log("Maquina Ganhou!!");
        contadorMaquina++
        */

    }

    if (playerSelection == "papel" && computerSelection == "pedra") {

        statusText.innerHTML = "Você Ganhou!!"
        contadorPlayer++
        placarPlay.innerHTML = contadorPlayer

        /*
        console.log(`Resultado: ${playerSelection} ganha de ${computerSelection}`);
        console.log("Player Ganhou!!");
        contadorPlayer++
        */

    } else if (playerSelection == "papel" && computerSelection == "tesoura") {

        statusText.innerHTML = "Maquina Ganhou!!"
        contadorMaquina++
        placarMaq.innerHTML = contadorMaquina

        /*
        console.log(`Resultado: ${playerSelection} perdeu para ${computerSelection}`);
        console.log("Maquina Ganhou!!");
        contadorMaquina++
        */

    }

    verificar();
}

function verificar() {
    
    if (contadorPlayer == 5) {
        alert("Você ganhou da maquina Parabens!!");
        contadorMaquina = 0;
        contadorPlayer = 0;

        placarPlay.innerHTML = 0;
        placarMaq.innerHTML = 0;
    }

    if (contadorMaquina == 5) {
        alert("Putz não foi dessa vez");
        contadorMaquina = 0;
        contadorPlayer = 0;

        placarPlay.innerHTML = 0;
        placarMaq.innerHTML = 0;
    }

    console.log(`Contagem de Empate: ${contadorEmpate}`);
    console.log(`Contagem de Vitorias Player: ${contadorPlayer}`);
    console.log(`Contagem de Vitorias Maquina: ${contadorMaquina}`);
    
}

/*

//Executa o Jogo 5 vezes
function game() {

    /*
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

function nomeAleatorio(nomes) {
    var indice = Math.floor(Math.random() * nomes.length);
    return nomes[indice];
  }


console.log(nome); // exibe um nome aleatório da lista
*/