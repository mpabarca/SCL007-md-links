const fs = require('fs');
const fetch = require('node-fetch');
const util = require('util');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');

//creacion de modulo
module.exports = {

mdLinks: async (pathUser , option) => {
    let route = path.resolve(pathUser);
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

validate: async (pathUser , option) => {
  let route = path.resolve(pathUser);
    var read = util.promisify(fs.readFile);
    let readMarkdown = (await read(route)).toString();
    let links = markdownLinkExtractor(readMarkdown);
    let arrayLink= [];
    links.forEach(function(link){
      let arrayFetch = fetch(link)
        .then((res) => {
          let objectLink = {
            href: link,
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
is_dir : (path) => {
  try {
      var stat = fs.lstatSync(path);
      return stat.isDirectory();
  } catch (e) {
      // lstatSync throws an error if path doesn't exist
      return false;
  }
}


} 
