//De esta manera se puede acceder a informacion de datos privados en variables tipo funciones por default y se pueden cambiar
// por medio de un objeto en return.

const person = () => {
    //No puede modificarse este dato privado
    var saveName = "Name";
    return{
        getName: () => {
            return saveName;
        },
        setName: (name) =>{
            saveName = name;
        }
    };
};

// Inicializamos la variable funcion
new_person = person();
// obtenemos el dato privado guardado 
console.log(new_person.getName());
// Cambiamos el dato guardado
new_person.setName('Cristian');
// mandamos llamarel dato guardado previamente
console.log(new_person.getName());
new_person.setName('Eduardo');
console.log(new_person.getName());

console.log(new_person)