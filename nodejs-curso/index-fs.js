const fs = require('fs');
/*
fs.writeFile('./texto.txt','linea uno',function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

fs.readFile('./texto.txt',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
*/
var texto = fs.readFileSync('./texto.txt', 'utf8');
console.log(texto); 
console.log(typeof(texto));