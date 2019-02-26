let Promesa1 = new Promise((resolve,reject)=>{
    resolve('Primera promesa resuelta');
});
let Promesa2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Segunda promsea resuelta');
    },500);
});
let Promesa3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Tercera promsea resuelta');
    },1000);
});
let Promesa4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Cuarta promsea resuelta');
    },1500);
});

Promise.all([Promesa1,Promesa2,Promesa3,Promesa4])
    .then((values)=>{
        console.log('Los valores son', values);
    })
    .catch((error)=>{
        console.log('Ocurrió un error',error);
    })