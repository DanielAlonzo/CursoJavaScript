
let a = 5;

if(a > 10){
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10');
}

//console.log('Fin de programa');

const hoy = new Date();
//console.log(hoy);
let dia = hoy.getDay();//0: Domingo, 1:Lunes, 2: martes...

console.log({dia});

if(dia===0){
    console.log('Domingo');
}else if(dia===1){
    console.log('Lunes');
    // if(dia===1){
    //     console.log('Lunes');
    // }else{
    //     console.log('No es Lunes ni Domingo');
    // }
}


//sin usar if, else o switch, solo objetos y arreglos, se pueden hacer funciones dentro de los objetos
dia=4;
const diaLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
}
const diaLetras2 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
]

//dia de la semana
console.log(diaLetras2[dia]||'dia no definido');