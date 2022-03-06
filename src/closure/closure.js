
// En este caso NO hay un closure, porque cada vez que se ejecuta la funcion, todas las variables internas son borradas cuando termina su ejecucion
// dando como resultado que solo se suma 0 + 5 y 0 + 10.

const money_Box = (coins) => {
    var saveCoins = 0;

    saveCoins += coins; //aqui se hace una suma y se asigna nuevamente a saveCoins
    console.log(`MoneyBox: $${saveCoins}`);

}

money_Box(5);
money_Box(10);

//====================================//====================================//====================================//====================================
// Estructura de Closure
// Dentro de una variable con arrow funcion se crea un scope interno junto con otra funcion, la cual siempre almacenará el ultimo valor anterior 
// pero para que funcione, debe declararse en UNA VARIABLE FUNCION primero
//==============
//NOTA: Recuerda que el funcionamiento de Closure es como una "MOCHILA" que siempre carga con un valor

const money_Box_Closure = (coins) =>{
    //para inicializar por primera vez y evitar errores
    let saveCoins = 0;
    //Con esta función, se crea el concepto Closure
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

//Variable Funcion.
// Aquí se inicializa la funcion money_Box_Closure() con un valor interno en '0' porque en money_Box_Closure, retorna undefined PERO
// internamente en la linea 23 saveCoins se queda con valor 0 aunque la funcion retorne undefined por primera vez.

let my_money_box = money_Box_Closure();
// Después se manda a llamar la variable funcion y se le pasa un argumento
my_money_box(4);
my_money_box(6);
my_money_box(10);