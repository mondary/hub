let x = 3;
let y = 8;
let Z;

//la condition OU s'ecrit double pipes || (OPTION +SHIT +L)
if (x === y || x < 3) {
  console.log("Vrai, car x n'est pas égale à y mais est inférieur à 3");
} else {
  console.log("Faux, aucune des conditions n'est vraies");
}

//la condition ET s'ecrit double esperluette && (OPTION +SHIT +L)
if (x === y && x < 3) {
  console.log("Vrai");
} else {
  console.log("Faux, une des conditions, ou les deux, ne sont pas remplies");
}
