const fs = require('fs');
const util = require('util');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');

//creacion de modulo
module.exports = {
//Función que verifica si e input entregado es archivo o directorio
is_dir: (pathUser) => {
    try {
        var stat = fs.lstatSync(pathUser);
        return stat.isDirectory();
    } catch (e) {
        // lstatSync throws an error if path doesn't exist
        return false;
    }
},
//Función que lee archivo y entrega array de links presentes en tal archivo .md
readExtractor: async (pathUser)=>{
    let route = path.resolve(pathUser);
    var read = util.promisify(fs.readFile);
    let readMarkdown = (await read(route)).toString();
    let links = markdownLinkExtractor(readMarkdown);
    return links;
}

}
