const process = require('process');
const readline = require('readline');
const mdLink = require ('./main-module.js');
const helper = require('./helper-module.js');

//Creacion interfaz e interaccion usuario-modulo
if (require.main === module) {
  console.log('Ingresar archivo o directorio');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.on('line', (input) => {
    let answer = helper.is_dir(input);
    console.log(answer);
    if (answer === false){
      let received = input.split('--');
      if (received.length === 1){
        mdLink.mdLinks(input)
        .catch((error) =>{
          console.log(error);
        });
      }else if (received[1]==='validate'){
        received[0] = received[0].slice(0, -1);
        mdLink.validate(received[0])
        .catch((error) =>{
          console.log(error);
        });
      }else if (received[1]==='stats'){
        received[0] = received[0].slice(0, -1);
        mdLink.stats(received[0])
        .catch((error) =>{
          console.log(error);
        });
      }
    }else{
      /* FUNCION RECURSIVA
      let received = input.split('--');
      if (received.length === 1){
        mdLink.mdLinks(input)
        .catch((error) =>{
          console.log(error);
        });
      }else if (received[1]==='validate'){
        received[0] = received[0].slice(0, -1);
        mdLink.validate(received[0])
        .catch((error) =>{
          console.log(error);
        });
      }else if (received[1]==='stats'){
        received[0] = received[0].slice(0, -1);
        mdLink.stats(received[0])
        .catch((error) =>{
          console.log(error);
        });
      }
      */
    }
    rl.close()
  });
}

