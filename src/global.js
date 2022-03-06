// Scope Global
var hello='Hello';
let world='hello world';
// let world='111';
const helloWorld='Hello World!!!!';
// const helloWorld='ok'

// La asignacion de variables globales son VAR, LET, CONST. 
//VAR es la 'unica' variable que se puede volver a asignar o definir. mientras LET y CONST no te permitira hacerlo y saldra error

const anotherFunction =()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
// Correr funcion  para acceder a las variables globales
anotherFunction();

//=================================================
//MALA PRACTICA DE VARIABLES GLOBALES
//=================================================
//Es posible crear variables globales dentro de funciones, pero NO es recomendable

const func_create_global=()=>{
    globalVar='im global'
}

func_create_global();
console.log(globalVar);