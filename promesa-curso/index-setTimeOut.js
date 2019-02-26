let promesa = new Promise ((resolve,reject)=>{
    console.log('Pendiente...')
    setTimeout(()=>{
        resolve('Promesa resuelta correctamente')
    },2000);
    setTimeout(()=>{
        resolve('Ocurrió un error')
    },3000);
});
promesa 
    .then((response)=>{
        console.log('Response: ',response);
    }).catch((error)=>{
        console.log('Error: ',error);
    })