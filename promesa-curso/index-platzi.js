var fs = require('fs')

function readFile(name){
    return new Promise(function(resolve, reject){
        fs.readFile(name,function(err,content){
            resolve(content)
        })
    })
}
function writeFile(name,content){
    return new Promise(function(resolve,reject){
        fs.writeFile(name,content,function(err){
            resolve()
        })
    })
}

readFile('.lorem.txt')
.then(content => writeFile('./cantidad.txt', content.lenght))