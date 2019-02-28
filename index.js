const fs = require('fs');
const fetch = require('node-fetch');
const util = require('util');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const validUrl = require('valid-url');

var read = util.promisify(fs.readFile);
let name = './lorem.md'

/*funcion que valida los links creado por mi
function validateLinks(link){
  return new Promise ((resolve,reject) => {
    fetch(link)
    .then(res =>{
      if (res.status===200){
        return resolve(true);
      }else {
        return resolve(false);
      }
    })
    .catch(error => {
      console.log('error', error);
    })
  })
}*/
//funcion que valida los kinks usano libreria
function validateLinks(link){
  if (validUrl.isUri(link)){
    return true;
} else {
    return false;
}
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
    links.forEach(function(link){
      let validate=validateLinks(link);
      console.log(validate);
      if (validate){
        console.log(link + ' its ok')
      }else{
        console.log(link + ' its fail')
      }
      })
  })
  .catch(error => {
    console.log('error', error);
  })
