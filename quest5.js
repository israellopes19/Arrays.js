var entrada = require('readline-sync');
var idades = [];
var media = 0;

for(var i=0;i < 5;i++){
    idades[i] = parseInt(entrada.question("Informe idade:"));
}

for(var i=0;i < 5;i++){
    media = parseInt(media + idades[i]);
}
    console.log(media/5);    


 
