const user = {
  age: 42,
  salaire: 150000,
  fonction: "Développeur web",
};

const userTableau = ["age", "salaire", "fonction"];
const userTableau2 = [42, 150000, "Développeur web"];

console.log(user.age);
console.log(user.salaire);
console.log(user["fonction"]);
console.log(userTableau2[1]);

//Objet et tableau, même en constante on peut les changer, mais pas les écraser totalement, simplement changer leur contenu.
const objet = {};
const tableau = [];

/** Déclarer 3 constantes qui selon ce qui suit : nom
 * - nom
 * - prenom
 * - courriel
 * - age
 * - Transformer les en objet qui contient les 4 informations.
 * - Utiliser un console.log pour les afficher.
 **/

const nom = "Roy";
const prenom = "Ludovik";
const courriel = "ludovikroy@gmail.com";
const age = 26;
const solde = 2354;
const nomBanque = "BNC";

const moi = {
  nom: nom,
  prenom: prenom,
  courriel: courriel,
  age: age,
};

console.log(
  "Je m'appelle " +
    moi.prenom +
    " " +
    moi.nom +
    ". J'ai " +
    age +
    " ans et vous pouvez me rejoindre à l'adresse courriel suivante : " +
    moi.courriel +
    "."
);

console.log(moi);

//Peut mettre des objets dans un objet
const personne = {
  user: {
    nom: nom,
    prenom: prenom,
  },
  compteBanque: {
    solde: solde,
    nomBanque: nomBanque,
  },
};

console.log(personne);

//Permet d'ajouter un attribut
personne.user.courriel = courriel;

console.log(personne);

//Tableau
const unTableau = [0, 1, 2, 3];
unTableau[4] = 12;
unTableau.push(25);
console.log(unTableau);

let object2 = { a: "a", b: "b" };
object2.c = "c";

//Les 3 petits points permettent de copier les éléments de ce qui suit. Exemple ...object2 copie les éléments de objets2 et non son adresse mémoire.
object2 = { ...object2, d: "d" };

console.log(object2);

//Tester undefined
if (personne.user.phone == undefined) {
  personne.user.phone = "5142345432";
}
console.log(personne);

if (!("adresse" in personne.user)) {
  personne.user.adresse = "1342 rue des perdues";
  console.log(personne.user);
} else {
  console.log("Trouvé!");
}

console.log(personne.user.hasOwnProperty("zipcode")); //false
console.log(personne.user.zipcode); //undefined