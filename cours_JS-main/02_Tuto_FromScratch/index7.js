//la chaine de caracteres (string)
let string = "Je suis une chaine 28190089876$,ZZ";

//Les chiffre, il ne faut pas mettre de guillemets (number)
let number = 24;

//Le boolen, c'est oui ou non, noir ou blanc, un ou deux, c'est un choix binaire
let boolean = true;

//le tableau (array), toujours entre crochets
let array = ["je", "suis", 24, false];

//les objects toujours entre accolades
let object = {
  prenom: "audrey",
  age: 34,
  ville: "Bordeaux",
};

//typeof sert a savoir quelle est le type de la variable
// array et object n'est pas bien distingué par JS, il dira toujours array est un object
console.log(typeof array);

//Undefined, la variable arbre exsite, mais pas défini car pas de valeur
let arbre;
console.log(arbre);

//Null, la valeur est défini, commme null
let feuille = null;
console.log(feuille);
