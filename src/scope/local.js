const helloWorld = () =>{
    //Variable local y solo puede accederse desde dentro de la funcion
    const hello='Hello World';
    console.log(hello);
};

helloWorld();
console.log(hello);
//=============================================
//Ambito lexico:
//=============================================
//Es cuando existen variables globales y locales iguales, estas pueden coexistir de la siguiente manera

var scope ='im global';

const function_scope = () =>{
    //Aqui se vuelve a nombrar la variable SCOPE en donde se le asigna un valor, pero como se encuentra definida dentro de la funcion
    //La funcion trabaja solo con sus variables internas (En caso de que esten definidas en su construccion).
    //Es decir, no podran reasignarse.
    var scope = 'i am just a local variable'
    const func=()=>{
        return scope
    }
    console.log(func());
}
//Pero, si se pueden acceder a la variable global y obtener el resultado de la variable local
function_scope();
console.log(scope);