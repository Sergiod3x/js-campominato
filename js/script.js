var output=document.getElementById("out");
var lista16 = [];
var userNum = [];
var difficoltà = insertNumber("Scegli il livello di difficoltà tra 0 e 2");
var maxRandom = 0;

while(difficoltà>2||difficoltà<0){
  difficoltà = insertNumber("Verifica che il numero sia compreso tra 0 e 2");
}

switch(difficoltà) {
  case 0:
    maxRandom = 100;
    break;
  case 1:
    maxRandom = 80;
    break;
  case 2:
    maxRandom = 50;
    break;
  default:
}

console.log(maxRandom);

//Popolo un array con 16 elementi unici

while(lista16.length<16){
  var randNum = getRandomNumber(maxRandom);
  if(!(isInArray(lista16, randNum))){
    lista16.push(randNum);
  }
}
console.log(lista16)

chance = maxRandom - 16;

//inserisco n numeri, e verifico per ogni numero inserito se è presente nell'array
//se è presente esco dal ciclo
//è presente anche un controllo per impedire l'inserimento di due valori identici
while(userNum.length<chance){
  var insertNum = insertNumber("Inserisci il numero");
  if(!(isInArray(lista16, insertNum))){
    if(!(isInArray(userNum, insertNum))){
      userNum.push(insertNum);
    }
  }else{
    break
  }
}




output.innerText += userNum.length;


//Funzione che dato un messaggio in ingresso, restituisce il numero inserito dall'utente se e solo se è un numero, altrimenti ripete la richiesta
function insertNumber(message){
    var num = parseInt(prompt(message));
    while(isNaN(num)){
        var num = parseInt(prompt("Attenzione il valore deve essere numerico"));
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




