const casual = require("casual").pt_BR;



for(var i = 0; i < 10; i++) {
    console.log("Nome e sobrenome: "+casual.full_name+" "+casual.last_name);
    console.log("Rua: "+casual.street);
    console.log("Cidade: "+casual.city);
    console.log("País: "+casual.country);
    console.log("CEP: "+casual.log+"\n");
}