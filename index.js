
let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
let geneSeries = 1;


//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
console.log(dna);

dna = dna.replace("GTC","AGG");

console.log(dna); //revised

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dna.indexOf("CAT")) {
  console.log("CAT gene found");
}else {
  console.log("CAT gene not found")
}


//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
const input = require("readline-sync");
geneSeries = input.question("What number gene series are you requesting? ");

console.log(`DNA series ${geneSeries} is ` + (dna.slice((geneSeries * 4)-4,(geneSeries * 4)-4+3)));

//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.length} characters long`);


//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.

console.log(`taco ${dna.slice(40,43)}`);
//unable to get .toLowerCase to work even as a stand alone request