/* 
 Dias de semana abrimos a las 11,
 pero los fines de semana abrimos a las 9.
*/

//Entra al sitio web, para consultar si esta abierto hoy...
const dia = 6; //0: Domingo, 1: Lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // esta abierto, esta cerrado, hoy abrimos a las _ _

//if(dia===0 || dia===6){//if normal
/* if([0,6].includes(dia)){//analiza si el dia esta comprendido en los fines de semana
    console.log('Fin de semana');
    horaApertura=9;
}else{
    console.log('Dia de semana');
    horaApertura=11;
} */

horaApertura=([0,6].includes(dia)) ? 9 : 11;


// if(horaActual>=horaApertura){
//     mensaje='esta abierto';
// }else{
//     mensaje=`Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje=(horaActual>=horaApertura) ? 'esta abierto': `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});