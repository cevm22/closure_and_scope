// Linea 10 DEBUGGER, este se utiliza para que el codigo se detenga y te muestra todo el SCOPE hasta ese punto
// Esta operacion se puede hacer en el navegador de chrome con del devtools en la consola

var a = 'hello';

function saludar(){
    let b = 'Hello World';
    const c = 'Hello World  - C';
    if (true){
        let d = 'Hellow World - DDD';
        debugger
    }
}
saludar();

///////////////
//uso del debugger con un ejemplo anterior de clase

const money_Box_Closure = (coins) =>{
    debugger
    //para inicializar por primera vez y evitar errores
    let saveCoins = 0;
    //Con esta función, se crea el concepto Closure
    const countCoins = (coins) =>{
        debugger
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