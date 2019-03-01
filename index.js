const process = require('process');
const readline = require('readline');
const mdLink = require ('./module.js');

const documentUser = process.argv[2];

if (require.main === module) {
  console.log('Ingresar archivo o directorio');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.on('line', (input) => {
    console.log(`Received: ${input}`);
    mdLink.mdlinks(path, option)
      .then((res) => {
      console.log(res); 
    })
    .catch((error) =>{
       console.log(error);
    });
    rl.close()
  });
}

