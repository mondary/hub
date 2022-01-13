let unChiffre = 24;

//Ici le 12 va venir écraser le 24
unChiffre = 12;

// Pour loguer le contenu de la variable il ne faut pas mettre de guillement, rien ...
console.log(unChiffre);

// Si je mets des guillemets, cela devient du texte (string)
console.log("unChiffre");

//Il est possible de concaténer 2 variables comme ceci
let ChaineDeCaracteres = "Le chiffre attendu est : " + unChiffre;

console.log(ChaineDeCaracteres);

//Il est possible d'échapper un guillemet avec un / ou \ devant le '
let chaineDeCaracteres2 = `Il fait actuellement : ${unChiffre} degrés`;

console.log(chaineDeCaracteres2);
