//BLOQUE se le considera codigo a los ciclos y condicionales IF, WHILE, FOR. o entre llaves { }

const fruits = () =>{
    //En este caso si es posible acceder a las variables, porque VAR es usado como ambito de FUNCION
    if (true) {
        var fruit1= 'apple';
        var fruit2= 'banana';
        var fruit3= 'kiwi';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

const fruits_let_const = () =>{
    //LET y CONST solo se pueden acceder en ambitos de bloque, en este caso deben estar dentro del block IF.
    if (true) {
        var fruit1= 'apple';
        let fruit2= 'banana';
        const fruit3= 'kiwi';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruits_let_const();

//=============================================
//En este bloque de codigo se puede ver que la variable X asignada con LET, no se sobreescribe. Como se explica en las funciones anteriores

let  x = 1;
{
    let  x = 2;
    console.log(x)
}
console.log(x)

//=============================================
// NOTA, a continuacion se escribe el mismo bloque, pero se sustituye por asignacion VAR, en lugar de LET.
// Aqui sucede que por ser VAR se reasigna a la variable GLOBAL el valor de la variable 'Y' con el valor 2
var  y= 1;
{
    var  y = 2;
    console.log(y)
}
console.log(y)

//=============================================//=============================================
// En este bloque, sucede que la asignacion de 'i' como VAR, solo se accede a su ultimo valor, ocasionando que solo se muestre el 10
const funcion_for=()=>{
    for (var i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}

funcion_for();

//=============================================//=============================================
// Para solucionar el codigo de manera sencilla, se sustituye VAR por LET, así podremos trabajar con cada iteración en el ambito.
const funcion_for_let=()=>{
    for (let i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}

funcion_for_let();