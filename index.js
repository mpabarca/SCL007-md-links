const process = require('process');
const readline = require('readline');
const mainModule = require ('./lib/main-module.js');
const helper = require('./lib/helper-module.js');

var mdLinks=(function(){

  //Creacion interfaz e interaccion usuario-modulo
  if (require.main === module) {
    console.log('Ingresar archivo o directorio');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.on('line', (input) => {
      let answer = helper.is_dir(input);
      if (answer === false){
        let received = input.split('--');
        if (received.length === 1){
          mainModule.mdLink(input)
          .catch((error) =>{
            console.log(error);
          });
        }else if (received[1]==='validate'){
          received[0] = received[0].slice(0, -1);
          mainModule.validate(received[0])
          .catch((error) =>{
            console.log(error);
          });
        }else if (received[1]==='stats'){
          received[0] = received[0].slice(0, -1);
          mainModule.stats(received[0])
          .catch((error) =>{
            console.log(error);
          });
        }
      }else{
        /* FUNCION RECURSIVA */
      }
      rl.close()
    });
  }
})
 
exports.mdLinks = mdLinks;