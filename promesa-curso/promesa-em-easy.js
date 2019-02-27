/* esto es solo necesario cuando creas por primera vez una promesa
const promise =
    new Promise((resolve,reject) =>{
        resolve ('good');
        //reject('bad');
    })
    */
//si usas una librería o algo ya creado solo habria que llamar a tal funcion que retornaria una promesa
some_async_function()
    .then(value => {
        console.log(value);
        return 1;
    })
    .then(value => {
        console.log(value);
        return 2;
    })
    .then(value => {
        console.log(value);
        return 3;
    })
    .then(value => {
        console.log(value);
        return 4;
    })
    .catch(err => {
        console.log(err);
    });