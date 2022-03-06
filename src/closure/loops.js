//=============================================//=============================================
// De acuerdo a la clase de block, se estaba creando un closure pero este no funcionaba porque la variable era declarada
// tipo VAR, entonces para que funcione se debe usar LET para que pueda actuar como un closure.
// EN CONCLUSION, ES MEJOR UTILIZAR LET O CONST EN LUGAR DE VAR
const funcion_for_let=()=>{
    // for (var i = 0; i < 10; i++){
    for (let i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}

funcion_for_let();