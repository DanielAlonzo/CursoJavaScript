
//ejemplo 1
let a = 10;
let b = a;
a = 30;

console.log({a,b});

//ejemplo 2
let juan = {nombre: 'Juan'};
let ana  = {...juan};// los puntos suspensivos en este contexto se llaman parametro spread
ana.nombre = 'Ana'; //

console.log({juan, ana});

//ejemplo 3
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

//Ejemplo 4 - Arreglos
const frutas = ['Manzana', 'Pera', 'Pinia'];
console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});

//Ejemplo 4.2 - Arreglos
const frutas2 = ['Manzana', 'Pera', 'Pinia'];
console.time('slice');
const otrasFrutas2 = frutas2.slice();
console.timeEnd('slice');

otrasFrutas2.push('Mango');
console.table({frutas2, otrasFrutas2});

