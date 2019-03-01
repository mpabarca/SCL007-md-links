const fs = require('fs');
const fetch = require('node-fetch');
const util = require('util');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');

//creacion de modulo
module.exports = {

mdLinks: async (pathRuta) => {
    let route = path.resolve(documentUser);
    var read = util.promisify(fs.readFile);
    let readMarkdown = (await read(route)).toString();
    let links = markdownLinkExtractor(readMarkdown);
    let arrayLink= [];
    links.forEach(function(link){
      let arrayFetch = fetch(link)
        .then((res) => {
          let objectLink = {
            href: link,
            text: 'texto',
            file: route,
            status:res.status
          }
          return objectLink;
        })
        .catch((error) =>{
          let fail = {
            hrefLink: link,
            statusLink: 'error'
          }
        })
      
      arrayLink.push(arrayFetch);
    })
    Promise.all(arrayLink)
      .then((values)=>{
          console.log(values)
      })
      .catch(console.error)
  },
validate: (link) =>{
    
}


} 