/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
• con difficoltà 1 => tra 1 e 100
• con difficoltà 2 => tra 1 e 81
• con difficoltà 3 => tra 1 e 49

Il computer deve generare 16 numeri casuali nello stesso range 
della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella:
• se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
• la cella si colora di rosso e la partita termina,
• altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando:
• il giocatore clicca su una bomba
• o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// Selezione livello di difficoltà e generazione griglia in un input select
let selectInput = document.getElementById("selection");

// Griglia di gioco
let cells = document.querySelector(".cells");

// Bottone per iniziare la partita
let playButton = document.getElementById("btn");

// Funzione per generare numeri casuali
function generateRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let bombs = [];
for (let i = 0; i < 16; i++) {
  const randomBombs = generateRandomNumbers(1, 50);
  bombs.push(randomBombs);
}
//   console.log(bombs)

// Funzione per inizializzare la griglia di gioco
const initialize = () => {
  let bombs = generateRandomNumbers(1, 16);

  if (selectInput.value === "seleziona") {
    cells.innerHTML = ""; // Cancello la griglia di gioco
    alert("Selezionare un livello di difficoltà"); //avviso l'utente
  } else if (selectInput.value === "difficile") {
    // Se l'utente ha selezionato il lvl facile
    cells.innerHTML = "";
    // Genero una griglia di gioco con 50 celle
    for (let i = 1; i <= 50; i++) {
      // Genero una griglia di gioco con 49 celle
      const randomNumber = i; // generateRandomNumbers(1, 50);
      let cell = document.createElement("div");
      cell.innerHTML = randomNumber;
      // Assegno la classe cell alla cella
      cell.classList.add("cell");

      // Funzione per colorare le caselle al click
      cell.addEventListener("click", () => {
        // Assegno un evento click alla cella
        // Seleziono la cella
        if (bombs.includes(randomNumber)) {
          cell.classList.add("selected_bomb");
        } else {
          cell.classList.add("selected");
        }
      });
      // Aggiungo la cella alla griglia di gioco
      cells.append(cell);
    }
  } else if (selectInput.value === "medio") {
    cells.innerHTML = "";
    for (let i = 1; i <= 80; i++) {
      const randomNumber = i; // generateRandomNumbers(1, 80);
      let cell = document.createElement("div");
      cell.innerHTML = randomNumber;
      cell.classList.add("cell");
      cell.addEventListener("click", () => {
        cell.classList.add("selected");
      });
      cells.append(cell);
    }
  } else if (selectInput.value === "facile") {
    cells.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
      const randomNumber = i; // generateRandomNumbers(1, 100);
      let cell = document.createElement("div");
      cell.innerHTML = randomNumber;
      cell.classList.add("cell");
      cell.addEventListener("click", () => {
        cell.classList.add("selected");
      });
      cells.append(cell);
    }
  }
};

// Assegno un evento click al bottone per iniziare la partita
playButton.addEventListener("click", initialize);

/* 
// Il computer deve generare 16 numeri casuali nello stesso range 
della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
*/
