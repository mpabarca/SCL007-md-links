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
    console.log(`Received: ${input}`);

    let answer = helper.is_dir(input);
    console.log(answer);

/*    mdLink.mdLinks(input)
    .catch((error) =>{
       console.log(error);
    });
*/
    mdLink.stats(input);
    rl.close()
  });
}

