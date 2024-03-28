//console.log("Salut ! - Côté fichier .js");

//Ne pas déclarer les variables ainsi.
// var variable;
// var la_variable;
// var laVariable;
// var michael = "Étudiant sérieux";
// var michael = "etudiant pas sérieux";


//Plutôt comme ceci
let uneVariable = "15";
uneVariable = uneVariable + 1;

const port = "3030";
//port = "5500"; (on ne peut pas faire ça, on ne peut pas modifier une constante)

let bool = true;
bool = "string"; //Une variable peut prendre tout ce que tu lui donnes (non-typé). Donc même si tu l'as mettais 'true' donc bool, elle peut devenir un string.

let boolean = true; //boolean
let string = "une string"; //String
let nombre = 11256 //nombre
let float = 1.02 //nombre décimal
let tableau = ["Janvier", "2", 3]; //tableau, liste
let objetJSON = {
    nom : "Lilia",
    profession : "Enseignante",
    age : 42
};
let uneFonction = () => {
    return "Hello";
}

//Pour obtenir le type de la variable, faire :
console.log(typeof boolean);
console.log(typeof string);
console.log(typeof nombre);
console.log(typeof float);
console.log(typeof tableau);
console.log(typeof objetJSON);
console.log(typeof uneFonction);



console.log(michael);