let juegos = ['Zelda', 'Mario', 'Metroid', 'Crono']
console.log('Largo: ', juegos.length)

let primero = juegos[0]
let ultimo = juegos[juegos.length - 1]//arroja el ultimo elemento del arreglo, no importando el 
                                       //el numero de estos que contenga

console.log({primero, ultimo})                              

juegos.forEach((elemento, indice, arreglo)=>{

    console.log({elemento, indice, arreglo})
})

let nuevaLongitud = juegos.push('F-Zero')
console.log({nuevaLongitud, juegos})

nuevaLongitud = juegos.unshift('Metal Slug')
console.log({nuevaLongitud, juegos})

let juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos})

let pos=1
let juegosBorrados = juegos.splice(pos,2)
console.log({juegosBorrados, juegos})

let metroidIndex = juegos.indexOf('Metroid')//si muestra el valor -1 significa que no encontro el valor
console.log({metroidIndex, juegos})

//TODO:Referencias