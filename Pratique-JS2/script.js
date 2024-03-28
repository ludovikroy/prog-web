function operateurs() {
  const a = 1; //affectation
  let b = 0; //initialisation

  b = b + 1; //équivalent de b++ ou b += 1
  b = b - 1; //équivalent de b-- ou b-= 1

  const c = "1";

  if (c == a) {
    //Donnerait 'Différents' si je mettais c === a;
    console.log("Pareils");
  } else {
    console.log("Différents");
  }
}

function chaineDeCaracteres() {
  console.log("Bonjour " + "toi!");
  let uneChaine = "pré";
  uneChaine += "fixe";

  console.log(uneChaine);
}

function virgule() {
  let x = 1;
  let y = 5;
  x = ((x = x + y + 1), (x += 10), x);
  console.log(x, y);
}

function conversion() {
    console.log(String(1));
    console.log(Number("22"));
    console.log("String 1", Boolean("1"));
    console.log("Number 1", Boolean(1));
    console.log("Number 555", Boolean(555));
    console.log("String 555", Boolean("555"));
    console.log("Number 0", Boolean(0));
}

function trueOrFalse() {
    //Autres exemples 
    Boolean({}); // true
    Boolean([]); // true
    Boolean(Symbol());  // true
    Boolean(function() {}); // true
    Boolean('test'); // true
    Boolean(22); // true
    Boolean(''); // false
    Boolean(0); // false
    Boolean(NaN); // false
    Boolean(null); // false
    Boolean(undefined); // false
    Boolean(false); // false
}

function conversionEnNombre () {
    Number(null); // 0
    Number(undefined); // NaN
    Number(true); // 1
    Number(false);// 0
    Number(" 22 "); // 22
    Number("-12.32"); // -12.32
    Number(""); // 0
    Number(" 55s "); // NaN
    Number(42); // 42
    Number(Symbol('bonjourl')); // TypeError
}

function valRef () {
    let tableau = [1, 2, 3];
    let tableau2 = tableau;
    
    // console.log(tableau, tableau2);
    
    tableau2[2] = true;
    
    // console.log(tableau, tableau2);
    
    let exemple = "String";
    let exemple2 = exemple;
    
    exemple2 += "2";
    
    console.log(exemple, exemple2);
}

// const nomDeLaFonction2 = () => { //Nouvelle manière de créer une fonction.

// }

function coalescence () {
    console.log(false && true);
    console.log(true || false);

    const a = true;
    const b = false;

    if (a && b){
        console.log("Une séquence de logique.");
    } else {
        console.log("Une autre séquence de logique.");
    }
}

function conditionTernaire(){
    //Condition ternaire.
    //condition ? La séquence logique de true : La séquence logique de false;
    (true) ? console.log("La séquence logique de true") : console.log("La séquence logique de false");
}

function coalescenceDesNull() {
    //Si la variable est "null", il va afficher le message à droite.
    //Si la variable a une valeur, il affiche la valeur.
    const uneVariable = null;
    console.log(uneVariable ?? "Non défini");

    const var1 = null;
    const var2 = null;
    const var3 = 42;
    //Si var1 == null, affiche le suivant, mais si le suivant (var2) == null, affiche le suivant, donc affiche 42 (var3)
    console.log(var1 ?? var2 ?? var3 ?? "N'importe quoi!");
}

coalescence();
