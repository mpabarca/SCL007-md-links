const fs = require('fs');
const fetch = require('node-fetch');
const util = require('util');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const validUrl = require('valid-url');

//COMPORTAMIENTO POR DEFECTO

var read = util.promisify(fs.readFile);
let name = './lorem.md'
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

