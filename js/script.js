var output=document.getElementById("out");
var lista16 = [];
var userNum = [];
var win = "Complimenti hai vinto! il tuo punteggio è di ";
var difficoltà = insertMaxNumber("Scegli il livello di difficoltà tra 0 e 2", 2,0);


//Recupero il massimo numero di elementi in funzione del livello di difficoltà
var maxRandom = difficult(difficoltà);

console.log(maxRandom);

//Numero massimo di mine generate dal pc
var maxNumbers = insertMaxNumber("Quante mine vorresti che fossero generate?", (maxRandom-1), 1);

//Popolo un array con 16/n elementi unici

lista16 = randomList(maxRandom, maxNumbers);

console.log(lista16)

//Numero di possibilità di inserimento
chance = maxRandom - maxNumbers;

//inserisco n numeri, e verifico per ogni numero inserito se è presente nell'array
//se è presente esco dal ciclo
//è presente anche un controllo per impedire l'inserimento di due valori identici
while(userNum.length<chance){
  var insertNum = insertMaxNumber("Inserisci il numero", (maxRandom), 1);
  if(!(isInArray(userNum, insertNum))){
    if(!(isInArray(lista16, insertNum))){
      userNum.push(insertNum);
    }else{
      win = "!!!Purtroppo hai beccato una mina!!! Il tuo punteggio è di "
      break;
    }
  }else{
    alert("Non inserire due volte lo stesso numero");
  }
}

output.innerText += win + userNum.length + " punti.";





                            // FUNZIONI

//Funzione che dato un messaggio in ingresso, restituisce il numero inserito dall'utente se e solo se è un numero, altrimenti ripete la richiesta
function insertMaxNumber(message, max , min){
  var num = parseInt(prompt(message));
  while(isNaN(num)|| num > max || num < min){
      var num = parseInt(prompt("Attenzione il valore deve essere numerico e rientrare nel range "+ min+"-"+max));
  }
  return num;
}

//Funzione che dato in ingresso un array e un elemento, verifica se l'elelmento è presente all'interno dell'array
function isInArray(array, element) {
  for ( var x = 0 ; x < array.length ; x++){
    if(element === array[x]){
      return true;
    }
  }
  return false;
}

//Funzione che resistuisce un numero random tra 1 e max
function getRandomNumber(max){
  return (Math.floor(Math.random() * (max ))+1);
}

//Funzione che resistuisce un numero in funzione del livello di difficoltà 
function difficult(level){
  switch(level) {
    case 0:
      return 100;
      break;
    case 1:
      return 80;
      break;
    case 2:
      return 50;
      break;
    default:
  }
}


//Popolo un array con n elementi unici
function randomList(rangePop, n){
  var lista =[];
  while(lista.length < n){
    var randNum = getRandomNumber(rangePop);
    if(!(isInArray(lista, randNum))){
      lista.push(randNum);
    }
  }
  return lista;
}




// //Funzione che dato un messaggio in ingresso, restituisce il numero inserito dall'utente se e solo se è un numero, altrimenti ripete la richiesta
// function insertNumber(message){
//   var num = parseInt(prompt(message));
//   while(isNaN(num)){
//       var num = parseInt(prompt("Attenzione il valore deve essere numerico"));
//   }
//   return num;
// }


// //Con lo switch scelgo il valore massimo per la generazione dei numeri Random
// switch(difficoltà) {
//   case 0:
//     maxRandom = 100;
//     break;
//   case 1:
//     maxRandom = 80;
//     break;
//   case 2:
//     maxRandom = 50;
//     break;
//   default:
// }


// while(lista16.length < maxNumbers){
//   var randNum = getRandomNumber(maxRandom);
//   if(!(isInArray(lista16, randNum))){
//     lista16.push(randNum);
//   }
// }