let PrimeraPromesa = new Promise((resolve,reject) =>{
    resolve('Primera promesa exitosa')
});
let SegundaPromesa = new Promise((resolve,reject) =>{
    reject('Segunda promesa erronea')
});
let UltimaPromesa = new Promise((resolve,reject) =>{
    resolve('Ultima promesa exitosa')
});

PrimeraPromesa 
    .then(
        response => {
            console.log(response);
            return SegundaPromesa;
        }
    )
    .then(
        ValorSegundaPromesa => {
            console.log(ValorSegundaPromesa);
            return UltimaPromesa;
        }
    )
    .then(
        ValorUltimaPromesa => {
            console.log(ValorUltimaPromesa);
        }
    )
    .catch(
        error => {
            console.log('error', error);
        }
    )

/*
PrimeraPromesa 
    .then(
        response => {
            console.log(response);
            return SegundaPromesa;
        },
        error => {
            console.log('error');
            throw error;
        }
    )
    .then(
        ValorSegundaPromesa => {
            console.log(ValorSegundaPromesa);
        },
        error =>{
            console.log('error 2');
        }
    )
    */
