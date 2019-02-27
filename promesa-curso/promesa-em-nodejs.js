const fs = require('fs');
const util = require('util');

/*old -> callback
fs.readFile('data1.txt', (err,data)=>{
    console.log(data.toString());
}); */

/*new -> Promise 
new Promise ((resolve,reject) => {
    fs.readFile('data1.txt',(err,data)=>{
        if(err){
            reject(err)
        }else {
            resolve(data);
        } 
    })
}) */
//tip : se usa el modulo util para compilar todo lo anterior en una sola linea
// read retorna una promesa con la data leida del archivo entregado

var read = util.promisify(fs.readFile);
read('data1.txt')
.then(data => {
    console.log(data.toString());
})
.catch(err => {
    console.log(err);
})