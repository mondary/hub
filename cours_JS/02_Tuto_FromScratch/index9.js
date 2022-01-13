//on crée 2 variables
let x = 2;
let y = 5;

if (x < y) {
  console.log("x est un inférieur à y");
}

//mais on peut aussi ajouter un sinon
if (x < y) {
  console.log("x est un inférieur à y");
} else {
  console.log("x est supérieur à y");
}

//mais on peut aussi voir si la valeur existe, si X est true
if (x) {
  console.log("x existe)");
}

//on ajoute un point d'intérogation pour dire l'inverse, si X est false
if (!x) {
  console.log("x n'existe pas)");
}

//pour tester l'egalité il faut mettre ===, car === test si la valeur et le type sont les même, alors que == teste uniquement la valeur
if (x === y) {
  console.log("x est égale à y");
} else {
  console.log("x n'est pas égale à y");
}

//est ce que X n'est pas egale à Y
if (x !== y) {
  console.log("x est égale à y");
} else {
  console.log("x n'est pas égale à y");
}
