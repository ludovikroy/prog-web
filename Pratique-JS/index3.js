//Les opérateurs

const a = 1;

let b = 1;
b = b + 3;
//ou
b += 3;

b = b - 5;
b -= 5; //même chose

b++; // équivalent de b + 1
b--; // équivalent de b - 1

const x = 3;
const y = "3";
if (x == y) console.log("Youpi!"); //Va donner Youpi!, car Pas typé, donc 3 == 3
else console.log("Bof!");
if (x === y)
  console.log(
    "Youpi!"
  ); //Va donner Bof!, car Typé, donc 3 (int) != "3" (String)
else console.log("Bof!");

if (true == 1) console.log("Youpi!"); //Donne Youpi!, car 1 = True
else console.log("Meh!");
if (true === 1) console.log("Youpi!"); //Donne Meh!, car 1 (int) != True (bool)
else console.log("Meh!");
