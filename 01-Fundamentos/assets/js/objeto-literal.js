let personaje = {
    nombre: 'Tony Stark',
    codeNme: 'IronMan',
    vivo: 'false',
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.10
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip:'10880, 90265',
        ubicacion:'Malibu, California'
    },
    'ultima pelicula': 'Infinity War',
}
console.log(personaje);
console.log('Nombre: ', personaje.nombre) 
console.log('Nombre: ',personaje['nombre'])//otra manera de llamar los elementos de un arreglo
console.log('Cords', personaje.coords)
console.log('Lat', personaje.coords.lat)
console.log('No. Trajes', personaje.trajes.length)
console.log('ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);
console.log('ultimo traje:', personaje.trajes.pop());

const x = 'vivo';
console.log('vivo', personaje[x])
console.log('Ultima pelicula', personaje['ultima pelicula'])

//mas detalles
//Borrar una propiedad
delete personaje.edad
console.log(personaje)

//crear propiedad en ejecucion 
personaje.casado=true
//trabajar objeto como si fuera un arreglo**
const entriesPares = Object.entries(personaje)
console.log(entriesPares)

//bloquear modificaciones directas, no bloquea las modificaciones a objetos dentro del objeto*
Object.freeze(personaje)

personaje.dinero=10000000
personaje.direccion.ubicacion=10.30//*objeto dentro del objeto si se puede cambiar
console.log(personaje)

//listar todas las propiedades (solo nombres) que tiene el objeto**
const propiedades = Object.getOwnPropertyNames(personaje)//solo nombres
const valores     = Object.values(personaje)//solo valores
console.log(propiedades)
console.log(valores)