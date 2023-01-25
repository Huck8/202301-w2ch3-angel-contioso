// NÚMERO ALEATORIO

const randomCard = () => Math.ceil(Math.random() * 15);
// Nos crea un objeto en una arrow function por eso los paréntesis
const bingoCardFunc = () => ({ number: randomCard(), matched: false });

//Nos crea un array de objetos de 15 de longitud
let showBingoCard = Array.from({ length: 15 }, () => bingoCardFunc());
const usedNumbers = [];
let turns = 0;
// Nos cambia el array de objetos
const changesBingoCard = () => {
  showBingoCard = Array.from({ length: 15 }, () => bingoCardFunc());
  return showBingoCard;
};

console.log(bingoCardFunc());
console.log(showBingoCard);
console.table(showBingoCard);

// Nos crea una cartón separado en líneas
const bingoCard = () => {
  console.log(`Línea 1`);
  console.log(
    `${showBingoCard[0].number} ${showBingoCard[1].number} ${showBingoCard[2].number} ${showBingoCard[3].number} ${showBingoCard[4].number}`
  );
  console.log(`Línea 2`);
  console.log(
    `${showBingoCard[5].number} ${showBingoCard[6].number} ${showBingoCard[7].number} ${showBingoCard[8].number} ${showBingoCard[9].number}`
  );
  console.log(`Línea 3`);
  console.log(
    `${showBingoCard[10].number} ${showBingoCard[11].number} ${showBingoCard[12].number} ${showBingoCard[13].number} ${showBingoCard[14].number}`
  );
};

console.log(bingoCard());

const bingoPlayer = () => {
  let namePlayer = prompt("Welcome, insert your name");
  while (namePlayer === "" || namePlayer === null) {
    namePlayer = prompt("Welcome, insert your name");
  }
  console.log(`Hola ${namePlayer.toUpperCase()} su cartón es: `);
  bingoCard();
  /*  changesCard(); */
};

const changesCard = () => {
  let askCard = prompt("Do you want this card? y/n");

  while (askCard === "" || askCard === null || askCard === +askCard) {
    askCard = prompt("Do you want this card? y/n");
  }
  while (askCard === "n") {
    console.log("Your new card is: ");
    console.table(changesBingoCard()); // enseña el cartón nuevo en una tabla de la
    console.log(bingoCard());
    askCard = prompt("Do you want this card? y/n");
    if (askCard === "y") {
      break;
    }
  }
  /* return console.table(changesBingoCard()); */
};
let attempsRandomNumber = Math.ceil(Math.random() * 15);
function attemps() {
  do {
    attempsRandomNumber = Math.ceil(Math.random() * 15);
    /*  console.log(attempsRandomNumber); */
    nextAttemp = confirm(`The number has been ${attempsRandomNumber}`);
    console.log(attempsRandomNumber);
    compare();
    continuePlaying = confirm("Continue playing?");
  } while (continuePlaying === true || continuePlaying === null);
  console.log(attempsRandomNumber);
  return attempsRandomNumber;
}

function compare() {
  /* let attempsRandomNumber = Math.floor(Math.random() * 15 + 1); */
  for (let i = 0; i < showBingoCard.length; i++) {
    if (attempsRandomNumber === showBingoCard[i].number) {
      showBingoCard[i].matched = true;
    }
    if (showBingoCard[i].matched === true) {
      console.log(`the nnumber find is  ${showBingoCard[i].number}`);
      showBingoCard[i].number = "X";
    }
  }
  bingoCard();
  console.table(showBingoCard);
  if (
    showBingoCard[0].matched === true &&
    showBingoCard[1].matched === true &&
    showBingoCard[2].matched === true &&
    showBingoCard[3].matched === true &&
    showBingoCard[4].matched === true
  ) {
    alert("YOU HAVE DONE THE 1 LINE, 10€");
  }
  if (
    showBingoCard[5].matched === true &&
    showBingoCard[6].matched === true &&
    showBingoCard[7].matched === true &&
    showBingoCard[8].matched === true &&
    showBingoCard[9].matched === true
  ) {
    alert("YOU HAVE DONE THE 2 LINE, 20€");
  }
  if (
    showBingoCard[10].matched === true &&
    showBingoCard[11].matched === true &&
    showBingoCard[12].matched === true &&
    showBingoCard[13].matched === true &&
    showBingoCard[14].matched === true
  ) {
    alert("YOU HAVE DONE THE 3 LINE, 30€");
  }
  turns++;
  if (
    showBingoCard[0].matched === true &&
    showBingoCard[1].matched === true &&
    showBingoCard[2].matched === true &&
    showBingoCard[3].matched === true &&
    showBingoCard[4].matched === true &&
    showBingoCard[5].matched === true &&
    showBingoCard[6].matched === true &&
    showBingoCard[7].matched === true &&
    showBingoCard[8].matched === true &&
    showBingoCard[9].matched === true &&
    showBingoCard[10].matched === true &&
    showBingoCard[11].matched === true &&
    showBingoCard[12].matched === true &&
    showBingoCard[13].matched === true &&
    showBingoCard[14].matched === true
  ) {
    alert(
      `YOU HAVE WON THE BINGO IN  ${turns} TURNS\n********100.000€********`
    );
  }
  usedNumbers.push(attempsRandomNumber);
  console.log("This numbers get ot of the bombo " + usedNumbers);
  return usedNumbers;
}
function toPlay() {
  bingoPlayer();
  changesCard();
  attemps();
}

toPlay();
