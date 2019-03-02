const process = require('process');
const readline = require('readline');
const mdLink = require ('./main-module.js');

//Creacion interfaz e interaccion usuario-modulo
if (require.main === module) {
  console.log('Ingresar archivo o directorio');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.on('line', (input) => {
    console.log(`Received: ${input}`);
    let answer = mdLink.is_dir(input);
    console.log(answer);
    mdLink.mdLinks(input, validate=false)
    .catch((error) =>{
       console.log(error);
    });
    rl.close()
  });
}

