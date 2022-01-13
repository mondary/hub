//On peut faire des opérations directement dans la console
console.log(4 + 4);
console.log(4 - 3);
console.log(4 * 4);
console.log(4 / 3);
console.log(4 ** 5);

let total = 2;
let x = 4;

// ici on essaye de faire total + 1, soit 2+1
total = total + 1;
console.log(total);

// mais on on peut incrémenter une valeur avec ++
total++;
console.log(total);

// et on peut egalement faire nom de la variable--
total++;
total++;
total++;
console.log(total);

// pour ajouter 5 a chaque fois
total += 5;
total += 5;
total += 5;
console.log(total);

// pour multiplier par 5 a chaque fois
total *= 5;
console.log(total);

//il faut parfois mettre les ++ devant
total = ++x;
console.log(total);

//mais on peut arriver au même resultats en 2 lignes
x++;
total = x;
console.log(total);
