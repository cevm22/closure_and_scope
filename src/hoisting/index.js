// Hoisting es la 'elevacion o reajuste prioridad' que hace el compilador de JS a las variables, declaraciones y funciones

//en este caso la variable 'a' es declarada primero, despues es inicializada con VAR y al final lo imprime.
//Aqui lo que hace el compilador es primero inicializar la variable VAR = a, después asignarle valor y al final lo imprime.
a = 5;
var a;
console.log(a)

//Pero no es posible que console.log() muestre la variable solicitada, ya que NO HA SIDO declarado ni inicializado (no existe), causando undefined.
console.log(a)
a = 5;
var a;

//En el caso de las funciones, estas son priorizadas por asignacion en la memoria y los ajusta. por lo tanto, en el siguiente ejemplo JS almacena 
//la funcion y después la ejecuta, por lo que no habría problema de ejecución.

name_dog('elmo');

function name_dog(name){
    console.log(name);
}
