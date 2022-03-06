const another_function = () =>{
    // Las variables VAR, LET y CONST funcionan igual que en global, recordando que VAR si se puede reasignar
    // mientras que LET y CONST NO es posible reasignarlos y obtienes un error
    //
    //RECOMENDACION: Siempre utilizar LET y CONST para asegurarnos de no repetir variables por error
    //
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2; //Quitar comentario para probar el error con el intento de reasignacion de LET
    console.log(x);
    console.log(y);
}

another_function();