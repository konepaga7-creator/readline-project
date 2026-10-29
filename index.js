const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout,
});

rl.question("Quel est le nombre : ",(answer)=>{
    const number = Number(answer);
    console.log("le nombre est: ",number);
    
    rl.close();
});