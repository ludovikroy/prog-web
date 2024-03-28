// let index = 0;

// do {
//     index++;
//     console.log(index);
// } while (index < 5) ;

// index = 0

// while ( index < 5){
//     index++;
//     console.log(index);
// }

// const annee = [
//   ["Janvier", "Février", "Mars"],
//   ["Avril", "Mai", "Juin"],
//   ["Juillet", "Août", "Septembre"],
//   ["Octobre", "Novembre", "Décembre"],
// ];

// let index = 1;
// let saison = 1;
// document.write("Les mois de l'année<br></br>");
// annee.forEach((element) => {
//   if (saison == 1) document.write("<br>Hiver<br>");
//   if (saison == 2) document.write("<br>Printemps<br>");
//   if (saison == 3) document.write("<br>Été<br>");
//   if (saison == 4) document.write("<br>Automne<br>");
//   element.forEach((mois) => {
//     document.write(index + " - ", mois + "<br>");
//     index++;
//   });
//   saison++;
// });

const annee = {
  Hiver: ["Janvier", "Février", "Mars"],
  Printemps: ["Avril", "Mai", "Juin"],
  Été: ["Juillet", "Août", "Septembre"],
  Automne: ["Octobre", "Novembre", "Décembre"],
};

// for (const saison in annee){
//     console.log(saison);
//     console.log(annee[saison]);
// }

// console.log(Object.keys(annee));

// Object.keys(annee).forEach((x) => {
//     console.log(x);
//     console.log(annee[x]);
// });

// console.log(Object.values(annee));