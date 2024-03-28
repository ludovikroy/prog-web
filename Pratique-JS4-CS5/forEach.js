let tableau = ["un", "deux", "trois", "quatre"];

//Boucle for normal
// for (let index = 0; index < tableau.length; index++) {
//     console.log(tableau[index], index);

// }

//Boucle ForEach : Sans index
tableau.forEach((element) => {
  console.log(element);
});

//Boucle ForEach : Avec index
tableau.forEach((unElement, index) => {
  console.log(unElement, index);
});


//Boucle ForEach : Prend une fonction
const uneFonction  = (element, index) => {
    console.log(element, index);
}

