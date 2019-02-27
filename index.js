const fs = require('fs');
const fetch = require('node-fetch');
const util = require('util');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const validUrl = require('valid-url');

var read = util.promisify(fs.readFile);
let name = './lorem.md'

//funcion que valida los links
function validateLinks(link){
  return new Promise ((resolve,reject) => {
    fetch(link)
    .then(res =>{
      if (res.status===200){
        return true;
      }else {
        return false;
      }
    })
    .catch(error => {
      console.log('error', error);
    })
  })
}
//COMPORTAMIENTO POR DEFECTO
read(name)
  .then(data => {
    let str=data.toString()
    return(str);
  })
  .then(res => {
    let links = markdownLinkExtractor(res);
    let arrayLink= [];
    links.forEach(function(link){

      let object = {
        href: link,
        text: 'texto',
        file: name
      }
      arrayLink.push(object);
    })
  })
  .catch(error => {
    console.log('error', error);
  })
// --VALIDATE
read(name)
  .then(data => {
    let str=data.toString()
    return(str);
  })
  .then(res => {
    let links = markdownLinkExtractor(res);
    
  })
  .catch(error => {
    console.log('error', error);
  })
