const build_count = (i) => {
    let count=i;

    const display_count = () => {
        console.log(count++);
    };
    return display_count;
}

// Aquí se crea un scope con inicializacion de 1
const counter = build_count(1);
counter();
counter();
counter();

// Acá se crea un segundo scope con otra inicializacion
const another_counter = build_count(100);
another_counter();
another_counter();
another_counter();