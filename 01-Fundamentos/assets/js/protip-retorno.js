
function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const crearPersona2 = (nombre, apellido)=>{
    return {
        nombre: nombre,
        apellido: apellido
    }
}

function imprimeArgumentos(){
    console.log(arguments);
}
const imprimeArgumentos2=(...args)=>{//se usa el parametro rest para usar los argumentos,
    console.log(args);                 //pero no se puede añadir nada mas despues: ...args, nombre.
    //si se quiere usar un argumento antes dl parametro rest este debera llamarse por separado
    //en el console.log: (edad, ...args)    console.log(edad, args)
}
const imprimeArgumentos3=(edad,...args)=>{//se usa el parametro rest para usar los argumentos,
    return args;                 //pero no se puede añadir nada mas despues: ...args, nombre.
    //si se quiere usar un argumento antes dl parametro rest este debera llamarse por separado
    //en el console.log: (edad, ...args)    console.log(edad, args)
}

const persona = crearPersona('Daniel', 'Alonzo')
console.log(persona);
const persona2 = crearPersona2('Daniel', 'Alvarado')
console.log(persona2);
imprimeArgumentos(10, true, 'Daniel');
imprimeArgumentos2(25,false,'Abisai');
const [casado, vivo, nombre, saludo]= imprimeArgumentos3(10, true, false, 'Dani', 'Hola');//para llamar elementos del arreglo
console.log({casado, vivo,nombre,saludo});

const {apellido: nuevoApellido} = crearPersona('Dani', 'Alvarado');
console.log({nuevoApellido});



const tony={
    nombre: 'Tny Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes:['Mark I', 'Mark II'],
};

const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes})=> {
    edad=edad || 0;
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
  
}

imprimePropiedades(tony);