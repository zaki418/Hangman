const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Ord som kan spelas med
const ordLista = ["zaki", ];

let slumpatIndex = Math.floor(Math.random() * ordLista.length);

let slumpatOrd = ordLista[slumpatIndex];

console.log(slumpatOrd);

const status = [];

for (let i = 0; i < slumpatOrd.length; i++) {
  status.push("*");
}

console.log(status.join(""));

let försök = 7;
//Nu har du 7 försöker kvar til att gissa rätt
rl.on("line", (input) => {
  console.log(`Received: ${input}`);
  if (input.length === 1) {
    let rättGissat = false;
    for (let i = 0; i < slumpatOrd.length; i++) {
      if (input === slumpatOrd[i]) {
        rättGissat = true;
        status[i] = input;
      }
    }
    if (rättGissat == true) {
      console.log("Du gissade rätt");
    } else {
      försök--;
      console.log("Du gissade fel, du har: " + försök + " försök kvar.");
    }
  } else {
    console.log("Skriv enbart in ett tecken!");
  }
  console.log(status.join(""));

  if (status.join("") === slumpatOrd) {
    console.log("You win!");
    process.exit();
    //Grattis du vann!
  } else if (försök == 0) {
    console.log("You Lose!");
    process.exit();
  }
  //Tyvärr så förlora du
});