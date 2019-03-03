const fetch = require('node-fetch');
const helper = require('./helper-module.js');
const path = require('path');

//creacion de modulo
module.exports = {

mdLinks: async (pathUser) => {
  let links = await (helper.readExtractor(pathUser));
  let route = path.resolve(pathUser);
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

validate: async (pathUser) => {
  let links = await (helper.readExtractor(pathUser));
  let validateLink= [];
  links.forEach(function(link){
    let arrayFetch = fetch(link)
      .then((res) => {
        let objectStatus = {
          href: link,
          status:res.status
        }
        return objectStatus;
      })
      .catch((error) =>{
        let fail = {
          hrefLink: link,
          statusLink: 'error'
        }
      })
    validateLink.push(arrayFetch);
  })
  Promise.all(validateLink)
    .then((values)=>{
      for (let i=0;i<values.length;i++){
        if ((values[i].status)===200){
          console.log((values[i].href)+' 200 --> OK!')
        }else if ((values[i].status)===404){
          console.log((values[i].href)+' 404 --> FAIL!')
        }
      }
    })
    .catch(console.error)
    
},
stats: async (pathUser)=>{
  let links = await (helper.readExtractor(pathUser));
  let statsLink= []; //b : broken , w: worked
  links.forEach(function(link){
    let status='';
    let arrayFetch = fetch(link)
      .then((res) => {
        let statusLink = res.status ;
        if (statusLink===200){
          status='w';
        }else if(statusLink===404){
          status='b';
        }
        return status ;
      })
      .catch((error) =>{
        let fail = {
          hrefLink: link,
          statusLink: 'error'
        }
      })
    statsLink.push(arrayFetch);
  })
Promise.all(statsLink)
  .then((values)=>{
    statsResult=[0,0,0]; //workedLink,brokenLink,totalLink
    for (let i=0;i<values.length;i++){
      if (values[i]==='w'){
        statsResult[0]+=1;
      }else if (values[i]==='b'){
        statsResult[1]+=1;
      }
      statsResult[2]+=1
    }
    console.log('Worked Links: '+ statsResult[0]);
    console.log('Broken Links: '+ statsResult[1]);
    console.log('Total of Links: '+ statsResult[2]);
  })
  .catch(console.error)
}

} 
